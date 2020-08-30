class Types {
  static number(data: any): number
  {
    return this.isset(data) ? Number(data) : null;
  }

  static string(data: any): string
  {
    return this.isset(data) ? String(data) : null;
  }

  static boolean(data: any): boolean
  {
    return this.isset(data) ? !!data : null;
  }

  static object(data: any): Object
  {
    return this.isset(data) ? Object(data) : null;
  }

  /**
   * Проверка переменной на существование
   * @param data
   */
  static isset(data: any): boolean
  {
    return (data !== undefined && data !== null);
  }
}

export default Types;
