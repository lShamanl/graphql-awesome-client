import SchemaGenerator from "../SchemaGenerator";
import BaseType from "./BaseType";

abstract class OutputType extends BaseType {
  constructor(data = {}) {
    super(data);
  }
  public static getOutputSchema: Function = SchemaGenerator.getSchema;

  public hasDifferences(model: BaseType): boolean
  {
    return JSON.stringify(this) !== JSON.stringify(model);
  }

}

export default OutputType;
