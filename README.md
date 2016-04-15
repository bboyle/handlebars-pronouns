# Handlebars pronoun helper

A set of helpers for [handlebars](handlebarsjs) to handle English pronouns.

[![bitHound Overall Score](https://www.bithound.io/github/bboyle/handlebars-pronouns/badges/score.svg)](https://www.bithound.io/github/bboyle/handlebars-pronouns)


## Helpers

### he-she-they

Helpers: `he`, `she`, `they`, `He`, `She`, `They`

 Template            | Output | Description
---------------------|--------|-------------
 `{{they "woman"}}`  | she    | feminine pronoun
 `{{he "woman"}}`    | she    | `he` is an alias for `they`
 `{{she "woman"}}`   | she    | `she` is an alias for `they`
 `{{he "frog"}}`     | they   | unknown gender "frog" results in generic `they`
 `{{He "uncle"}}`    | He     | returns `He` in title case
 `{{He "daughter"}}` | She    | returns `She` in title case
 `{{He "frog"}}`     | They   | unknown gender "frog" results in generic `They`


### his-her-their

Helpers: `herhis`, `his`, `hisher`, `their`, `HerHis`, `His`, `HisHer`, `Their`

Note: "her" would be amiguous — should it return "his/their" or "him/them" — and is not supported.

 Template               | Output | Description
------------------------|--------|-------------
 `{{their "woman"}}`    | her    | feminine pronoun
 `{{HerHis "woman"}}`   | Her    | `HerHis` is an alias for `Their`
 `{{His "wife"}}`       | Her    | `His` is an alias for `Their`
 `{{HisHer "husband"}}` | His    | `HisHer` is an alias for `Their`


### him-her-them

Helpers: `herhim`, `himher`, `them`, `HerHim`, `HimHer`, `Them`

Note: "her" would be amiguous — should it return "his/their" or "him/them" — and is not supported.

 Template               | Output  | Description
------------------------|---------|-------------
 `{{them "woman"}}`     | her     | feminine pronoun
 `{{HerHim "woman"}}`   | Her     | `HerHim` is an alias for `Them`
 `{{him "female"}}self` | herself | `him` is an alias for `them`
 `{{himher "frog"}}`    | them    | `himher` is an alias for `them`


### himself-herself-themself

Use `{{them person.gender}}self`.



## Licence

This code is available under the [BSD-3-Clause licence](LICENSE).

[handlebarsjs]: http://handlebarsjs.com
