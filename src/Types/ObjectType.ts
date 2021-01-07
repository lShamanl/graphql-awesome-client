import TypeGQ from "./TypeGQ";
import getTypeConstructor from "../functions/getTypeConstructor";

class ObjectType extends TypeGQ {
    public renderAsInput(): string {
        let renderValues = [];
        for (let name in this.value) {
            if (!this.value.hasOwnProperty(name)) continue;
            let value = this.value[name];

            if (value instanceof TypeGQ) {
                renderValues.push(value.renderAsInput());
            } else {
                let typeConstructor = getTypeConstructor(value);
                renderValues.push((new typeConstructor(name, value).renderAsInput()));
            }
        }

        return (this.name)
            ? `${this.name}:{${renderValues.join(',')}}`
            : `{${renderValues.join(',')}}`;
    }

    public renderAsOutput(): string {
        return `${this.name}`;
    }
}

export default ObjectType;
