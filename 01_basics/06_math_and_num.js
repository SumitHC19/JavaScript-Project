const score = 400
// console.log(score);

const newScore = new Number(4000)
// console.log(newScore);


// console.log(newScore.toString().length);
// console.log(newScore.toFixed(2));


const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));


const hundreds = 10000000;

// console.log(hundreds.toLocaleString('en-IN'));

// *************************maths************************

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));


console.log(Math.random());
console.log((Math.random() * 10 + 1));  // this +1 help you to get value as 10 ( if you do Math.floor(Math.random() * 10) to result [0,9])
console.log(Math.floor(Math.random()* 10) + 1);


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)// we are adding min to get value minimum as 10 otherwise it will give less than min

