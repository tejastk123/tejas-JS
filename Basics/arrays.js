// Arrays

const myArr = [0, 1, 2 , 3 , 4, 5]

const myHeroes = ["rahul", "arnav", "soham"]

console.log(myArr);
console.log(typeof myHeroes); // Type is OBJECT

// Array Methods

myArr.push(6)


myArr.pop()

myArr.unshift(10)
myArr.shift(15)

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join() // This will not be in the form of Arrys, only its type will get changed to string

console.log(myArr);
console.log(newArr);
console.log(typeof newArr)


//Slice, Splice

// SLICE : The slice() method can be used to create a copy of an array or return a portion of an array. It is important to note that the slice() method does not alter the original array but instead creates a shallow copy.

const cities = ["Tokyo","Cairo","Los Angeles","Paris","Seattle"]

console.log(cities);

const newCities = cities.slice(2); // If input to slice is greater than or equal to the length of array then it will give output empty

const newCities_2 = cities.slice(-2) //  it means "give me this many elements from the end of the array"
console.log(newCities);
console.log(newCities_2);

// SPLICE : Unlike the slice() method, the splice() method will change the contents of the original array. The splice() method is used to add or remove elements of an existing array and the return value will be the removed items from the array.


const food = ['pizza', 'cake', 'salad', 'cookie'];

const newItem = food.splice(2);
console.log(newItem);
console.log(food);
const newItem2 = food.splice(2); // it will remove more 2 
console.log(newItem2); // now it will give ouput as empty array


