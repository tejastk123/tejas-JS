const accountId = 141434 // It is a constant variable whose vaue cannot be changed after modification also, It gets LOCK

// There are two methods to print the variable first is LET and another VAR, {} is the scope, in earlier time JS dont know about scope, so we simply use LET

let accountEmail = "kumaretejas689@gmail.com"  // Memory space assign and it gets change

var accountPassword = "1243"
/*
Prefer not to use the var
because of issue in block scope and functional scope
*/

accountCity = "Jaipur" // this can be one way to declare a variable

// accountId = 45 // Not allowed

accountEmail = "hc@hac.com"
accountPassword = "5555"
accountCity = "Nagpur"
let accountState

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]) // Using Console.table we can print all the variables simultaneiusly in a single time
