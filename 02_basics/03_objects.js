// Singleton
// Object.create

// Object literal

const mySym = Symbol("key1");
const mySym1 = Symbol("key1");


const jsUser = {
    name : "sumit",       //keys : value
    "full name" : "sumit parate",
    [mySym] : "mykey",   //to acess the symbol use [], without using it it can acess as String.
    [mySym1] : Symbol("mykey"),
    email : "sumit@gmail.com",
    age : 24,
    location : "Nagpur",
    isLoggedin : false,
    lastLoggin : ["monday", "saturday"]
}

// console.log(jsUser.name);
// console.log(jsUser["full name"]); // there is no chance to acess the "full name" with jsuser.fullname
// console.log(jsUser["name"]);
// console.log(jsUser[mySym]);
// console.log(typeof jsUser[mySym]);      // This will print type as string.
// console.log(typeof jsUser[mySym1]);     //this will print type as Symbol.

jsUser.email = "sumit@citius.com";
// Object.freeze(jsUser);
jsUser.email = "sumit@epsilon.com";
// console.log(jsUser["email"]);
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello sumit"); 
}

jsUser.greetingTwo = function(){
    console.log(`hello sumit ,${this.name}`); //String manupulation
}

// console.log(jsUser.greeting);   // it will return the referennce [Function (anonymous)]  it not executed
console.log(jsUser.greeting());     // hello sumit
console.log(jsUser.greetingTwo());