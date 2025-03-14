/* eslint-disable */

// A variable is a named memory location that can hold a value. Variables can
// be used to store a wide range of data types, such as numbers, strings, and
// arrays. A variable is declared by specifying its name, data type, and
// optionally an initial value. Once a variable is declared, it can be read
// potentially updated in other parts of the program.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/variable-declarations.html#let-declarations
//

const courseName: string = "TypeScript";
const courseName2: string = 'TypeScript';
const courseName3: string = `TypeScript`;

const amount: number = 100;
const fraction = 10.4;
const oneThousant = 1e3;

const allPermissions = 0o777;

const hexByte = 0x0f;

const binary = 0b00001;

const bigInt = 9000n;

const yes = true;
const no = false;

// completely missing
const missing = undefined;

// we know it's missing
const empty = null;

let someNumber = 10;
someNumber = 20;
// let someNumber = 50; // Error: Cannot redeclare block-scoped variable 'someNumber'

// variable shadowing
{ // block scope
    let someNumber = 50;
}

let hello;
// const whoops; // Error: Missing initializer in const declaration
