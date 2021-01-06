import TypeGQ from "./TypeGQ";
import ModelSchema from "./ModelSchema";

abstract class ModelType extends TypeGQ {
    renderAsInput(): string {
        let renderValues = [];
        let values = this.value;
        this.getSchema().map((modelSchema: ModelSchema) => {
            if (modelSchema.isInput) {
                let typeConstructor = modelSchema.type;
                renderValues.push((new typeConstructor(modelSchema.name, values[modelSchema.name]).renderAsInput()));
            }
        })

        return (this.name)
            ? `${this.name}:{${renderValues.join(',')}}`
            : `{${renderValues.join(',')}}`;
    }

    renderAsOutput(): string {
        let renderValues = [];
        let values = this.value;
        this.getSchema().map((modelSchema: ModelSchema) => {
            if (modelSchema.isOutput) {
                let typeConstructor = modelSchema.type;
                renderValues.push((new typeConstructor(modelSchema.name, values[modelSchema.name]).renderAsOutput()));
            }
        })

        return `${renderValues.join(',')}`;
    }

    abstract getSchema(): ModelSchema[];
}

export default ModelType;
