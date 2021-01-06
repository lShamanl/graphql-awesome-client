import TypeGQ from "./TypeGQ";
import NullType from "./NullType";
import StringType from "./StringType";
import NumberType from "./NumberType";
import BooleanType from "./BooleanType";

class ArrayType extends TypeGQ {
    public renderAsInput(): string {
        let renderValues = [];
        this.value.map((value) => {
            if (value instanceof TypeGQ) {
                renderValues.push(value.renderAsInput());
            } else {
                let typeConstructor = getTypeConstructor(value);
                renderValues.push((new typeConstructor(null, value).renderAsInput()));
            }
        })

        return (this.name)
            ? `${this.name}:[${renderValues.join(',')}]`
            : `[${renderValues.join(',')}]`;
    }

    public renderAsOutput(): string {
        let renderValues = [];
        this.value.map((value) => {
            if (value instanceof TypeGQ) {
                renderValues.push(value.renderAsOutput());
            }
        })

        return `${renderValues.join(',')}`;
    }
}

export default ArrayType;

function getTypeConstructor(value: any) {
    if (typeof value === "undefined") return NullType;
    if (value === null) return NullType;

    switch (Object.prototype.toString.call(value).match(/^\[object\s(.*)\]$/)[1]) {
        case String: return StringType;
        case Number: return NumberType;
        case Boolean: return BooleanType;
    }

    throw new Error('Invalid value type');
}
