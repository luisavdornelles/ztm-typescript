/* eslint-disable */

// Run  pnpm ts-node demo/compound-bool/compound-bool.ts

import { strict as assert } from "assert";

// NOT
const writing = true;
const reading = !writing;
assert.equal(reading, false);

// OR
const rating = 9;
const favoriteMovie = false;

const suggestMovie = rating > 8 || favoriteMovie;
assert.equal(suggestMovie, true);

// AND
const age = 18;
const isTeenager = age >= 12 && age < 20;
assert.equal(isTeenager, true);

const packageWeight = 30;
const packageLength = 50;
const feeExemption = false;

const extraFee = !feeExemption && (packageWeight > 25 || packageLength > 40);
assert.equal(extraFee, true);
