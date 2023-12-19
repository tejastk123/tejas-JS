let value = 4
let negValue = -value
console.log(negValue)

let str1 = "hello"
let str2 = " Tejas"

let str3 = str1 + str2
console.log(str3)

// DO not use this types of coding style because it will not going to merge

console.log("1" + 2)
console.log(1 + "2")
console.log("1"+2+2) // it will give 122, if string is at starting then consider the next ones also as a string
console.log(1+2+"2") // it will give 32, If string is at last then consider others as a operations



console.log(true) // it will print true only 
console.log(+true) // it will print 1 as + is before the boolean
// console.log(true+) // it will give error

console.log(+"") // it will give 0 as the empty is false and + will convert it into the number



let num1, num2, num3

// num1 = num2 = num3 = 2 + 2 // tricky , use the simple code

let gameCounter = 100
gameCounter++; //postfix
console.log(gameCounter)

let gameCounter_pre = 100
++gameCounter_pre; //postfix
console.log(gameCounter_pre)

// Example for postfix

let x = 3
const y = x++
console.log( x, y)
// expected output = x:4, y: 3

// example for prefix

let a = 3
const b = ++a
console.log(a, b)
// expected output = a:4, y: 4





