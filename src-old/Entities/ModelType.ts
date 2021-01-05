import SchemaGenerator from "../SchemaGenerator";
import BaseType from "./BaseType";
import {getInputSchema} from "./traits/inputMethods";
import {prepareOutputSchema} from "./traits/outputMethods";

abstract class ModelType extends BaseType {
  constructor(data = {}) {
    super(data);
  }

  public static getOutputSchema: Function = SchemaGenerator.getSchema;
  public static prepareOutputSchema: Function = prepareOutputSchema;
  public getInputSchema(): Object
  {
    return getInputSchema.apply(this);
  }

}

export default ModelType;
