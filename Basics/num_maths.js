const score = 400
console.log(score);

const balance = new Number(100); // working as a object
console.log(balance);

console.log(balance.toString()); // convert the Number datatype into String
console.log(balance.toString().length); // gives the length of str
console.log(balance.toFixed(4)); // Precision value after decimal

const otherNumber = 11123.8842
console.log(otherNumber.toPrecision(4)); // 23.9, if 23.98 then 24


const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))


// ++++++++++++++++++++ MATHS Library ++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(4)); // Absolute value -ve to +ve
console.log(Math.abs(-55));

console.log(Math.round(4.4));
console.log(Math.round(4.6));

console.log(Math.ceil(4.2)); //ceil takes the above value
console.log(Math.floor(4.9)); //floor takes the lower value

console.log(Math.min(422,56,162,7123,132,223,426,325,1122));
console.log(Math.max(422,56,162,7123,132,223,426,325,1122));


console.log(Math.random()); //value is always between the 0 and 1 mostly decimal 0.972482
console.log((Math.random()*10) + 1); //value now always between the 1 and 10 7.238374
console.log(Math.floor(Math.random()*10) + 1); 

//Sometimes we have to move in a certain range of values so we have to multiply it by given range (max)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) ) + min );

