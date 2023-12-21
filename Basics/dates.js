// // Dates

let myDate = new Date()
console.log(myDate.toString()); 
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate); 

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString());

let myCreatedDate_1 = new Date(2023, 0, 23, 5, 34, 45, 22)
console.log(myCreatedDate_1.toLocaleString());


let myCreatedDate_2 = new Date("2024-01-14") // YY-MM-DD syntax to be followed
console.log(myCreatedDate_2.toDateString());
console.log(myCreatedDate_2.toLocaleDateString());

// It is Basically used in the poll like fastest one to be the winner
let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate_2.getTime()); // Now we have two values in milliseconds, so we can easily compare them and can find the least time and announce the winner

//in seconds
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth());








