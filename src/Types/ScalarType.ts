import TypeGQ from "./TypeGQ";

abstract class ScalarType extends TypeGQ {
    constructor(name: string, value: any = null) {
        super(name, value);
    }

    renderAsOutput() {
        return `${this.name}`;
    }
}

export default ScalarType;
