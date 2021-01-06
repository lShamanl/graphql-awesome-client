class ModelSchema {
    public name: string;
    public type;
    public isInput: boolean;
    public isOutput: boolean;

    constructor(name: string, type, settings: DefaultSettings = defaultSettings) {
        settings = {...settings, ...defaultSettings};
        this.name = name;
        this.type = type;
        this.isInput = settings.isInput;
        this.isOutput = settings.isOutput;
    }
}

export default ModelSchema;

type DefaultSettings = {
    isInput?: boolean,
    isOutput?: boolean
}

const defaultSettings: DefaultSettings = {
    isInput: true,
    isOutput: true
}
