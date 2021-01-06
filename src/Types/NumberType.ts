import ScalarType from "./ScalarType";

class NumberType extends ScalarType {
    render(): string {
        return `${this.name}:${this.value}`;
    }
}

export default NumberType;
