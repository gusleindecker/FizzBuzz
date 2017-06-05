'use strict';

const FizzBuzz = require('./app/fizzbuzz');
const fb = new FizzBuzz();

for (var i = 1; i < 101; i++) {
    console.log(fb.getResult(i));
}
