import NullType from "../Types/NullType";
import StringType from "../Types/StringType";
import NumberType from "../Types/NumberType";
import BooleanType from "../Types/BooleanType";
import ObjectType from "../Types/ObjectType";

export default function getTypeConstructor(value: any) {
    if (typeof value === "undefined") return NullType;
    if (value === null) return NullType;

    let className = Object.prototype.toString.call(value).match(/^\[object\s(.*)\]$/)[1];
    switch (className) {
        case 'String':  return StringType;
        case 'Number':  return NumberType;
        case 'Boolean': return BooleanType;
        case 'Object':  return ObjectType;
    }

    throw new Error('Invalid value type: ' + className);
}
