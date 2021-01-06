import TypeGQ from "./TypeGQ";

class ModelType extends TypeGQ {
    render(): string {
        return '';
        // return `${this.name}:${!!this.value ? 'true' : 'false'}`;
    }
}

export default ModelType;
