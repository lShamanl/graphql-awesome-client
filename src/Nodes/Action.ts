import NodeGQ from "./NodeGQ";
import Method from "./Method";

class Action extends NodeGQ {
    public subActions: Action[] = [];
    public methods: Method[] = [];

    addSubAction(action: Action) {
        if (this.subActions.indexOf(action) === -1) {
            this.subActions.push(action);
        }
    }

    addMethod(method: Method) {
        if (this.methods.indexOf(method) === -1) {
            this.methods.push(method);
        }
    }

    render(): string {
        let rendered = [];
        if (this.subActions.length !== 0) {
            this.subActions.map((subAction: Action) => {
                rendered.push(`${this.name}{${subAction.render()}}`);
            })
        }
        if (this.methods.length !== 0) {
            this.methods.map((method: Method) => {
                rendered.push(`${this.name}{${method.render()}}`);
            })
        }
        return rendered.join(',');
    }

    gobble(action: Action) {
        let busy = new Map();
        let methods = [];
        let subActions = [];

        [...this.methods, ...action.methods].map((method: Method) => {
            if (!busy.has(method.name)) {
                methods.push(method);
                busy.set(method.name, method);
            }
        });
        [...this.subActions, ...action.subActions].map((action: Action) => {
            if (!busy.has(action.name)) {
                subActions.push(action);
                busy.set(action.name, action);
            } else if (busy.get(action.name) instanceof Action) {
                busy.get(action.name).gobble(action);
            }
        });

        this.subActions = subActions;
        this.methods = methods;
    }
}

export default Action;
