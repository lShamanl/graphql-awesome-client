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
   * Отправить произвольный запрос к серверу Graphql
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
   * Отправить запрос типа Query к серверу Graphql
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
   * Отправить запрос типа Mutation к серверу Graphql
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
   * Добавить запрос типа Query в очередь отправок к серверу Graphql
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
   * Добавить запрос типа Mutation в очередь отправок к серверу Graphql
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
   * Отправить к серверу Graphql запросы типа Query
   * @param namespace
   */
  public pushQueries(namespace: string = defaultNamespace): Promise<any>
  {
    let query = this.buildQueries(namespace);
    this.cleanQueries(namespace);

    return this.send(query);
  }

  /**
   * Отправить к серверу Graphql запросы типа Mutation
   * @param namespace
   */
  public pushMutations(namespace: string = defaultNamespace): Promise<any>
  {
    let query = this.buildMutations(namespace);
    this.cleanMutations(namespace);

    return this.send(query);
  }

  /**
   * Отправить к серверу Graphql все накопленные запросы
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
   * Очистить очередь запросов типа Query в указанном пространстве имен
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
   * Очистить очередь запросов типа Mutation в указанном пространстве имен
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
   * Подготовить и собрать все запросы типа Query в итоговый формат
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
   * Подготовить и собрать все запросы типа Mutation в итоговый формат
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
   * Биндинг схем входящих параметров и исходящих в шаблон запроса
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
   * Подготовить начальный шаблон запроса (до биндинга параметров схемы)
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
   * Подстановка схемы входящих параметров (input) в шаблон запроса
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
   * Подстановка схемы возвращаемых данных (output) в шаблон запроса
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
   * Подготовка Output-схемы к биндингу в шаблон запроса
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
   * Подготовка Input-схемы к биндингу в шаблон запроса
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
   * Подготовка одного параметра Input-схемы к биндингу в шаблон запроса
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
