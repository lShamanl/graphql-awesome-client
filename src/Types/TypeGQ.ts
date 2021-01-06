abstract class TypeGQ {
    get value(): any {
        return this._value;
    }
    set value(value: any) {
        if (this._value !== undefined && typeof this._value !== typeof value) {
            throw new Error('Forbidden to change type');
        }
        this._value = value;
    }

    public name: string;
    private _value: any;

    constructor(name: string, value: any) {
        if (value instanceof TypeGQ && value === this) {
            throw new Error('Recursion is forbidden');
        }
        this.name = name;
        this.value = value;
    }

    abstract renderAsInput(): string;
    abstract renderAsOutput(): string;
}

export default TypeGQ;
