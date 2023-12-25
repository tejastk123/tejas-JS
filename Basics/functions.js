
function sayHello(){
    console.log("H")
    console.log("e")
    console.log("l")
    console.log("l")
    console.log("o")
}

// sayHello()  

function addTwoNumbers(number1, number2 ){ // this are the parameters which are passing into the definition
    console.log(number1+number2);
}
// addTwoNumbers(3, 4);  // This are the arguments are passing to call it
// addTwoNumbers(3, "4"); // string
// addTwoNumbers(3, null); // output is 3

// const result = addTwoNumbers(55, 34) // console will only print but it will not return the value if we again try to print
// console.log("Result: ", result ); // undefined output, so we use another method of using the functions




// ********************** 



function addTwoNumbers_1(number1, number2)
{
    let result_1 = number1 + number2
    return result_1
    console.log("Hitesh"); // this will never print because after it get return, nothing will work
}

// const result_1 = addTwoNumbers_1(44, 55);
// console.log("result : ", result_1);


// *********************************************************************

function logInUser(username){
    if(username === undefined){ // also can be written as (!username)
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`;
}

// console.log(logInUser("TK"));

// in projects when we dont know about how many arguements are going to be passed, we use this type of function declaration


function calculateCartPrice(...num1){ // this are rest operators, not similar to spread, it will pack all and give the ouput
    return num1
}

// console.log(calculateCartPrice(200, 400, 500)); // all are separated and spreaded, we have to combine all them to one sum, now it will showcase in a array and then we can calculate the array sum

 // ********************######################****************************

function calculateCartPrice_1(val1, val2, ...num2){ // it seems like val1 is 200, val2 is 400 and rest all will be in num1
    return num2;
}

// console.log(calculateCartPrice_1(200, 400, 500, 2000)); 

// how functions handle the anyobjects

const user = {                 // object
    userName : "hitesh",
    price : 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`);
}
// console.log(handleObject(user));
//another method to pass object to an function

// handleObject({
//     userName:  " sam ",
//     price : 2523
// })


// *************************** Passing an Array into Functions ********************************

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));