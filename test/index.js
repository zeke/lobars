const expect = require('chai').expect
const fs = require('fs')
const path = require('path')
const cheerio = require('cheerio')
const handlebars = require('handlebars')
const lobars = require('..')

handlebars.registerHelper(lobars)

const template = fs.readFileSync(path.join(__dirname, '/template.html'), 'utf8')
const context = {
  page: {
    flavor: 'delicious',
    keywords: ['alpha', 'bravo', 'charlie']
  }
}
const output = handlebars.compile(template)(context)
const $ = cheerio.load(output)

const text = function (selector) {
  return $(selector).text().replace(/\n/g, '').trim()
}

describe('lobars', function () {
  it('is an object', function () {
    expect(lobars).to.be.an('object')
  })

  describe('methods', function () {
    it('endsWith', function () {
      expect(text('#endsWith')).to.eq('abc does end with c')
      expect(text('#endsWith-inverse')).to.eq('nope')
    })

    it('eq', function () {
      expect(text('#eq')).to.eq('They are delicious')
      expect(text('#eq-inverse')).to.eq('They are NOT gross')
    })

    it('isInteger', function () {
      expect(text('#isInteger')).to.eq('five is an integer')
    })

    it('lowerCase', function () {
      expect(text('#lowerCase')).to.eq('foo bar')
    })

    it('includes', function () {
      expect(text('#includes')).to.eq('keywords include alpha')
      expect(text('#includes-inverse')).to.eq('keywords do not include zulu')
    })
  })
})
