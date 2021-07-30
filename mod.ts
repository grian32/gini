interface INIObject {
    parse(str: string): object,
    stringify(obj: object): string,
}

function parseFunc(str: string): object {
    return {};
}

function stringifyFunc(obj: object): string {
    return "";
}

export const INI: INIObject = {
    parse: parseFunc,
    stringify: stringifyFunc,
}