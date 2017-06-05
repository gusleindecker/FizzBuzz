'use strict';

import { expect } from 'chai';
const FizzBuzz = require('../app/fizzbuzz');

describe('FizzBuzz', () => {
  let fb;

  beforeEach(() => {
    // Create a new FizzBuzz object before every test.
    fb = new FizzBuzz();
  });

  describe('getResult', () => {
    it('should return Fizz for multiples of three', () => {
      const expectedResult = 'Fizz';
      const result = fb.getResult(3);
      expect(result).to.equal(expectedResult);
    });

    it('should return Buzz for multiples of five', () => {
      const expectedResult = 'Buzz';
      const result = fb.getResult(5);
      expect(result).to.equal(expectedResult);
    });

    it('should return FizzBuzz for multiples of three and five', () => {
      const expectedResult = 'FizzBuzz';
      const result = fb.getResult(15);
      expect(result).to.equal(expectedResult);
    });

    it('should return the number for non-multiples of three and five', () => {
      const expectedResult = '7';
      const result = fb.getResult(7);
      expect(result).to.equal(expectedResult);
    });

    it('should return "0" for zero', () => {
      const expectedResult = '0';
      const result = fb.getResult(0);
      expect(result).to.equal(expectedResult);
    });
  });
});
