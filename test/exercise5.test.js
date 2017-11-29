const expect = require("chai").expect;

const exercise = require("../src/exercise5");

describe("Exercise #5", function() {
  describe("function run()", function() {
    it("should return (a number) which is the sum of the values written in the path given in input", function() {
      expect(
        exercise.run("exercise5-sample-2.txt")
      ).to.be.eql(13);
    });
  });
});
