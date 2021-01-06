import TypeGQ from "./TypeGQ";

class ArrayType extends TypeGQ {
    value: [TypeGQ];

    render(): string {
        let renderedValues = this.value.map((value: TypeGQ) => {
            return value.render();
        });

        return `${this.name}:[${renderedValues.join(',')}]`;
    }
}

export default ArrayType;
