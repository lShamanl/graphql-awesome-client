abstract class BaseType {
  protected constructor(data = {}) {
    this.mutation(data);
  }

  /**
   * Клонирует текущий объект
   */
  public clone(): BaseType|{}
  {
    // @ts-ignore
    return new this.constructor({...this});
  }


  /**
   * Метод, являющийся синтаксическим сахаром, который пытается самостоятельно произвести обновление данных в сущности модели(типа)
   * @param data
   * @param types
   */
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

  /**
   * Проверка моделей на идентичность
   * @param model
   */
  public hasDifferences(model: BaseType): boolean
  {
    return JSON.stringify(this) !== JSON.stringify(model);
  }

  /**
   * Внутренний метод, который выполняет авто-заполнение свойств по умолчанию
   * @param modelClass
   */
  static mapModify(modelClass: any = null): Object
  {
    let defaultPropertySettings = {
      type: String,
      modelProperty: true,
      input: false,
      output: true,
      allowNull: false
    };

    let map = !!modelClass ? modelClass.map() : this.map();

    for (let property in map) {
      if (map.hasOwnProperty(property)) {
        map[property] = {...defaultPropertySettings, ...map[property]};
      }
    }

    return map;
  }

  /**
   * Мутация текущей сущности
   * @param data
   */
  abstract mutation(data: Object): void;

  /**
   * Маппер, описывающий поля сущности
   */
  static map(): Object { return {} }

  /**
   * Возвращает название класса (типа GraphQl)
   */
  static getClassName(): string { return null }
}

export default BaseType;
