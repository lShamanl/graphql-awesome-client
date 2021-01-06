import NodeGQ from "./NodeGQ";
import Method from "./Method";

class Action extends NodeGQ {
    subAction: Action = null;
    method: Method = null;

    render(): string {
        if (!!this.subAction) {
            return `${this.name}{${this.subAction.render()}}`;
        } else if (!!this.method) {
            return `${this.name}{${this.method.render()}}`;
        }
        throw new Error('The node chain is not finished');
    }
}

export default Action;
