// Primitive
// 7 type: String , Number , Boolean , null , undifined , symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false
const outsideTemprature = null

let userEmail;



const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigInt = 12345678901234567890n


// Reference (non primitive)
// Array , Object , Functions

const heros = ["Ironman, Hulk"]   // Array

myObj = {
    name: "Tony Stark",
    age: 35,

}                           // Object


const myFunction = function(){
    console.log("Hello World");
}

// To check the datatype type use typeof

// console.log(typeof bigInt );

// https://262.ecma-international.org/5.1/#sec-11.4.3




// ---------------------------------------------------------------------------//

let myOrgName = "Mohit"
let myOrgNameCopy = myOrgName
myOrgNameCopy = "Ashu"

console.log(myOrgNameCopy);
console.log(myOrgName);



let userOne = {
    Name : "Ashu",
    userEmail: "Ashu@gmail.com"
}
let UserTwo = userOne

userOne.Name = "MOhit"

console.log(UserTwo);
console.log(userOne);


