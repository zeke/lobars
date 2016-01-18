const lodash = require('lodash')
const stringMethods = require('./lib/string')
const comparisonMethods = require('./lib/comparison')

var lobars = module.exports = {}

stringMethods.forEach(name => {
  lobars[name] = lodash[name]
})

comparisonMethods.forEach(name => {
  lobars[name] = function () {
    var args = Array.prototype.slice.call(arguments)
    var options = args.pop()
    var result = lodash[name].apply(undefined, args)
    return result ? options.fn(this) : options.inverse(this)
  }
})
