import Graphql from "./Mocks/GraphqlMock"
import DatetimeType from "./Implements/Types/DatetimeType";
const faker = require('faker');

const setUp = {
    url: faker.internet.url()
};

const graphql = new Graphql(setUp.url);

describe('Graphql', () => {
    test('constructor', () => {
        expect(graphql instanceof Graphql).toBe(true);
        expect(graphql.apiURL).toBe(setUp.url);
    });

    test('render Model', () => {
        let type = new DatetimeType('TimeType',{time: 'my-time'});
        let action = graphql.createAction('query.action.method', type, type)
        expect(action.render()).toBe('query{action{method(TimeType:{time:"my-time"}){time}}}');
    });
});
