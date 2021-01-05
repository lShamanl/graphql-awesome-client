class Graphql {
  public apiURL: string;

  constructor(url: string) {
    this.apiURL = url;
  }

  /**
   * Send a custom request to the Graphql server
   * @param query
   */
  public async send(query: string): Promise<any>
  {
      let response = await fetch(this.apiURL, {
        method: "POST",
        body: JSON.stringify({query})
      })
      return (await response.json()).data;
  }
}

export default Graphql;
