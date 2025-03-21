// Write a program that calculates the total area of different shapes using
// discriminated unions. Include support for at least squares, rectangles, and
// circles. The functionality to calculate the area of each shape should exist
// in a single function and the function should select the appropriate
// calculation based on the disciminator.
//
// The area of a square: side^2
// The area of a rectangle: width * height
// The area of a circle: Math.PI * radius^2
//
// Make these assertions to check your code:
// - Square with side length of 5 has an area of 25
// - Rectangle with width of 4 and height of 6 has an area of 24
// - Circle with radius of 3 has an area of Math.PI * 9

import { strict as assert } from "assert";

// exercise is aware that this is not the best practice
type Shape =
    | { type: "square"; side: number }
    | { type: "rectangle"; width: number; height: number }
    | { type: "circle"; radius: number };  // eslint-disable-line

function getArea(shape: Shape): number {
    switch (shape.type) {
        case "square":
            return shape.side ** 2;
        case "rectangle":
            return shape.width * shape.height;
        case "circle":
            return Math.PI * (shape.radius ** 2);
    }
}

const square: Shape = { type: "square", side: 5 };
const sqArea = getArea(square);
assert.equal(sqArea, 25);

const rectangle: Shape = { type: "rectangle", width: 4, height: 6 };
const reArea = getArea(rectangle);
assert.equal(reArea, 24);

const circle: Shape = { type: "circle", radius: 3 };
const ciArea = getArea(circle);
assert.equal(ciArea, Math.PI * 9);
