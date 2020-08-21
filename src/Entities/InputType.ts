import BaseType from "./BaseType";

abstract class InputType extends BaseType {
  constructor(data = {}) {
    super(data);
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

  abstract getInputSchema(): any;
}

export default InputType;
