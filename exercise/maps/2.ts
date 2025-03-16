// You are developing a simple application to track the population of various
// cities. Each city will be mapped to its population, allowing you to easily
// update and retrieve the population data as needed. Your task is to implement
// this using a Map in TypeScript.
//
// Requirements:
// - Create a `Map` that maps city names (strings) to their population (numbers).
// - Add at least three cities and their respective populations to the `Map`.
// - Retrieve and print the population of a specific city.
// - Update the population of a city.
// - Print out all cities and their populations using a for..of loop.
//
// Notes:
// - Use any city and population count, fictional or otherwise.

/* eslint-disable */

type Name = string;
type Population = number;

const cities: Map<Name, Population> = new Map();

cities.set("Toronto", 6200000);
cities.set("Montreal", 4200000);
cities.set("Vancouver", 2700000);

console.log(cities.get("Montreal"));

cities.set("Vancouver", 2800000);

for (const [name, population] of cities) {
    console.log(`The city of ${name} has ${population} residents`);
}
