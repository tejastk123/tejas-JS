// Datatypes are divided into 2 categroies that how data is stored and how it gets accessed//

// primitive- 7types (callbyvalue): String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const  scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null // datatype is OBJECT
let username = undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 32424334234234232113123413n // using n at last it is now become BigInt



// Reference types(non-primitive) (callbyReference) : Arrays, Object, Functions

//JavaScript is a dynamically typed language, which means that data types of variables are
// determined by the value they hold at runtime and can change throughout the program as we
//  assign different values to them.

//return type of non-primitive type is OBJECT only

const heroes = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "tejas",
    age:22,
}

const myFunction = function(){
    console.log("Hello World")
}
console.log(typeof id) //return datatype of symbol is symbol
console.log(typeof bigNumber);
console.log(typeof outsideTemp) // return type of nULL is object

console.log(typeof heroes) // return type of array is object only
console.log(typeof myFunction) // datatype of function Variable is object Function


// ******************************Memory Allocation ***************

// Stack (primitive), Heap (non-primitive)
// in Stack when primitive datatype get store, we get a copy
// in Heap when non-primitive datatype get store, we get a reference or address of the original, so we can change the original values


let myYoutubeName = "tejaskumare.com"
let anotherName =myYoutubeName
anotherName = "chaicode"

console.log(myYoutubeName)
console.log(anotherName)

let user1 = {
    email : "user@google",
    upi :  "user@pay"
}


let user2 = user1

user2.email = "hitesh@google.com"

console.log(user1.email)
console.log(user2.email)

