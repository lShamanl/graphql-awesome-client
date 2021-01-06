import ScalarType from "./ScalarType";

class StringType extends ScalarType {
    renderAsInput(): string {
        return (this.name)
            ? `${this.name}:"${this.value}"`
            : `"${this.value}"`;
    }
}

export default StringType;
