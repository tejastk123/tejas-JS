// object singleton or constructo r

// const tinderUser = new Object(); // singleton object

const tinderUser  = {}; // non-singleton object created

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regularUser = {  // Object in Object
    email: "some@gmail.com",
    fullName : {
        userFullName : {
            firstName : "Tejas",
            lastName : "Kumare",
        }
        
    }
}

// console.log(regularUser.fullName.userFullName); // we can access nested objects by using the (.)

// Merge in Objects or concanete
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1 , obj2};
// console.log(obj3); // This is not a proper way to merge

const obj3 = Object.assign({}, obj1, obj2) // Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object. We have to use {} target and others are source, so we give the empty object as a target in which all source gets copied

// spread object 
const obj4 = {...obj1, ...obj2};
// console.log(obj3); // assign
// console.log(obj4); // spread

// when users comes from the database in form of arrays 

const users = [
    {
        if: 1,
        email: "h@gmail.com",   
    },
    {
        if: 12,
        email: "haa@gmail.com",   
    },
    {
        if: 122,
        email: "hhfadf@gmail.com",   
    }
]

users[1].email
console.log(tinderUser);
    
console.log(Object.keys(tinderUser)); // datatype is array and we can use these keys by applying loops and other, similarly we can take values also
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // how the entries are made shown in array inside array

console.log(tinderUser.hasOwnProperty('IsLoggedIn'));