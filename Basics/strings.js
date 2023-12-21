const name = "Tejas"
const repocount = 540

// console.log(name + repocount + " Value"); // We have to concanete, we are using ++ or ,, so we dont have to use this

console.log(`Hello my name is ${name} and my repo count is ${repocount}`)
   
const gameName = new String(`tejastk-123`) // In the console, all have the values it dont say that it is an array, we have many methods to use strings

console.log(typeof gameName)
console.log(gameName[0])
console.log(gameName.__proto__); // prototype, which is empty

console.log(gameName.toUpperCase());
console.log(gameName.charAt('2'));
console.log(gameName.indexOf('k'))


const newString = gameName.substring(0, 4) // it will divide into given inputs
console.log(newString);

console.log();

const anotherString = gameName.slice(-11, 2) // slice function takes the negative value which means it will start from the ending and start printing 
console.log(anotherString);

const newString1 = "      Kumare      "
console.log(newString1);
console.log(newString1.trim()); // here there will be no space, all space will get trimmed


const url = "https://hitesh.com/hitesh%20hchodhary"


console.log(url.replace(`%20`, `-`)) // We can replace the character or word by using the replace function

console.log(url.includes(`hitesh`)); // We can ask whether it is included in the string or not
console.log(url.includes(`sundar`));

// Split Method ************
const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// Expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]