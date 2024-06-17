const name = "Ashutosh Pratap Singh"
const age = 23

// console.log(name + age + "MCA");

// String Interpoletion

console.log(`Hi my name is ${name} and my age is {age}`);

const inGameName = new String ('up20ashutosh')
console.log(inGameName);
console.log(inGameName.length);
console.log(inGameName.toUpperCase());
// console.log(inGameName.charAt(0));
// console.log(inGameName.indexOf("h"))

const newString = inGameName.substring(0,5)
console.log(newString);

const anotherString = inGameName.slice(-8,5)
console.log(anotherString);

const newStringOne = "  ASHUTOSH      "

console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://ashu%20tosh.com"
console.log(url.replace('%20' , '-'))
console.log(url.includes("ashu"));

const otherName = "ashutosh-pratap-singh"

const splitArray = otherName.split("-");
console.log(splitArray);