import Auth from "./Auth";
import Serializer from "../src/Serializer";

const defaultNamespace: string = 'default';
const stubInputSchema: string = '(__)';
const stubOutputSchema: string = '{__}';

class Graphql {
  public url: string;
  public auth: Auth;
  public serverError: {
    happen: boolean,
    log: string
  };
  protected config: {
    template: {
      stubInputSchema: string;
      stub: string;
      stubOutputSchema: string;
    }
  };
  protected prepared: {
    mutation: {};
    query: {};
  };

  constructor(url: string, updateUserData?: Function) {
    this.url = url;
    this.auth = new Auth(updateUserData);
    this.serverError = {
      happen: false,
      log: null
    };
    this.config = {
      template: {
        stubInputSchema: stubInputSchema,
        stubOutputSchema: stubOutputSchema,
        stub: `${stubInputSchema}${stubOutputSchema}`,
      }
    };
    this.prepared = {
      query: {},
      mutation: {}
    }
  }

  /**
   * Send a custom request to the Graphql server
   * @param query
   */
  public send(query: string): Promise<any>
  {
    return fetch(this.url, {
      method: "POST",
      body: JSON.stringify({query})
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
          return data.data;
        }
      )
      .catch((error) => {
        this.serverError = {
          happen: true,
          log: error
        };
        throw error;
      });
  }

  /**
   * Send a Query type request to the Graphql server
   * @param path
   * @param inputSchema
   * @param outputSchema
   */
  public sendQuery(
    path: string = '',
    inputSchema: Object = {},
    outputSchema: Object = {}
  ): Promise<any>
  {
    let query = this.bindQuery(
      this.prepareTemplate('query.' + path),
      inputSchema,
      outputSchema
    );

    return this.send(query);
  }

  /**
   * Send a Mutation request to the Graphql server
   * @param path
   * @param inputSchema
   * @param outputSchema
   */
  public sendMutation(
    path: string = '',
    inputSchema: Object = {},
    outputSchema: Object = {}
  ): Promise<any>
  {
    let query = this.bindQuery(
      this.prepareTemplate(
        'mutation.' + path),
      inputSchema,
      outputSchema
    );

    return this.send(query);
  }

  /**
   * Add a Query type request to the queue for sending to the Graphql server
   * @param path
   * @param inputSchema
   * @param outputSchema
   * @param namespace
   */
  public addQuery(
    path: string = '',
    inputSchema: Object = {},
    outputSchema: Object = {},
    namespace: string = defaultNamespace
  ): void
  {
    let query = this.bindQuery(
      this.prepareTemplate(path),
      inputSchema,
      outputSchema
    );

    if (this.prepared.query.hasOwnProperty(namespace)) {
      this.prepared.query[namespace].push(query);
    } else {
      this.prepared.query[namespace] = [];
      this.prepared.query[namespace].push(query);
    }
  }

  /**
   * Add a Mutation request to the queue for sending to the Graphql server
   * @param path
   * @param inputSchema
   * @param outputSchema
   * @param namespace
   */
  public addMutation(
    path: string = '',
    inputSchema: Object = {},
    outputSchema: Object = {},
    namespace: string = defaultNamespace
  ): void
  {
    let query = this.bindQuery(
      this.prepareTemplate(path),
      inputSchema,
      outputSchema
    );

    if (this.prepared.mutation.hasOwnProperty(namespace)) {
      this.prepared.mutation[namespace].push(query);
    } else {
      this.prepared.mutation[namespace] = [];
      this.prepared.mutation[namespace].push(query);
    }
  }

  /**
   * Send queries of the Query type to the Graphql server
   * @param namespace
   */
  public pushQueries(namespace: string = defaultNamespace): Promise<any>
  {
    let query = this.buildQueries(namespace);
    this.cleanQueries(namespace);

    return this.send(query);
  }

  /**
   * Send Mutation requests to the Graphql server
   * @param namespace
   */
  public pushMutations(namespace: string = defaultNamespace): Promise<any>
  {
    let query = this.buildMutations(namespace);
    this.cleanMutations(namespace);

    return this.send(query);
  }

  /**
   * Send all accumulated requests to the Graphql server
   * @param namespace
   */
  public push(namespace: string = defaultNamespace): Promise<any>
  {
    let query = `${this.buildQueries(namespace)}${this.buildMutations(namespace)}`;
    this.cleanQueries(namespace);
    this.cleanMutations(namespace);

    return this.send(query);
  }

