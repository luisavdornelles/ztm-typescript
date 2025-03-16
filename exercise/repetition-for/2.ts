// Implement a sorting algorithm of your choosing to sort the provided array.
// Good introductory sorting algorithms are bubble sort and insertion sort.
//
// To confirm that your algorithm works properly, perform these steps:
// 1. Run your sorting algorithm on the `nums` array
// 2. Assert that the sorted array is [1, 2, 3, 4, 5]
//
import { strict as assert } from "assert";

const nums = [5, 4, 3, 2, 1];

for (let i = 0; i < (nums.length); i++) {
    for (let j = (i + 1); j < (nums.length); j++) {
        const numberToCheck = nums[i];
        const numberToCompare = nums[j];

        if (numberToCheck > numberToCompare) {
            nums[i] = numberToCompare;
            nums[j] = numberToCheck;
        }
    }
}

assert.deepEqual(nums, [1, 2, 3, 4, 5]);
