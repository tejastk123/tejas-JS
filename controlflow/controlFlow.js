 // if statement

//  if(condition){ // condition if true then inside code will execute otherwise not
//     //scope
//  }

 const isUserLoggedIn = true
 if( isUserLoggedIn){ // gives answer in only true or false
   console.log("he is");
 }



 // if-else statement

 const temp = 41

 if(temp === 40 ){
  console.log("less than 50");
 }
 else{
  console.log("temp is greater than 50");
 }

const score = 200

if(score > 100){
  const power = "fly" // if there is var then out of scope also return
  console.log(`user power: ${power}`);
}

// console.log(`user power: ${power}`); // out of scope

// **************************************************************************
const balance = 1000

if(balance < 500) console.log("test"), console.log("test2");;// implicit scope, not a good 

if(balance < 500){
  console.log("less than");
}else if(balance < 750){
  console.log("less than 750");
}else if(balance < 900){
  console.log("less than 900");
}else{
  console.log("less than 1200");
}

// real life program

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==2){             // AND condition
  console.log("Allow to buy course");
}
if(loggedInFromGoogle || loggedInFromEmail){       // OR condition
  console.log("User logged in");
}
 
