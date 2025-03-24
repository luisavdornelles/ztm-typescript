/* eslint-disable */
import { strict as assert } from "assert";

// Useful links:
// https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-d-ts.html
//

import { add, setCase, quote, max } from "./mylib"
// import type { CaseKind } from "./mylib"

const message = "hello";
const upper = setCase(message, "uppercase");

assert.equal(upper, "HELLO");
