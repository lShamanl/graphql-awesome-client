import ScalarType from "./ScalarType";

class BooleanType extends ScalarType {
    renderAsInput(): string {
        return (this.name)
            ? `${this.name}:${!!this.value ? 'true' : 'false'}`
            : `${!!this.value ? 'true' : 'false'}`;
    }
}

export default BooleanType;
