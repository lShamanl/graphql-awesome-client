import SchemaGenerator from "../SchemaGenerator";
import BaseType from "./BaseType";

abstract class ModelType extends BaseType{
  constructor(data = {}) {
    super(data);
  }
  public static getOutputSchema: Function = SchemaGenerator.getSchema;

  public hasDifferences(model: BaseType): boolean
  {
    return JSON.stringify(this) !== JSON.stringify(model);
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

export default ModelType;
