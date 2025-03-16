// You are tasked with creating a utility that processes an array of
// numbers to find specific values. The array represents scores from a game,
// and you need to manually iterate through the array to find the highest
// score, the lowest score, and calculate the total sum of the scores. You'll
// accomplish this using arrow functions.
//
// Requirements:
//
// - Use an arrow function to find the highest score
// - Use an arrow function to find the lowest score
// - Use an arrow function to calculate the sum of all scores
// - Print out the highest score, lowest score, and the total sum.

import { strict as assert } from "assert";

const scores: number[] = [15, 42, 23, 8, 37, 56, 14];
scores.sort((a, b) => a - b);

const getMaxScore = (array: number[]): number => array[array.length - 1];
const getMinScore = (array: number[]): number => array[0];

// Replace the 0 with a function call to your arrow functions.
const maxScore = getMaxScore(scores);
const minScore = getMinScore(scores);
const totalSum = scores.reduce((a, b) => a + b, 0);

// Test cases. These will confirm if your answer is correct.
assert.equal(maxScore, 56);
assert.equal(minScore, 8);
assert.equal(totalSum, 195);
