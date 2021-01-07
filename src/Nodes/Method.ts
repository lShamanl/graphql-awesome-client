import TypeGQ from "../Types/TypeGQ";
import NodeGQ from "./NodeGQ";
import getTypeConstructor from "../functions/getTypeConstructor";

class Method extends NodeGQ {
    inputs: any[];
    outputs: TypeGQ[];

    public render(): string {
        return `${this.name}(${this.renderInputs()}){${this.renderOutputs()}}`;
    }

    public renderInputs(): string {
        let renderValues = [];
        this.inputs.map((value) => {
            if (value instanceof TypeGQ) {
                renderValues.push(value.renderAsInput());
            } else {
                let typeConstructor = getTypeConstructor(value);
                renderValues.push((new typeConstructor(null, value).renderAsInput()));
            }
        })

        return `${renderValues.join(',')}`;
    }

    public renderOutputs(): string {
        let renderValues = [];
        this.outputs.map((type: TypeGQ) => {
            renderValues.push(type.renderAsOutput());
        });

        return `${renderValues.join(',')}`;
    }
}

export default Method;
