var should = require('should')
  , change = require('../')

describe('change', function() {
  it('should work with from and to', function() {
    var from = 50000
    var to = 70000
    var c = change(from, to, true)
    c.should.equal('40.00%')

    c = change(from, to, false)
    c.should.equal(0.4)
  })

  describe('places', function() {
    it('should work with 0', function() {
      var from = 5
      var to = 7
      var c = change(from, to, 0, true)
      c.should.equal('40%')
      c = change(from, to, 0, false)
      c.should.equal(0.4)
    })

    it('should work with 2', function() {
      var from = 5
      var to = 7
      var c = change(from, to, 2, true)
      c.should.equal('40.00%')
      c = change(from, to, false)
      c.should.equal(0.4)
    })
  })

  describe('passing not numbers', function() {
    it('should return 0 if from isNaN', function() {
      var c = change('this', 5)
      c.should.equal(0)
    })

    it('should return 0 if to isNaN', function() {
      var c = change(5, 'this')
      c.should.equal(0)
    })
  })

  it('should return Infinity when passing 0 as from', function() {
    var c = change(0, 100)
    c.should.equal(Infinity)
  })

  describe('format', function() {
    it('should always format', function() {
      var c = change.format(5, 7, 2)
      c.should.equal('40.00%')
    })
  })
})
