const expect = require("chai").expect;

const exercise = require("../src/exercise5");

describe("Exercise #5", function() {
  describe("function run()", function() {
    it("should return a string which indicates number of files in a directory with a particular message", function() {
      expect(
        exercise.run({
          directory: "test",
          showInProgress: () => "In progress ...",
          showError: () => "Something goes wrong",
          showDone: number => `Project contains ${number} file(s) of tests`
        })
      ).to.be.eql("Project contains 6 file(s) of tests");
    });
  });
});
