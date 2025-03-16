/* This linter script analyzes the diff files (comparing with the main branch) and checks for any errors or warnings. */

const process = require("process");
const { spawnSync } = require("child_process");
const type = process.argv[2];
let errors = {};

// Type configuration
const config = {};

switch (type) {
    case "eslint":
        config.command = "pnpm eslint";
        config.file = "**/*.ts";
        config.params = [];
        break;
    default:
        console.error("Invalid type");
        process.exit(1);
}

// Get diff files
const diff = spawnSync("git", ["diff", "--name-only", "--diff-filter=d", "origin/main", "-- \"" + config.file + "\""], { shell: true });

if (diff.stderr && diff.stderr.toString()) {
    console.error(`Error running git diff: ${diff.stderr.toString()}`);
    process.exit(1);
}

if (diff.stdout && diff.stdout.toString()) {
    let diffArrayFiles = diff.stdout.toString().trim().split("\n");

    // Running the Linter command base on the type configuration
    const lintResult = spawnSync(config.command, config.params.concat(diffArrayFiles), { shell: true });
    if (lintResult.stderr && lintResult.stderr.toString()) {
        console.error(`Error running linter: ${lintResult.stderr.toString()}`);
        process.exit(1);
    }

    // If there are errors returned by the Linter
    if ("stdout" in lintResult && lintResult.stdout && lintResult.stdout.toString()) {
        console.error(lintResult.stdout.toString());
        process.exit(1);
    }
}


// If no errors found
console.log("No errors found.");
process.exit(0);
