/* eslint-disable */

// jest

import { concat, div, slowString, failedString } from "./strings"

it("Should say 'Hello, world!'", () => {
    expect(
        concat("Hello, ", "world!")
    ).toEqual("Hello, world!");
});

it("should divide", () => {
    expect(
        div(4, 2)
    ).toEqual(2);
});

it("should fail to divide by zero", () => {
    expect(() => {
        div(4, 0);
    }).toThrow("Cannot divide by zero");
});

test("fetch simple text", async () => {
    slowString()
        .then((data) => {
            expect(data).toEqual("sample");
        })
        .catch((err) => expect(err).toBeUndefined());
});

test("fail to fetch", async () => {
    failedString()
        .then((data) => {
            expect(data).toBeUndefined();
        })
        .catch((err) => expect(err).toEqual("whoops"));
});
