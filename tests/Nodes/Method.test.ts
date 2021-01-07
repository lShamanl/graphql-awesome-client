import Method from "../../src/Nodes/Method";
import StringType from "../../src/Types/StringType";
import NumberType from "../../src/Types/NumberType";
const faker = require('faker');

describe('Method', () => {
    test('constructor', () => {
        const node = new Method('methodName');
        expect(node instanceof Method).toBe(true);
        expect(node.name).toBe('methodName');
    });

    describe('render', () => {
        test('Скалярные типы', () => {
            const methodName = 'myMethod';
            const method = new Method(methodName);
            method.inputs = [
                new NumberType('id', 17),
                new StringType('token', 'd312f32g4s')
            ];
            method.outputs = [
                new StringType('id'),
                new StringType('phone'),
                new StringType('name'),
            ];

            expect(method.render()).toBe(`${methodName}(id:17,token:"d312f32g4s"){id,phone,name}`);
        });
    });
});
