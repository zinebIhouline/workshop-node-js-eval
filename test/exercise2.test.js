const expect = require("chai").expect;

const exercise1 = require('../src/exercise2');

describe("Exercise #2", function() {
  describe("function run()", function() {
    it("should return a string with only number under 6 of the string given in input", function() {
      expect(exercise1.run("14725")).to.be.eql("1425")
    })
  })
  })
