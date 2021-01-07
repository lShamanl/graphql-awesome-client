import TypeGQ from "./TypeGQ";
import getTypeConstructor from "../functions/getTypeConstructor";

class ArrayType extends TypeGQ {
    public renderAsInput(): string {
        let renderValues = [];
        this.value.map((value) => {
            if (value instanceof TypeGQ) {
                let clone = value.clone();
                clone.name = null;

                renderValues.push(clone.renderAsInput());
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
        return `${this.name}`;
    }
}

export default ArrayType;
