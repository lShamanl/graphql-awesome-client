import ScalarType from "./ScalarType";

class BooleanType extends ScalarType {
    render(): string {
        return `${this.name}:${!!this.value ? 'true' : 'false'}`;
    }
}

export default BooleanType;
