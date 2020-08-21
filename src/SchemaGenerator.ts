const defaultSettings = {allowedFields: [], forbiddenFields: [], schemaRules: {}};

class SchemaGenerator {
  public static getSchema(
    settings: Object = defaultSettings,
    schema: Object = {}
  ): []
  {
    return SchemaGenerator.prepareSchema(schema, settings);
  }

  /**
   * Подготовить схему для обращения к API Graphql
   * @param schema
   * @param settings
   * @protected
   */
  protected static prepareSchema(schema, settings) {
    settings = {...defaultSettings, ...settings};
    schema = {...schema, ...settings.schemaRules};

    if (settings.allowedFields.length === 0 && settings.forbiddenFields.length === 0) {
      return schema;
    } else {
      if (settings.allowedFields.length > 0) {
        schema = SchemaGenerator.sliceSchemaByAllowedFields(schema, settings.allowedFields);
      }
      if (settings.forbiddenFields.length > 0) {
        schema = SchemaGenerator.sliceSchemaByForbiddenFields(schema, settings.forbiddenFields);
      }

      return schema;
    }
  }

  /**
   * Оставить в схеме только разрешенные поля
   * @param schema
   * @param allowedFields
   * @protected
   */
  protected static sliceSchemaByAllowedFields(schema, allowedFields) {
    let sliceSchema = {};
    for (let field of allowedFields) {
      if (schema.hasOwnProperty(field)) {
        sliceSchema[field] = schema[field];
      }
    }

    return sliceSchema;
  }

  /**
   * Убрать из схемы все запрещенные поля
   * @param schema
   * @param forbiddenFields
   * @protected
   */
  protected static sliceSchemaByForbiddenFields(schema, forbiddenFields) {
    for (let field of forbiddenFields) {
      if (schema.hasOwnProperty(field)) {
        delete schema[field];
      }
    }

    return schema;
  }
}

export default SchemaGenerator;
