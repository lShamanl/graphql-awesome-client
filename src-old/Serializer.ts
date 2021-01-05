class Serializer {
  /**
   * Serialization of data in Graphql format
   * @param object
   * @param withKey
   */
  public static serialize(
    object: any,
    withKey: boolean = true
  ): string
  {
    let list = [];
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        list.push(Serializer.map(key, object[key], withKey));
      }
    }
    return list.join(',');
  }

  /**
   * Serialization of any type of data
   * @param key
   * @param data
   * @param showKey
   * @protected
   */
  protected static map(key: string, data: any, showKey: boolean) {
    switch (typeof data) {
      case "string": return Serializer.stringMapper(key, data, showKey);
      case "number": return Serializer.numberMapper(key, data, showKey);
      case "boolean": return Serializer.booleanMapper(key, data, showKey);
      case "object":
        if (data instanceof Array) {
          return Serializer.arrayMapper(key, data, showKey);
        } else if (data === null) {
          return Serializer.stringMapper(key, data, showKey);
        }
        return Serializer.objectMapper(key, data, showKey);
      default: return Serializer.stringMapper(key, data, showKey);
    }
  }

  protected static stringMapper(key: string, text: string, showKey: boolean): string
  {
    text = JSON.stringify(text);
    return showKey ? `${key}:${text}` : `${text}`;
  }

  protected static numberMapper(key: string, value: number, showKey: boolean): string
  {
    return showKey ? `${key}:${value}` : `${value}`;
  }

  protected static booleanMapper(key: string, value: boolean, showKey: boolean): string
  {
    let stringValue = value.toString();
    return showKey ? `${key}:${stringValue}` : `${stringValue}`;
  }

  protected static objectMapper(key: string, object: object, showKey: boolean): string
  {
    let serializeObject = Serializer.serialize(object);
    return showKey ? `${key}:{${serializeObject}}` : `{${serializeObject}}`;
  }

  protected static arrayMapper(key: string, array: any[], showKey: boolean): string
  {
    let serializeArray = Serializer.serialize(array, false);
    return showKey ? `${key}:[${serializeArray}]` : `[${serializeArray}]`;
  }
}

export default Serializer;
