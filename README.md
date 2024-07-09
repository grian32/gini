# gini

A small and quick INI parser & stringifier for Deno.

## Support

This implementation supports: non-nested sections & variables with values being strings, booleans, null or numbers.

## Example Code

Parsing an ini file:

```ts
INI.parse(inistring);
```

Which will return an object:
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

Which will output a valid ini string:
```ini
[section1]
var1=1
[section2]
var2=true
var3="string"
var4=null
```
