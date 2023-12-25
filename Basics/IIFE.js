// Immediately Invoked Function Expression ( IIFE ) 

https://developer.mozilla.org/en-US/docs/Glossary/IIFE

// when we coonect our database and we want to execute or invoke our function immediately
// and we dont want to pollute our function from the global scope variables problems

(function chai(){
    console.log(`DB connected`);
})();                                // this paranthesis is for immediate invoke

( function async(){
    console.log(`thisssss`);
  })();                                // first () is for definition of function and , second () is for the execution call for IIFE
// chai() // this can poolute our function and 

// // IIFE by using the arrow function

// (function code(){
//     console.log(` This is arrow with IIFE`);
// })();


// (() => {
//     // some initiation code
//     let firstVariable;
//     let secondVariable;
//   })();



// with arrow function

(function add1(){
    console.log(`Iam `);
})();

( (name)=> {
    console.log(   ` ${name} khan`);
})(`tejas` )

