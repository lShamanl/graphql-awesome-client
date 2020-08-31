import BaseType from "../BaseType";
import SchemaGenerator from "../../SchemaGenerator";

function prepareOutputSchema(settings = {allowedFields: [], forbiddenFields: [], schemaRules: {}}, modelClass): Object
{
    let map = BaseType.mapModify(modelClass);

    let schema = {};

    for (let property in map) {
        if (map[property].output === true) {
            let propertyType = map[property].type;
            if (propertyType.getOutputSchema !== undefined) {
                schema[property] = propertyType.getOutputSchema();
                continue;
            }
            let isScalar = propertyType === Number || propertyType === String || propertyType === Boolean;
            if (isScalar) {
                schema[property] = null;
                continue;
            }

            if (typeof propertyType === 'object') {
                if (propertyType instanceof Array) {
                    propertyType = propertyType[0];

                    // Дублекод. Как-то избавиться.
                    if (propertyType.getOutputSchema !== undefined) {
                        schema[property] = propertyType.getOutputSchema();
                        continue;
                    }
                    let isScalar = propertyType === Number || propertyType === String || propertyType === Boolean;
                    if (isScalar) {
                        schema[property] = null;
                        continue;
                    }
                }

                schema[property] = null;
                continue;
            }
            if (propertyType === Object) {
                schema[property] = null;
                continue;
            }

            throw Error(`Неизвестный тип данных: ${propertyType}`);
        }
    }

    return SchemaGenerator.getSchema(settings, schema);
}

export {prepareOutputSchema};
