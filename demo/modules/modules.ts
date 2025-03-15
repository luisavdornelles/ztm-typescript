/* eslint-disable */
import { strict as assert } from "assert";

// ES modules provide a way to organize code into separate files that can be
// imported and used in other files.To use an ES module, the the `import`
// keyword is used.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/2/modules.html
//

import { add, pi, Int as Integer } from "./math"
import { Point } from "./coord"

const three: Integer = 3;
console.log(add(three, three));
