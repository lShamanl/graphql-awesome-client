import TypeGQ from "../Types/TypeGQ";
import NodeGQ from "./NodeGQ";

class Method extends NodeGQ {
    inputs: TypeGQ[];
    outputs: TypeGQ[];

    public render(): string {
        return `${this.name}(${this.renderInputs()}){${this.renderOutputs()}}`;
    }

    public renderInputs(): string {
        return "";
    }

    public renderOutputs(): string {
        return "";
    }
}

export default Method;
