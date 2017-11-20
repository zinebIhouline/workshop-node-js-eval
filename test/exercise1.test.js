const expect = require("chai").expect;

const exercise = require("../src/exercise1");

describe("Exercise #1", function() {
  describe("function run()", function() {
    it("should return the parameter given in input but in a uppercase way", function() {
      expect(exercise.run("Hello you")).to.be.eql("HELLO YOU");
    });
  });
});
