import NullType from "../../src/Types/NullType";
import BooleanType from "../../src/Types/BooleanType";

const setUp = {
    type: {
        name: 'nullType'
    }
}

describe('NullType', () => {
    test('constructor', () => {
        const type = createType();
        expect(type.value).toBe(null);
        expect(type.name).toBe(setUp.type.name);
    });

    test('render as input', () => {
        const type = createType();
        expect(type.renderAsInput()).toBe(`${type.name}:null`);
    });

    test('render as output', () => {
        const type = createType();
        expect(type.renderAsOutput()).toBe(`${type.name}`);
    });
});

function createType(): NullType {
    return new NullType(setUp.type.name);
}
