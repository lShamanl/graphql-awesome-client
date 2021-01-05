import Graphql from "../src/Graphql";
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
});
