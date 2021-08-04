import INI from "./mod.ts";
import { assertEquals } from "./deps.ts";

Deno.test("parser works", () => {
    // intentionally ass ugly
    const INI_STRING = `[hi]

there="streei"

[bye]

man=3
nue=false
eee=null`;

    const INI_OBJECT = {
        hi: {
            there: "streei",
        },
        bye: {
            man: 3,
            nue: false,
            eee: null,
        },
    };

    assertEquals(INI.parse(INI_STRING), INI_OBJECT);
});

Deno.test("stringifier works", () => {
    const INI_OBJECT = {
        hi: {
            there: "hello",
        },
        bye: {
            man: 4,
            see: false,
            you: -4,
            later: null,
        }
    };
    
    const INI_STRING = `[hi]
there="hello"
[bye]
man=4
see=false
you=-4
later=null
`
})