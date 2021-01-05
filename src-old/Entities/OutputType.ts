import SchemaGenerator from "../SchemaGenerator";
import BaseType from "./BaseType";
import {prepareOutputSchema} from "./traits/outputMethods";

abstract class OutputType extends BaseType {
  constructor(data = {}) {
    super(data);
  }
  public static getOutputSchema: Function = SchemaGenerator.getSchema;
  public static prepareOutputSchema: Function = prepareOutputSchema;

}

export default OutputType;
