import Action from '../../src/Nodes/Action';
import Method from "../../src/Nodes/Method";
import NodeGQ from "../../src/Nodes/NodeGQ";
const faker = require('faker');

describe('Action', () => {
    test('constructor', () => {
        const node = new Action('mutation');
        expect(node instanceof Action).toBe(true);
        expect(node.name).toBe('mutation');
    });

    describe('render', () => {
        test('Один уровень вложенности', () => {
            const nodeName = 'mutation';
            const methodName = 'myMethod';

            const node = new Action(nodeName);
            node.method = new Method(methodName);

            expect(node.render()).toBe(`${nodeName}{${methodName}(){}}`);
        });
        test('Несколько уровней вложенности', () => {
            const node = new Action('root');
            node.subAction = new Action('action_1');
            node.subAction.subAction = new Action('action_2');
            node.subAction.subAction.method = new Method('method');

            expect(node.render()).toBe(`root{action_1{action_2{method(){}}}}`);
        });
    });
});
