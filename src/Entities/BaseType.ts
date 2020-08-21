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

  abstract mutation(data: Object): void;
}

export default BaseType;
