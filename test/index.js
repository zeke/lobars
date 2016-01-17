const describe = require('mocha').describe
const it = require('mocha').it
const test = require('mocha').it
const expect = require('chai').expect

const fs = require('fs')
const cheerio = require('cheerio')
const handlebars = require('handlebars')
const lobars = require('..')

handlebars.registerHelper(lobars)

const template = fs.readFileSync(__dirname + '/template.html', 'utf8')
const context = {
  page: {flavor: 'delicious'}
}
const output = handlebars.compile(template)(context)
const $ = cheerio.load(output)

describe('lobars', function () {
  it('is an object', function () {
    expect(lobars).to.be.an('object')
  })

  describe('methods', function () {
    test('endsWith', function () {
      expect($('#endsWith').text()).to.include('abc does end with c')
      expect($('#endsWith-inverse').text()).to.include('nope')
    })

    test('eq', function () {
      expect($('#eq').text()).to.include('They are delicious')
      expect($('#eq-inverse').text()).to.include('They are NOT gross')
    })

    test('isInteger', function () {
      expect($('#isInteger').text()).to.include('five is an integer')
    })

    test('lowerCase', function () {
      expect($('#lowerCase').text()).to.include('foo bar')
    })
  })
})
