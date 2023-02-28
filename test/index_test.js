const assert = require('assert');
const Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.sum',() => {
    // Simple Array Test
    it('returns the sum of an array of numbers', () => {
        const expectedResult = 6;
        const inputArray = [1,2,3];
        const result = Calculate.sum(inputArray);
        assert.equal(result, expectedResult);
    });
    // Second test goes here
    it('returns the sum of a four item list', () => {
        const expectedResult = 22;
        const inputArray = [4, 5, 6, 7];
        const result = Calculate.sum(inputArray);
        assert.equal(result, expectedResult);

    });
    // Should return 0 if the array is empty
    it('returns 0 if the array is empty', () => {
      const expectedResult = 0;
      const inputArray = [];
      const result = Calculate.sum(inputArray);
      assert.equal(result, expectedResult);
    });



  });
});
