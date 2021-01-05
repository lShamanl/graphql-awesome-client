class Graphql {
    public apiURL: string;

    constructor(apiURL: string) {
        this.apiURL = apiURL;
    }

    /**
     * Send a custom request to the Graphql server
     * @param query
     */
    public async send(query: string): Promise<any> {
        let response = await fetch(this.apiURL, {
            method: "POST",
            body: JSON.stringify({query})
        })
        return (await response.json()).data;
    }
}

export default Graphql;
