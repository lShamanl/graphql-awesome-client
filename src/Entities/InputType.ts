import BaseType from "./BaseType";
import {getInputSchema} from "./traits/inputMethods";

abstract class InputType extends BaseType {
  constructor(data = {}) {
    super(data);
  }

  public getInputSchema(): Object
  {
    return getInputSchema.apply(this);
  }

}

export default InputType;
