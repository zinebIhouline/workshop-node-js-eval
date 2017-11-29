const expect = require("chai").expect;

const exercise = require("../src/exercise4");

describe("Exercise #4", function() {
  describe("function run()", function() {
    it('should return a particular string : "The value of One is 1, The value of Two is 2, The value of Three is 3"', function() {
      expect(
        exercise.run(function(a, b, c) {
          return a(b, c);
        })
      ).to.be.eql("The value of One is 1, The value of Two is 2, The value of Three is 3");
    });
  });
});
