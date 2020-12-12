// This file will contain tests for the program. The purpose of these tests is to
// ensure that the core program logic works as expected.

// This project uses a testing library called Jest. You can learn more about Jest
// here: https://jestjs.io/.

// Test files can contain multiple tests, so long as those tests are grouped logically.
// Included below is a function and a test that makes assertions about the behaviour
// of the function. In most cases the subject of a test will be defined in a separate
// file. In this case we've defined the function and the corresponding test in the
// same file for illustrative and learning purposes.

//include external files for calculation
let { getConversionRate } = require('./../src/conversion-rate')

let usd_conversion = function() {
  let rateList = {
    USD: {
      CAD: 10
    }
  };
  return getConversionRate(rateList, 'USD', 'CAD');
}

let cad_conversion = function() {
  let rateList = {
    CAD: {
      USD: 0.5
    }
  };
  return getConversionRate(rateList, 'CAD', 'USD');
}

describe('conversions()', () => {
  test('should return the current rate: 10', () => {
    const result = usd_conversion();
    expect(result).toBe(10);
  });
  test('should return the current rate: 0.5', () => {
    const result = cad_conversion();
    expect(result).toBe(0.5);
  });
});
