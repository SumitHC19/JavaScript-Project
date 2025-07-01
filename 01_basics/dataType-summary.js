// Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100;

const scoree = 100.00;

const isLoggin = false;
const outsideTemp = null;

let userEmail;

const id = Symbol("123");
const isId = Symbol("123");

console.log(id == isId);
console.log(id === isId);


// const bigNumber = 1547854698523568;


// ********** Referenced (non-primitive)*************

//  Array, objects, functions

const friends = ["Sumit" , "Nayan" , "raj"];

let myObj = {
    name: "sumit",
    age : 24
}

const myFunction  = function(){
    console.log("Hello Sumit");
    
}


// https://262.ecma-international.org/5.1/#sec-11.4.3