abstract class BaseType {
  protected constructor(data = {}) {
    this.mutation(data);
  }

  /**
   * Clones the current object
   */
  public clone(): BaseType|{}
  {
    // @ts-ignore
    return new this.constructor({...this});
  }

  /**
   * A method that is a syntactic sugar that tries to update data in the model entity (type)
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
   * Model verification of the identity
   * @param model
   */
  public hasDifferences(model: BaseType): boolean
  {
    return JSON.stringify(this) !== JSON.stringify(model);
  }

  /**
   * Internal method that performs auto-filling of default properties
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
   * Mutation of the current entity
   * @param data
   */
  abstract mutation(data: Object): void;

  /**
   * Mapper that describes the fields of the entity
   */
  static map(): Object { return {} }

  /**
   * Returns the class name (of the GraphQl type)
   */
  static getClassName(): string { return null }
}

export default BaseType;
