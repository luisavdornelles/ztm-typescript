// You are developing a small statistics module that needs to calculate the
// average and median of an array of numbers. The array represents the scores
// of students in an exam. You will use arrow functions to find the average and
// median of these scores.
//
// Requirements:
// - Use an arrow function to calculate the average of the numbers in the array.
// - Use an arrow function to calculate the median of the numbers in the array.
// - The array may have an even or odd number of elements, so handle both cases for the median.
// - Print out the average and the median of the scores.

import { strict as assert } from "assert";

const scores: number[] = [85, 92, 88, 74, 91, 77, 89, 95];

const getAverage = (array: number[]): number => {
    const sum = array.reduce((a, b) => a + b, 0);
    return sum / array.length;
}

const getMedian = (array: number[]): number => {
    const isPar = array.length % 2 === 0;
    const halfLength = array.length / 2;
    
    array.sort((a, b) => a - b);
    
    if (isPar) {
        const lowerMedian = array[halfLength - 1];
        const upperMedian = array[halfLength];

        return (lowerMedian + upperMedian) / 2;
    } else {
        return array[Math.ceil(halfLength)];
    }
}

// Replace the 0 with a function call to your arrow functions.
const average = getAverage(scores);
const median = getMedian(scores);

// Test cases. These will confirm if your answer is correct.
assert.equal(average, 86.375);
assert.equal(median, 88.5);
