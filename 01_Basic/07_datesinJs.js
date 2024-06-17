//DATES

// const myDate = new Date()
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toString());
// console.log(typeof myDate);

//let newDate = new Date(2024, 5, 26)
// let newDate = new Date(2024, 5, 26, 05, 55)
// let newDate =  new Date("04, 07, 2023")
// console.log(newDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp); // returns the number of milliseconds since January 1, 1970,
// console.log(newDate.getTime());
// console.log(Math.floor(Date.now()/1000)); // Output in Seconds

let newDate = new Date()
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());

// console.log(`Today is ${newDate.getDay()} and the time is ${newDate.getTime().toLocaleString()}`);