abstract class NodeGQ {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract render(): string;
}

export default NodeGQ;
