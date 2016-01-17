# lobars

lodash functions as handlebars helpers

## Installation

Download [Node.js](http://nodejs.org) 4 or greater.

```sh
npm install lobars --save
```

## Usage

```js
const handlebars = require('handlebars')
const lobars = require("lobars")

handlebars.registerHelper(lobars)
```

## Comparison Helpers

These functions all return `true` or `false`:

- [endsWith](https://lodash.com/docs#endsWith)
- [eq](https://lodash.com/docs#eq)
- [gt](https://lodash.com/docs#gt)
- [gte](https://lodash.com/docs#gte)
- [isArguments](https://lodash.com/docs#isArguments)
- [isArray](https://lodash.com/docs#isArray)
- [isArrayLike](https://lodash.com/docs#isArrayLike)
- [isArrayLikeObject](https://lodash.com/docs#isArrayLikeObject)
- [isBoolean](https://lodash.com/docs#isBoolean)
- [isDate](https://lodash.com/docs#isDate)
- [isElement](https://lodash.com/docs#isElement)
- [isEmpty](https://lodash.com/docs#isEmpty)
- [isEqual](https://lodash.com/docs#isEqual)
- [isEqualWith](https://lodash.com/docs#isEqualWith)
- [isError](https://lodash.com/docs#isError)
- [isFinite](https://lodash.com/docs#isFinite)
- [isFunction](https://lodash.com/docs#isFunction)
- [isInteger](https://lodash.com/docs#isInteger)
- [isLength](https://lodash.com/docs#isLength)
- [isMatch](https://lodash.com/docs#isMatch)
- [isMatchWith](https://lodash.com/docs#isMatchWith)
- [isNaN](https://lodash.com/docs#isNaN)
- [isNative](https://lodash.com/docs#isNative)
- [isNil](https://lodash.com/docs#isNil)
- [isNull](https://lodash.com/docs#isNull)
- [isNumber](https://lodash.com/docs#isNumber)
- [isObject](https://lodash.com/docs#isObject)
- [isObjectLike](https://lodash.com/docs#isObjectLike)
- [isPlainObject](https://lodash.com/docs#isPlainObject)
- [isRegExp](https://lodash.com/docs#isRegExp)
- [isSafeInteger](https://lodash.com/docs#isSafeInteger)
- [isString](https://lodash.com/docs#isString)
- [isSymbol](https://lodash.com/docs#isSymbol)
- [isTypedArray](https://lodash.com/docs#isTypedArray)
- [isUndefined](https://lodash.com/docs#isUndefined)
- [lt](https://lodash.com/docs#lt)
- [lte](https://lodash.com/docs#lte)
- [startsWith](https://lodash.com/docs#startsWith)

## String Helpers

These functions mutate strings:

- [camelCase](https://lodash.com/docs#camelCase)
- [capitalize](https://lodash.com/docs#capitalize)
- [deburr](https://lodash.com/docs#deburr)
- [escape](https://lodash.com/docs#escape)
- [escapeRegExp](https://lodash.com/docs#escapeRegExp)
- [kebabCase](https://lodash.com/docs#kebabCase)
- [lowerCase](https://lodash.com/docs#lowerCase)
- [lowerFirst](https://lodash.com/docs#lowerFirst)
- [pad](https://lodash.com/docs#pad)
- [padEnd](https://lodash.com/docs#padEnd)
- [padStart](https://lodash.com/docs#padStart)
- [parseInt](https://lodash.com/docs#parseInt)
- [repeat](https://lodash.com/docs#repeat)
- [replace](https://lodash.com/docs#replace)
- [snakeCase](https://lodash.com/docs#snakeCase)
- [split](https://lodash.com/docs#split)
- [startCase](https://lodash.com/docs#startCase)
- [template](https://lodash.com/docs#template)
- [toLower](https://lodash.com/docs#toLower)
- [toUpper](https://lodash.com/docs#toUpper)
- [trim](https://lodash.com/docs#trim)
- [trimEnd](https://lodash.com/docs#trimEnd)
- [trimStart](https://lodash.com/docs#trimStart)
- [truncate](https://lodash.com/docs#truncate)
- [unescape](https://lodash.com/docs#unescape)
- [upperCase](https://lodash.com/docs#upperCase)
- [upperFirst](https://lodash.com/docs#upperFirst)
- [words](https://lodash.com/docs#words)


## Tests

```sh
npm install
npm test
```

## Dependencies

- [lodash](https://github.com/lodash/lodash): Lodash modular utilities.

## Dev Dependencies

- [chai](https://github.com/chaijs/chai): BDD/TDD assertion library for node.js and the browser. Test framework agnostic.
- [cheerio](https://github.com/cheeriojs/cheerio): Tiny, fast, and elegant implementation of core jQuery designed specifically for the server
- [handlebars](https://github.com/wycats/handlebars.js): Handlebars provides the power necessary to let you build semantic templates effectively with no frustration
- [mocha](https://github.com/mochajs/mocha): simple, flexible, fun test framework
- [snazzy](https://github.com/feross/snazzy): Format JavaScript Standard Style as Stylish (i.e. snazzy) output

## License

MIT

_Generated by [package-json-to-readme](https://github.com/zeke/package-json-to-readme)_
