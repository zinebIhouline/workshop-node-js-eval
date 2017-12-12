const expect = require("chai").expect;

const exercise = require("../src/exercise3").run2;

describe("Exercise #3", function() {
  describe("function run()", function() {
    it("should return (a number) which is the result of the values of objects with specific operator mentionned in the property \"operator\"", function() {
      expect(
        exercise.run2([
          { operator: 'add', value: 2 },
          { operator: 'add', value: 5 },
          { operator: 'add', value: 7 },
          { operator: 'substract', value: 3 },
        ])
      ).to.be.eql(11);
    });
  });
});
