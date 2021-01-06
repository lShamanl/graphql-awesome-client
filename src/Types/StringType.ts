import ScalarType from "./ScalarType";

class StringType extends ScalarType {
    render(): string {
        return `${this.name}:"${this.value}"`;
    }
}

export default StringType;
