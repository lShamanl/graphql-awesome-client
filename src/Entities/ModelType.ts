import SchemaGenerator from "../SchemaGenerator";
import BaseType from "./BaseType";

abstract class ModelType extends BaseType {
  constructor(data = {}) {
    super(data);
  }

  public static getOutputSchema: Function = SchemaGenerator.getSchema;

  public hasDifferences(model: BaseType): boolean
  {
    return JSON.stringify(this) !== JSON.stringify(model);
  }

  static mapModify(modelClass: any = null): Object
  {
    let map = !!modelClass ? modelClass.map() : this.map();
    for (let property in map) {
      //todo: мержить через деструктуризацию
      if (map.hasOwnProperty(property)) {
        map[property].type === undefined ? map[property].type = String : map[property].type;
        map[property].modelProperty === undefined ? map[property].modelProperty = true : map[property].modelProperty;
        map[property].input === undefined ? map[property].input = false : map[property].input;
        map[property].output === undefined ? map[property].output = true : map[property].output;
      }
    }

    return map;
  }

  /**
   * Удаляет поля, равные "undefined"
   * @param params
   * @protected
   */
  protected clearUndefinedParams(params): void
  {
    for (let i in params) {
      if (params.hasOwnProperty(i) && params[i] === undefined) {
        delete params[i];
      }
    }
  }

  //todo: сделать это как-то поуниверсальнее, чтобы была возможность передавать null, 0, false и т.д. Возможно это выльется в такой же IssetChecker, как на фронте
  public getInputSchema(): Object
  {
    // @ts-ignore
    let map = this.constructor.mapModify();

    let params = {};
    for (let property in map) {
      if (map.hasOwnProperty(property)) {

        if (!!map[property].input === true) {
          params[property] = undefined;

          if (!!this[property] && this[property].getInputSchema !== undefined) {
            params[property] = this[property].getInputSchema();
            continue;
          }
          if (this[property] !== null) {
            params[property] = this[property];
          }
        }
      }
    }

    this.clearUndefinedParams(params);

    // @ts-ignore
    let className = this.constructor.name;

    let inputSchema = {};
    inputSchema[className] = params;

    return inputSchema;
  }

  static prepareOutputSchema(settings = {allowedFields: [], forbiddenFields: [], schemaRules: {}}, modelClass): Object
  {
    let map = ModelType.mapModify(modelClass);

    let schema = {};

    for (let property in map) {
      if (map[property].output === true) {
        let propertyType = map[property].type;
        if (propertyType.getOutputSchema !== undefined) {
          schema[property] = propertyType.getOutputSchema();
          continue;
        }
        let isScalar = propertyType === Number || propertyType === String || propertyType === Boolean;
        if (isScalar) {
          schema[property] = null;
          continue;
        }
        if (propertyType === Object) {
          schema[property] = null;
          continue;
        }

        throw Error(`Неизвестный тип данных: ${propertyType}`);
      }
    }

    return SchemaGenerator.getSchema(settings, schema);
  }

  static getClassName(): string
  {
    return null;
  }

  public autoMutation(data: Object, types: any): void
  {
    // @ts-ignore
    let map = this.constructor.mapModify();

    for (let property in map) {
      if (map.hasOwnProperty(property)) {
        let propertyType = map[property].type;

        if (propertyType === Number) {
          this[property] = types.number(data[property]);
          continue;
        }
        if (propertyType === String) {
          this[property] = types.string(data[property]);
          continue;
        }
        if (propertyType === Boolean) {
          this[property] = types.boolean(data[property]);
          continue;
        }
        if (propertyType === Object) {
          this[property] = types.object(data[property]);
          continue;
        }

        if (propertyType.getOutputSchema !== undefined && propertyType.getClassName !== undefined) {
          if (!!types[propertyType.getClassName()] === false) {
            throw Error(`Не реализован статический метод типа для: ${propertyType}`);
          }
          this[property] = types[propertyType.getClassName()](data[property]);
        }

      }
    }
  }

  static map(): Object { return {} }
}

export default ModelType;
