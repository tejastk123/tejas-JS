const marvel_heroes = ["thor", "Ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes); // it will consider the dc_heroes as fourth element
// console.log(marvel_heroes[3][1]); // it will print elements from 3rd index and index 1 element which is flash


// const newArray = marvel_heroes.concat(dc_heroes) // it will print both in a concanete way, new array
// console.log(newArray); 


// const allNewHeroes = [...marvel_heroes, ...dc_heroes]
// console.log(allNewHeroes);

// const anotherArray =[1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// const real_anotherArray = anotherArray.flat(Infinity)
// console.log(real_anotherArray);


console.log(Array.isArray("Hitesh")) // it will check if it is an array
console.log(Array.from("Tejas")) // it will convert it into the array
console.log(Array.from({name: "Hitesh"})); // it will give empty array because we are not assigning key or value which have to convert to array

