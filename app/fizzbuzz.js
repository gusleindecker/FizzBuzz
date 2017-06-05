'use strict';

class FizzBuzz {

  getResult(number) {
    if (this.isMultipleOfThree(number) && this.isMultipleOfFive(number))
      return 'FizzBuzz';
    if (this.isMultipleOfThree(number))
      return 'Fizz';
    if (this.isMultipleOfFive(number))
      return 'Buzz';
    return number.toString();
  }

  isMultipleOfThree(number) {
    return number % 3 === 0 && number !== 0;
  }

  isMultipleOfFive(number) {
    return number % 5 === 0 && number !== 0;
  }
}

module.exports = FizzBuzz;
