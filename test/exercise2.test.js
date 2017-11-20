const expect = require("chai").expect;

const exercise = require("../src/exercise2");

describe("Exercise #2", function() {
  describe("function run()", function() {
    it("should return (a number) the biggest number of the string input considering only one character", function() {
      expect(exercise.run("14725")).to.be.eql(7);
    });
  });
});
