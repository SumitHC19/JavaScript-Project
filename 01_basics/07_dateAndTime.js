const myDate = new Date()
// console.log(myDate);  //2025-07-13T12:52:38.196Z
// console.log(myDate.toDateString());   //Sun Jul 13 2025
// console.log(myDate.toISOString());   //2025-07-13T12:56:11.524Z
// console.log(myDate.toJSON());    //2025-07-13T12:56:11.524Z
// console.log(myDate.toLocaleString());    //13/7/2025, 6:26:11 pm
// console.log(myDate.toLocaleDateString());    //13/7/2025
// console.log(myDate.toLocaleTimeString());    //6:26:11 pm

// console.log(typeof myDate);   //object

// let myCreatedDate = new Date(2023, 4, 25);
// console.log(myCreatedDate.toDateString());  //Thu May 25 2023

// let myCreatedDatee = new Date(2023, 4, 25, 5, 3);
// console.log(myCreatedDatee.toLocaleString());

let myCreatedDatee = new Date("01-15-2002");
// console.log(myCreatedDatee.toLocaleString());    //15/1/2002, 12:00:00 am

let myTimeStap = Date.now();    
// console.log(myTimeStap);        //1752413655484
// console.log(myCreatedDatee.getTime());  //1011033000000  (To compare the realtime time)
// console.log(Math.floor(Date.now()/1000));   //1752414006 (it will give the small number to compare)

let newDate = new Date();
// console.log(newDate.toDateString());    //Sun Jul 13 2025
// console.log(newDate.getDate());     //13
// console.log(newDate.getDay() +1);      //0
// console.log(newDate.getFullYear());   //2025  
// console.log(newDate.getHours());        //19
// console.log(newDate.getMilliseconds());    //226 
// console.log(newDate.getUTCSeconds());       //8
// console.log(newDate.getTimezoneOffset());      //-330

newDate.toLocaleString('default',{
    weekday : "long",
    // dateStyle : "medium"
})      // this is use to coustmize the formate according to need

console.log(newDate);

