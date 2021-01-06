import ScalarType from "./ScalarType";

class NumberType extends ScalarType {
    renderAsInput(): string {
        return (this.name)
            ? `${this.name}:${this.value}`
            : `${this.value}`;
    }
}

export default NumberType;
