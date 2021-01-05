import Graphql from "../src/Graphql";

const setUp = {
    url: 'https://webhook.site/bf1231e7-21f1-4949-a1f3-1da51817a916'
};

const graphql = new Graphql(setUp.url);

describe('Graphql', () => {
    test('constructor', () => {
        expect(graphql instanceof Graphql).toBe(true);
        expect(graphql.apiURL).toBe(setUp.url);
    });
});
