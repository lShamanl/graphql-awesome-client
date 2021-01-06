import ModelType from "../../src/Types/ModelType";
import DatetimeType from "../Implements/Types/DatetimeType";

const faker = require('faker');
const setUp = {
    type: {
        name: 'datetimeType',
        data: [
            {
                value: faker.date.future(),
                name: 'time'
            }
        ]
    }
}

describe('ModelType', () => {
    test('constructor', () => {
        const type = createType();
        expect(type.value).toStrictEqual({time: setUp.type.data[0].value});
        expect(type.name).toBe(setUp.type.name);
    });

    test('renderAsInput', () => {
        const type = createType();
        expect(type.renderAsInput()).toBe(`${type.name}:{time:"${setUp.type.data[0].value}"}`);
    });

    test('renderAsOutput', () => {
        const type = createType();
        expect(type.renderAsOutput()).toBe(`time`);
    });
});

function createType(): ModelType {
    return new DatetimeType(setUp.type.name, {time: setUp.type.data[0].value});
}
