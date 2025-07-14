
const myArray = [11, 12, 13 , 15, 20];

const myHeros = ["Shaktiman", "Gandipapu"];

const myArray2 = new Array(1, 2, 3, 4)
// console.log(myArray2[2]);

// *************Arrays method************

// console.log(myArray.push(6));   //6
// console.log(myArray);       //[ 11, 12, 13, 15, 20, 6 ]

// console.log(myArray.pop());     // 20

myArray.unshift(9)
myArray.shift()

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(3));

const newArr = myArray.join()

// console.log(myArray);       //[ 11, 12, 13, 15, 20 ]
// console.log( newArr);   // 11,12,13,15,20
// console.log(typeof(newArr));        //string



// slice, splice

console.log("A ", myArray);     // A  [ 11, 12, 13, 15, 20 ]

const myn1 = myArray.slice(1, 3)

console.log(myn1);          // [ 12, 13 ]
console.log("B ", myArray); // B  [ 11, 12, 13, 15, 20 ]


const myn2 = myArray.splice(1, 3)
console.log("C ", myArray);     // C  [ 11, 20 ]
console.log(myn2);      // [ 12, 13, 15 ]