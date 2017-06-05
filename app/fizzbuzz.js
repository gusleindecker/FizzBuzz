'use strict';

class FizzBuzz {

  getResult(number) {
    if (this.isFizz(number) && this.isBuzz(number))
      return 'FizzBuzz';
    if (this.isFizz(number))
      return 'Fizz';
    if (this.isBuzz(number))
      return 'Buzz';
    return number.toString();
  }

  isFizz(number) {
    return number % 3 === 0 && number !== 0;
  }

  isBuzz(number) {
    return number % 5 === 0 && number !== 0;
  }
}

module.exports = FizzBuzz;
