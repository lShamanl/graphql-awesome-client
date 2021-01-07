import ArrayType from "../../src/Types/ArrayType";
import DatetimeType from "../Implements/Types/DatetimeType";

const setUp = {
    type: {
        name: 'arrayType',
        value: [
            true, false, null, 'string-value', new DatetimeType('datetime', {time: 'current_time'})
        ]
    }
}

describe('ArrayType', () => {
    test('constructor', () => {
        const type = createType();
        expect(type.value).toBe(setUp.type.value);
        expect(type.name).toBe(setUp.type.name);
    });

    test('renderAsInput', () => {
        const type = createType();
        expect(type.renderAsInput()).toBe(`${type.name}:[true,false,null,"string-value",{time:"current_time"}]`);
    });

    test('renderAsOutput', () => {
        const type = createType();
        expect(type.renderAsOutput()).toBe(`${type.name}`);
    });
});

function createType(): ArrayType {
    return new ArrayType(setUp.type.name, setUp.type.value);
}
