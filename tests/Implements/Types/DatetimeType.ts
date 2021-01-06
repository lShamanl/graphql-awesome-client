import ModelType from "../../../src/Types/ModelType";
import ModelSchema from "../../../src/Types/ModelSchema";
import StringType from "../../../src/Types/StringType";

class DatetimeType extends ModelType {
    getSchema(): ModelSchema[] {
        return [
            new ModelSchema('time', StringType, {isInput: true, isOutput: true}),
        ];
    }
}

export default DatetimeType;
