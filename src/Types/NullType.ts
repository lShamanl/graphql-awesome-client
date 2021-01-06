import ScalarType from "./ScalarType";

class NullType extends ScalarType {
    constructor(name: string) {
        super(name, null);
    }

    render(): string {
        return `${this.name}:null`;
    }
}

export default NullType;
