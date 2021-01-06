import ScalarType from "./ScalarType";

class NullType extends ScalarType {
    constructor(name: string) {
        super(name, null);
    }

    renderAsInput(): string {
        return (this.name)
            ? `${this.name}:null`
            : `null`;
    }
}

export default NullType;
