// A student management system requires functionality to add and remove student
// enrollments for various sections (classes). Each student has a list of
// enrollments which may have sections added or removed at any time.
//
// The faculty also needs the ability to determine how many sections any given
// student is enrolled in.
//
// Sections consist only of a section name, for example "Computer Science".
//
// Perform the following steps and add assertions to confirm that your program
// behaves as expected:
//
// 1. Add a section titled "CompSci" for `alice`
// 2. Add a section titled "Networking" for `alice`
// 3. Remove a section titled "CompSci" from `alice`
// 4. Assert that alice's enrollments consist of only "Networking"
// 5. Add a section titled "Networking" for `bob`
// 6. Assert that bob's enrollments consist of "Algorithms" and "Networking"
// 7. Assert that bob's total enrollment count is equal to 2
//
// Tips:
//
// - Create an `addSection` function to add an enrollment for a student.
// - Create a `removeSection` function to remove an enrollment from a student.
// - Create a `totalEnrollments` function to calculate the number of
//   sections a student is enrolled in.

import { strict as assert } from "assert";

// exercise is aware that this is not the best practice
type Student = { // eslint-disable-line
  name: string;
  enrollments: string[];
};

const alice: Student = {
  name: "Alice",
  enrollments: [],
};

const bob: Student = {
  name: "Bob",
  enrollments: ["Algorithms"],
}

function addSection(student: Student, section: string): void {
  student.enrollments.push(section);
}

function removeSection(student: Student, section: string): void {
  const indexToRemove = student.enrollments.indexOf(section);
  student.enrollments.splice(indexToRemove, 1);
}

function totalEnrollments(student: Student): number {
  return student.enrollments.length;
}

addSection(alice, "CompSci");
addSection(alice, "Networking");
assert.deepEqual(alice, { name: "Alice", enrollments: [ "CompSci", "Networking" ] });

removeSection(alice, "CompSci");
assert.deepEqual(alice, { name: "Alice", enrollments: [ "Networking" ] });

addSection(bob, "Networking");
assert.deepEqual(bob, { name: "Bob", enrollments: [ "Algorithms", "Networking" ] });

assert.equal(totalEnrollments(bob), 2);
