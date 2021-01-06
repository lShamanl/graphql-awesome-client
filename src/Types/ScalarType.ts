import TypeGQ from "./TypeGQ";

abstract class ScalarType extends TypeGQ {
    renderAsOutput() {
        return `${this.name}`;
    }
}

export default ScalarType;
