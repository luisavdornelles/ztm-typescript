// Your task is to create a class that only allows text input up to a certain
// length. This length-restricted class will be used to ensure that users do
// not enter too much information into an input field.
//
// Requirements:
// - Create a class containing a length-limited string 
// - The class should not allow instantiation with strings greater than the
//   specified length
// - The class should allow setting the maximum string length
// - Throw an exception in the constructor of the class if the string is over
//   the maximum length

import { strict as assert } from "assert";

class Input {
    value: string;

    constructor(input: string, maxLength: number) {
        if (input.length > maxLength) {
            throw new Error (`value length should be <= ${maxLength}`);
        }
        this.value = input;
    }
}

const ok = new Input("ok", 5);
console.log(ok);

assert.throws(() => {
    const crash = new Input("crash", 2);
    console.log(crash);
});
