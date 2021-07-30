// the user facing ini object
interface UserINIObject {
    parse(str: string): object,
    stringify(obj: object): string,
}

// internal ini variable object, its what is used for vars
interface INIVariableObject {
    [name: string]: number | string | null
}

// internal INI object, its what parseFunc() parses to.
interface INIObject {
    [section: string]: INIVariableObject
}

function parseFunc(str: string): INIObject {
    return {};
}

function stringifyFunc(obj: INIObject): string {
    return "";
}

const INI: UserINIObject = {
    parse: parseFunc,
    stringify: stringifyFunc,
}

// doesn't let me export default a const inline, unsure why.
export default { INI };