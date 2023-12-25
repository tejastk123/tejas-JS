// This Keyword

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`); // when we have to refer the current contaxt then we have to use this, temporary contax
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam" // we change the contax then it will print the given contax
// user.welcomeMessage() 

// console.log(this) // empty, 

// in browser, there are global object called window object available but here we have standalone object

function chai(){
    let username = "Hitesh"
    console.log(this.username); // when we are declaring it in the function, then it is in the node environment then it will have many values
} // we cant use this.username

// chai()

const code = () => {
    let username = "Hitesh"
    console.log(this);
}

// chai()

// ARROW FUNCTION () => { } 

const addTwo = (num1, num2) => {
    return num1 + num2
}
// console.log(addTwo(3, 4))

// implicit return is when we dont have to write { } and then dont need to write return
// if not an implicit return, then ( ) => { } , need to return there
// to return the object we have to wrapped it under { } only

const addThree = (num1, num2, num3) => (num1 + num2 + num3) // implicit return
console.log(addThree(2,3,4));

