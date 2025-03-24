/**
 * Calculates the total by adding two numbers.
 * 
 * @param {number} a - The first number to add.
 * @param {number} b - The second number to add.
 * @returns {number} The sum of the two numbers.
 */
function add(a, b, ...args) {
    let total = a + b;
    for (let n of args) {
        total += n;
    }
    return total;
}

/**
 * Finds the maximum value in an array of numbers.
 *
 * @param {number[]} arr - The array of numbers to evaluate.
 * @returns {number|null} The maximum value in the array, or null if the array is empty.
 */
function max(arr) {
    if (arr.length === 0) {
        return null;
    }
    return arr.reduce((a, b) => Math.max(a, b));
}

/**
 * Converts the case of a given string based on the specified kind.
 *
 * @param {string} message - The string to be converted.
 * @param {"uppercase" | "lowercase"} kind - The case conversion type. Must be either "uppercase" or "lowercase".
 * @returns {string} The converted string in the specified case.
 * @throws {Error} Throws an error if the kind is not "uppercase" or "lowercase".
 */
function setCase(message, kind) {
    if (kind === "uppercase") {
        return message.toUpperCase();
    } else if (kind === "lowercase") {
        return message.toLowerCase();
    } else {
        throw new Error("invalid kind: must be 'uppercase' or 'lowercase'");
    }
}

/**
 * Wraps a given message in double quotes and returns a function that provides the quoted message.
 *
 * @param {string} message - The message to be quoted.
 * @returns {function(): string} A function that returns the quoted message when called.
 */
function quote(message) {
    return () => { return `"${message}"` }
}

module.exports = {
    add,
    max,
    quote,
    setCase
}

