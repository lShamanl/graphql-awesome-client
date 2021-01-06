import BooleanType from "../../src/Types/BooleanType";
const faker = require('faker');
const setUp = {
    type: {
        name: 'booleanType',
        value: faker.random.boolean
    }
}

describe('BooleanType', () => {
    test('constructor', () => {
        const type = createType();
        expect(type.value).toBe(setUp.type.value);
        expect(type.name).toBe(setUp.type.name);
    });

    test('render as input', () => {
        const typeTrue = new BooleanType(setUp.type.name, true);
        expect(typeTrue.renderAsInput()).toBe(`${typeTrue.name}:true`);

        const typeFalse = new BooleanType(setUp.type.name, false);
        expect(typeFalse.renderAsInput()).toBe(`${typeFalse.name}:false`);
    });

    test('render as output', () => {
        const typeTrue = new BooleanType(setUp.type.name, faker.random.boolean);
        expect(typeTrue.renderAsOutput()).toBe(`${typeTrue.name}`);
    });
});

function createType(): BooleanType {
    return new BooleanType(setUp.type.name, faker.random.boolean);
}
