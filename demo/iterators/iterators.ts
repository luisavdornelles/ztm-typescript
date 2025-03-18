/* eslint-disable */

// Iterators offer a way to traverse the elements of a collection one by one.
// The purpose of iterators is to provide a standard way for accessing and
// iterating over collections, such as arrays or maps, in a language-agnostic
// way. Using iterators, you can iterate over collections in a loop without
// having to worry about the underlying implementation of the collection.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html
//

const abc = ["a", "b", "c"];

// Iterate through an array using a standard `for` loop:
for (let i = 0; i < abc.length; i++) {
  console.log(abc[i]); // 'a' 'b' 'c'
}

// Iterate through an array using a `for..of` loop:
for (const letter of abc) {
  console.log(letter); // 'a' 'b' 'c'
}

// Anonymous object:
const nums = {
  one: 1,
  two: 2,
  three: 3,
};

for (const j in nums) {
    // Print the property name and associated value:
    console.log(`[${j}]: ${nums[j]}`);
}
