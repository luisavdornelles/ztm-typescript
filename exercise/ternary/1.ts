// Using at least one ternary operator, create a program that can convert
// Celsius and Fahrenheit temperatures.
//
// To convert °C to °F: (°C * 1.8) + 32
// To convert °F to °C: (°F - 32) / 1.8
//
// To confirm that your program works properly, do the following:
// 1. convert 25°C to °F, and assert that the value is 77
// 1. convert 68°F to °C, and assert that the value is 20

import { strict as assert } from "assert";

function convertCtoF(temperature: number): number {
    return (temperature * 1.8) + 32;
}

function convertFtoC(temperature: number): number {
    return (temperature - 32) / 1.8;
}

function convertTempUnit(temperature: number, currentUnit: string): number {
    return currentUnit === "F" ? convertFtoC(temperature) : convertCtoF(temperature);
}

assert.equal(convertTempUnit(25, "C"), 77);
assert.equal(convertTempUnit(68, "F"), 20);
