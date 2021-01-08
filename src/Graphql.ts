import TypeGQ from "./Types/TypeGQ";
import getTypeConstructor from "./functions/getTypeConstructor";
import Action from "./Nodes/Action";
import Method from "./Nodes/Method";
import NullType from "./Types/NullType";
import SendInterface from "./Interfaces/SendInterface";

class Graphql {
    public apiURL: string;

    constructor(apiURL: string) {
        this.apiURL = apiURL;
    }

    /**
     * Send a custom RAW request to the Graphql server
     * @param query
     */
    public async sendRaw(query: string): Promise<any> {
        let response = await fetch(this.apiURL, {
            method: "POST",
            body: JSON.stringify({query})
        })
        return (await response.json()).data;
    }

    public sendSingle(path: string, input: {}, output: {}) {
        let inputGQ = this.toGraphQlType(input);
        let outputGQ = this.toGraphQlType(output);

        let action = this.createAction(path, inputGQ, outputGQ);
        return this.sendRaw(action.render());
    }

    public sendMultiple(data: SendInterface[]) {
        let actions: Action[] = [];
        data.map((sendData: SendInterface) => {
            let inputGQ = this.toGraphQlType(sendData.input);
            let outputGQ = this.toGraphQlType(sendData.output);

            actions.push(this.createAction(sendData.path, inputGQ, outputGQ));
        })
        actions.reduce((prev: Action, next: Action) => {
            prev.gobble(next);
            return prev;
        });

        return this.sendRaw(actions[0].render());
    }

    public querySingle(path: string, input: {}, output: {}): Promise<any> {
        if (path.split('.').shift() !== 'query') {
            path = `query.${path}`;
        }

        return this.sendSingle(path, input, output);
    }

    public queryMultiple(data: SendInterface[]): Promise<any> {
        data.map((sendData: SendInterface) => {
            if (sendData.path.split('.').shift() !== 'query') {
                sendData.path = `query.${sendData.path}`;
            }
        })

        return this.sendMultiple(data);
    }

    public mutationSingle(path: string, input: {}, output: {}): Promise<any> {
        if (path.split('.').shift() !== 'mutation') {
            path = `mutation.${path}`;
        }

        return this.sendSingle(path, input, output);
    }

    public mutationMultiple(data: SendInterface[]): Promise<any> {
        data.map((sendData: SendInterface) => {
            if (sendData.path.split('.').shift() !== 'mutation') {
                sendData.path = `mutation.${sendData.path}`;
            }
        })

        return this.sendMultiple(data);
    }

    protected toGraphQlType(rawData): TypeGQ[] {
        let typesGQ = [];
        if (rawData instanceof Array) {
            for (let data of rawData) {
                typesGQ.push(new NullType(data.toString()));
            }
        } else if (rawData instanceof Object) {
            for (let i in rawData) {
                if (!rawData.hasOwnProperty(i)) continue;
                if (rawData[i] instanceof TypeGQ) {
                    typesGQ.push(rawData[i]);
                    continue;
                }
                let constructor = getTypeConstructor(rawData[i]);
                typesGQ.push(new constructor(i, rawData[i]));
            }
        }

        return typesGQ;
    }

    protected createAction(path: string, inputGQ: TypeGQ[], outputGQ: TypeGQ[]): Action {
        if (path.length === 0) {
            throw new Error('Path is empty');
        }
        let nodeNames = path.split('.');
        if (nodeNames.length < 2) {
            throw new Error('Method in path is not found');
        }
        let method = new Method(nodeNames.pop());
        method.inputs = inputGQ;
        method.outputs = outputGQ;

        let actions = nodeNames.map((nodeName: string) => {
            return new Action(nodeName)
        });

        actions.reduce((parent: Action, child: Action) => {
            parent.addSubAction(child);
            return child;
        })
        actions[actions.length - 1].addMethod(method);
        return actions[0];
    }
}

export default Graphql;
