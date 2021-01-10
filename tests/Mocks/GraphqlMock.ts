import Graphql from "../../src/Graphql";
import Action from "../../src/Nodes/Action";

class GraphqlMock extends Graphql {
    public async sendRaw(query: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve(query);
        });
    }

    public createAction(path: string, input: {}, output: {}): Action {
        return super.createAction(path, input, output);
    }
}

export default GraphqlMock;
