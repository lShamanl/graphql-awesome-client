import NullType from "../../src/Types/NullType";

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

    test('render', () => {
        const type = createType();
        expect(type.render()).toBe(`${type.name}:null`);
    });
});


function createType(): NullType {
    return new NullType(setUp.type.name);
}
