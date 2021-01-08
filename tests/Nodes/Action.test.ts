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
            node.addMethod(new Method(methodName));

            expect(node.render()).toBe(`${nodeName}{${methodName}(){}}`);
        });
        test('Несколько уровней вложенности', () => {
            const node_1 = new Action('root');
            const node_2 = new Action('action_1');
            const node_3 = new Action('action_2');
            node_1.addSubAction(node_2);
            node_2.addSubAction(node_3);
            node_3.addMethod(new Method('method'))

            expect(node_1.render()).toBe(`root{action_1{action_2{method(){}}}}`);
        });
    });
});
