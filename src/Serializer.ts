import Model from "./Model";

class Serializer {
    protected dataMappers = new Map();

    constructor() // todo: написать тест
    {
        this.dataMappers.set(null,      nullMapper)
        this.dataMappers.set(undefined, nullMapper)
        this.dataMappers.set(String,    stringMapper)
        this.dataMappers.set(Number,    numberMapper)
        this.dataMappers.set(Boolean,   booleanMapper)
        this.dataMappers.set(Array,     arrayMapper)
        this.dataMappers.set(Infinity,  nullMapper)
        this.dataMappers.set(Model,     modelMapper)
        this.dataMappers.set(Object,    objectMapper)
    }

    public serialize(data: any): string // todo: написать тест
    {
        let mapper = this.fetchMapper(data);
        return mapper(data);
    }

    public fetchMapper(data: any): CallableFunction // todo: написать тест
    {
        let mapperId = this.getClass(data);
        if (!this.dataMappers.has(mapperId)) {
            throw new Error('Mapper is not defined');
        }
        return this.dataMappers.get(mapperId);
    }

    public getClass(data: any) //todo: тут проверить все кейсы(все мапперы), что он их распознает эффективно
    {
        if (typeof data === "undefined") return null;
        if (data === null) return null;
        if (data instanceof Model) return Model;
        return Object.prototype.toString.call(data).match(/^\[object\s(.*)\]$/)[1];
    }
}

export default Serializer;

function stringMapper(): string { return } //todo: сделать + тест
function numberMapper(): string { return } //todo: сделать + тест
function booleanMapper(): string { return } //todo: сделать + тест
function objectMapper(): string { return } //todo: сделать + тест
function arrayMapper(): string { return } //todo: сделать + тест
function nullMapper(): string { return } //todo: сделать + тест (бесконечность, неопределенность также приводить к null)
function modelMapper(): string { return } //todo: сделать + тест

// stringMapper(key: string, text: string, showKey: boolean): string
// {
//     text = JSON.stringify(text);
//     return showKey ? `${key}:${text}` : `${text}`;
// }
//
// numberMapper(key: string, value: number, showKey: boolean): string
// {
//     return showKey ? `${key}:${value}` : `${value}`;
// }
//
// booleanMapper(key: string, value: boolean, showKey: boolean): string
// {
//     let stringValue = value.toString();
//     return showKey ? `${key}:${stringValue}` : `${stringValue}`;
// }
//
// objectMapper(key: string, object: object, showKey: boolean): string
// {
//     let serializeObject = Serializer.serialize(object);
//     return showKey ? `${key}:{${serializeObject}}` : `{${serializeObject}}`;
// }
//
// arrayMapper(key: string, array: any[], showKey: boolean): string
// {
//     let serializeArray = Serializer.serialize(array, false);
//     return showKey ? `${key}:[${serializeArray}]` : `[${serializeArray}]`;
// }
