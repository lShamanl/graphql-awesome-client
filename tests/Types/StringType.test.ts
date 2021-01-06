import StringType from "../../src/Types/StringType";
const faker = require('faker');
const setUp = {
    type: {
        name: 'stringType',
        value: faker.random.string
    }
}

describe('StringType', () => {
    test('constructor', () => {
        const type = createType();
        expect(type.value).toBe(setUp.type.value);
        expect(type.name).toBe(setUp.type.name);
    });

    test('render as input', () => {
        const typeTrue = createType();
        expect(typeTrue.renderAsInput()).toBe(`${typeTrue.name}:"${typeTrue.value}"`);
    });

    test('render as output', () => {
        const type = createType();
        expect(type.renderAsOutput()).toBe(`${type.name}`);
    });
});

function createType(): StringType {
    return new StringType(setUp.type.name, faker.random.string);
}