  /**
   * To clear the request queue the type of Query in the specified namespace
   * @param namespace
   * @protected
   */
  protected cleanQueries(namespace: string): void
  {
    if (namespace === null) {
      this.prepared.query = {};
    } else if (this.prepared.query.hasOwnProperty(namespace)) {
      this.prepared.query[namespace] = [];
    }
  }

  /**
   * To clear the request queue the type of Mutation in the specified namespace
   * @param namespace
   * @protected
   */
  protected cleanMutations(namespace: string): void
  {
    if (namespace === null) {
      this.prepared.mutation = {};
    } else if (this.prepared.mutation.hasOwnProperty(namespace)) {
      this.prepared.mutation[namespace] = [];
    }
  }

  /**
   * Prepare and collect all queries of the Query type in the final format
   * @param namespace
   * @protected
   */
  protected buildQueries(namespace: string): string
  {
    let queryTemplate = '';
    for (let i in this.prepared.query) {
      if (this.prepared.query.hasOwnProperty(i) && (i === namespace || namespace === null)) {
        queryTemplate += this.prepared.query[i];
      }
    }
    return queryTemplate.length > 0 ? `query{${queryTemplate}}` : '';
  }

  /**
   * Prepare and collect all Mutation queries in the final format
   * @param namespace
   * @protected
   */
  protected buildMutations(namespace: string): string
  {
    let queryTemplate = '';
    for (let i in this.prepared.mutation) {
      if (this.prepared.mutation.hasOwnProperty(i) && (i === namespace || namespace === null)) {
        queryTemplate += this.prepared.mutation[i];
      }
    }
    return queryTemplate.length > 0 ? `mutation{${queryTemplate}}` : '';
  }

  /**
   * Binding diagrams of incoming parameters and outgoing parameters in the request template
   * @param template
   * @param inputSchema
   * @param outputSchema
   * @protected
   */
  protected bindQuery(
    template: string,
    inputSchema: Object,
    outputSchema: Object
  ): string
  {
    template = this.bindInputSchema(template, inputSchema);
    template = this.bindOutput(template, outputSchema);
    return template;
  }

  /**
   * Prepare the initial request template (before binding the schema parameters)
   * @param path
   * @protected
   */
  protected prepareTemplate(path: string): string
  {
    let stub = this.config.template.stub;
    let pathChunk = path.split('.');
    let template = stub;

    for (let stage of pathChunk) {
      template = template.replace(stub, `${stage}{${stub}}`)
    }

    return template.replace(`{${stub}}`, stub);
  }

  /**
   * Substituting the input parameter schema in the request template
   * @param template
   * @param inputSchema
   * @protected
   */
  protected bindInputSchema(template: string, inputSchema: Object): string
  {
    let prepareParams = this.prepareInputSchema(inputSchema);
    return template.replace(this.config.template.stubInputSchema, `(${prepareParams})`);
  }

  /**
   * Substituting the returned data schema (output) in the request template
   * @param template
   * @param outputSchema
   * @protected
   */
  protected bindOutput(template: string, outputSchema: Object): string
  {
    let prepareOutput = this.prepareOutputSchema(outputSchema);
    return template.replace(this.config.template.stubOutputSchema, `{${prepareOutput}}`);
  }

  /**
   * Preparing the Output schema for binding to the request template
   * @param outputSchema
   * @protected
   */
  protected prepareOutputSchema(outputSchema: Object): string
  {
    let prepareOutput = [];
    for (let item in outputSchema) {
      if (outputSchema.hasOwnProperty(item)) {
        if (outputSchema[item] !== null) {
          prepareOutput.push(`${item}{${this.prepareOutputSchema(outputSchema[item])}}`);
        } else {
          prepareOutput.push(item);
        }
      }
    }

    return prepareOutput.join(',');
  }

  /**
   * Preparing the Input schema for binding to the request template
   * @param inputSchema
   * @protected
   */
  protected prepareInputSchema(inputSchema: Object): string
  {
    let prepareParams = [];
    for (let key in inputSchema) {
      if (inputSchema.hasOwnProperty(key)) {
        prepareParams.push(this.prepareInputParam(key, inputSchema[key]));
      }
    }
    return prepareParams.join(',');
  }

  /**
   * Preparing a single Input schema parameter for binding to the request template
   * @param key
   * @param value
   * @protected
   */
  protected prepareInputParam(key: string, value: any): string
  {
    if (value instanceof Object) {
      return `${key}:{${Serializer.serialize(value)}}`;
    } else if (typeof value === "string") {
      return `${key}:${JSON.stringify(value)}`;
    } else {
      return `${key}:"${value}"`;
    }
  }

}

export default Graphql;
