const expect = require("chai").expect;

const exercise = require("../src/exercise3");

describe("Exercise #3", function() {
  describe("function run()", function() {
    it("should return (a number) which is the multiplication of the values of objects where the property +multiply+ is true", function() {
      expect(
        exercise.run([
          { multiply: true, value: 2 },
          { multiply: false, value: 5 },
          { multiply: true, value: 3 }
        ])
      ).to.be.eql(6);
    });
  });
});
