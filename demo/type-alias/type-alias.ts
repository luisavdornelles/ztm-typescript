/* eslint-disable */
import { strict as assert } from "assert";

// Type aliases provide a way to give a name to a specific type or to create a
// union of multiple types. They can be used to define object types, which can
// then be used as types for variables, function parameters, and return types.
// Type aliases offer a way to make your code more readable and maintainable by
// providing descriptive names for complex types.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases
//

// We can use a type alias as a way to make our code clearer:
type PersonName = string;

// Type aliases are _just_ aliases. This means anywhere we see the
// type `PersonName`, we can use a `string` in it's place.
// These two are the same type (string):
const myName: PersonName = "Luisa";
const alsoMyName: string = "Luisa";

// example of a function with poor naming:
function print(thing: string) {
  console.log(`Name is ${thing}`);
}

print("a house");

// using proper naming and type aliases:
function printName(name: PersonName) {
  console.log(`Name is ${name}`);
}

printName(myName);
