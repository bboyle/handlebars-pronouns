# Handlebars pronoun helper

A set of helpers for [handlebars](handlebarsjs) to handle English pronouns.

[![bitHound Overall Score](https://www.bithound.io/github/bboyle/handlebars-pronouns/badges/score.svg)](https://www.bithound.io/github/bboyle/handlebars-pronouns)


## Helpers

### he-she-they

 Template           | Output | Description
--------------------|--------|-------------
 `{{they "woman"}}` | she    | feminine pronoun
 `{{he "woman"}}`   | she    | `he` is an alias for `they`
 `{{she "woman"}}`  | she    | `she` is an alias for `they`
 `{{he "frog"}}`    | they   | unknown gender "frog" results in generic `they`


## Licence

This code is available under the [BSD-3-Clause licence](LICENSE).

[handlebarsjs]: http://handlebarsjs.com
