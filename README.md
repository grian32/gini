# gini

A small and quick INI parser(and stringifier) for Deno.

(also it has no deps :o)

## Support

This implementation supports, sections(not nested), variables with values being strings, booleans, null or numbers.

## Example Code

Parsing an ini file:

```ts
INI.parse(inistring);
```

Which will return an object like:
```ts
{
    section1: {
        var1: 1,
    },
    section2: {
        var2: true,
        var3: "string",
        var4: null,
     }
}
```

Stringifying an ini file:

```ts
INI.stringify(iniobject);
```

Which will output a valid ini string like:
```ini
[section1]
var1=1
[section2]
var2=true
var3="string"
var4=null
```
This function takes a ini object like the one above and returns a valid INI string, it does not preserve comments.
