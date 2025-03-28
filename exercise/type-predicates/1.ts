// You are developing a system that processes user inputs, where each input
// could be a string or a number. Implement a function that uses type
// predicates to determine the type of input and perform type-specific
// processing.
//
// Requirements:
// - Create a function called `processInput` that:
//   - Takes input, which can be either a string or a number.
//   - Uses a type predicate to check if the input is a string or a number.
//   - For a string, print "Processing string: " followed by the string.
//   - For a number, print "Processing number: " followed by the number.
//   - Ensure the type-specific processing is handled correctly.


type Input = number | string;

function isNumber(input: Input): input is number {
    return typeof input === "number";
}

function isString(input: Input): input is string {
    return typeof input === "string";
}


function processInput(input: Input): void {
    if (isString(input)) {
        console.log(`Processing string: ${input}`);
      } else if (isNumber(input)) {
        console.log(`Processing number: ${input}`);
      }
}

// Test cases
processInput("Hello, world!");  // Output: Processing string: Hello, world!
processInput(42);               // Output: Processing number: 42
processInput("");               // Output: Processing string: 
processInput(0);                // Output: Processing number: 0

