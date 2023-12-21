// Objects can be declared using 2 methods first is LITERAL and other is CONSTRUCtOR
// Singleton means when we declare any object using constructor then it will make only one single object and in Literals it will not form any Singleton


// object literals
const JsUser = {
    name: "Tejas", // keys & values, name is a key and it islike a string
    age: 20,
    "full name" : "Tejas Kumare", // allowed string
    location: "Jaipur",
    email: "kumare@gmail.com",
    lastLogInDays: ["Mon", "Tue"],
}



// console.log(JsUser.email) // string type 
// console.log(JsUser["email"]) // it is string type access
// console.log(JsUser["full name"]); //only way to access the fullNAME is to take the square bracket

// // how to declare the symbol in objects and see what will be its datatype

// const mySym = Symbol("Key 1"); // we are referring this symbol

// const JsUser1 = {
//     mySym : "myKey1",
// };

// console.log(JsUser.mySym); // this will print myKey1 as output, but the type is string

// const mySym2 = Symbol("Key2")
// const JsUser2 = {
//     [mySym2] : "myKey2",
// };
// console.log(JsUser2[mySym2]); // correct method to access symbol

// // freeze the email 
// JsUser.email = "tkkanfjn*@)29gmail.com"
// Object.freeze(JsUser)
// JsUser.email = "Microsoft@gmail.com"
// // console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greeting1 = function(){
    console.log(`Hello Js User, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greeting1());
