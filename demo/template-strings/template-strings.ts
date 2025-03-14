/* eslint-disable */
import { strict as assert } from "assert";

// Template literals allow us to substitute variables into a string.
// This makes it easy to display customized messages.
//
// Useful links:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
//

function greet(msg) {
    console.log(`hello ${msg}`);
}

greet("TypeScript");

// We can also use expressions in the template literal.
const kids = 2;
const adults = 4;
// Try to keep the expression short so it's easy to read the string.
const totalPeople = `There are ${kids + adults} people`;

console.log(`${totalPeople} to seat at the restaurant.`);
