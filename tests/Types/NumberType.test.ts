import NumberType from "../../src/Types/NumberType";
const faker = require('faker');
const setUp = {
    type: {
        name: 'numberType',
        value: faker.random.number
    }
}

describe('NumberType', () => {
    test('constructor', () => {
        const type = createType();
        expect(type.value).toBe(setUp.type.value);
        expect(type.name).toBe(setUp.type.name);
    });

    test('render as input', () => {
        const typeTrue = createType();
        expect(typeTrue.renderAsInput()).toBe(`${typeTrue.name}:${typeTrue.value}`);
    });

    test('render as output', () => {
        const type = createType();
        expect(type.renderAsOutput()).toBe(`${type.name}`);
    });
});

function createType(): NumberType {
    return new NumberType(setUp.type.name, faker.random.number);
}
