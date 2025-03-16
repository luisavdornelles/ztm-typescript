// Using the provided scores in the array, calculate the average score.
//
// To calculate an average:
// 1. Sum the numbers in the array
// 2. Divide the sum by the number of elements
//
// To confirm that your code works as expected, perform the following steps:
// 1. Calculate the average of the `scores` array
// 2. Assert that the average is 85
// 3. Push 92 onto the `scores` array
// 4. Calculate the average again
// 5. Assert that the average is now 86
import { strict as assert } from "assert";

const scores = [90, 77, 83, 96, 76, 88];

function getAverage(array: number[]): number {
    let sum: number = 0;
    
    for (let item of array) {
        sum += item;
    }
    
    return sum / array.length;
}

assert.equal(getAverage(scores), 85);

scores.push(92);

assert.equal(getAverage(scores), 86);
