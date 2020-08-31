function getInputSchema(): Object
{
    // @ts-ignore
    let map = this.constructor.mapModify();

    let params = {};
    for (let property in map) {
        if (map.hasOwnProperty(property)) {

            if (!!map[property].input === true) {
                if (!!this[property] && this[property].getInputSchema !== undefined) {
                    params[property] = this[property].getInputSchema();
                    continue;
                }
                if (this[property] !== null || map[property].allowNull) {
                    params[property] = this[property];
                    continue;
                }
                params[property] = undefined;
            }
        }
    }

    for (let i in params) {
        if (params.hasOwnProperty(i) && params[i] === undefined) {
            delete params[i];
        }
    }

    // @ts-ignore
    let className = this.constructor.name;

    let inputSchema = {};
    inputSchema[className] = params;

    return inputSchema;
}

export {getInputSchema};
