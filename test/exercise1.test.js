const expect = require("chai").expect;

const exercise = require('../src/exercise1');

describe  ("exercice 1", function() {
  describe("function run()", function() {
    it("should return the number of characters of the string given in input", function() {
      expect(exercise.run("Hello you")).to.be.eql(9);

	  
    })
  })
})
