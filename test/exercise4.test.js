const expect = require("chai").expect;

const exercise = require("../src/exercise4");

describe("Exercise #4", function() {
  describe("function run()", function() {
    it('should return a particular string : "Beetlejuice, Beetlejuice, Beetlejuice"', function() {
      expect(
        exercise.run(function(a, b, c) {
          return c(a, b);
        })
      ).to.be.eql("Beetlejuice, Beetlejuice, Beetlejuice");
    });
  });
});
