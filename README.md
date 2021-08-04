# gini

A small and quick INI parser for Deno.

(also it has no deps :o)

## Example Code

Parsing an ini file:

```ts
INI.parse(inistring);
```

Which will return an object like:
```ts
{
  "section1": {
    "var1": 1
  },
  "section2": {
    "var2": 2
    "var3": "string"
  }
}
```

Stringifying an ini file:

```ts
INI.stringify(iniobject);
```

This function takes a ini object like the one above and returns a valid INI string, it does not preserve comments.
