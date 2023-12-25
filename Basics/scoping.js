// { } is the scope, scope of that program


var c = 300       // global scope
let a = 442
const b = 900

if(true){         // Block scope
    let a = 10
    // console.log("Inner a:", a);
    const b = 20
    // console.log("Inner b:", b)
    var c = 30                       // this var will always print the bloack scope value
}

// console.log(a);
// console.log(b);
// console.log(c);


// it is also called as closure 

function one(){
    const username = "Hitesh"

    function two(){
        const website ="Youtube"
        console.log(username);
    }
    // console.log(website);   // it is out of scope for un two username is global and for fn one website is local

    two()
}

// one();

if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = "youtube"
        // console.log(username + website); 
    }
    // console.log(website); // out of scope
}

// console.log(username);  // out of scope

// ***********************************************************


console.log(addOne(5) );
function addOne(num){
    return num + 1
}

// it will only return, it will just only perform and not print

// both above and below are methods to declare the function

addTwo(5)  // It will give error we cannot declare it before the function when we are storing the function somewher, function declaration and holding in any constants,variables know as hoisting
const addTwo = function(num){     // It is an expression
    return num + 2
}