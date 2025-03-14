// Using functions and template literals, print out your first and last name.
//
// Requirements:
// - Use a single function to generate your first name
// - Use a single function to generate your last name
// - Use a single function to generate your full name by using the other
//   functions
// - Print out your full name using the functions

import { strict as assert } from "assert";

function getFirstName(): string {
    return "Luisa";
}

function getLastName(): string {
    return "VD";
}

function getFullName(): string {
    return `${getFirstName()} ${getLastName()}`;
}

function printFullName(): void {
    console.log(getFullName());
}

printFullName();
