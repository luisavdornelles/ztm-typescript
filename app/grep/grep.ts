/* 
    Global Regular Expression Print
    This app searches for a string in a given file
*/

import { readFileSync } from "fs";

const args = process.argv;

if (args.length < 4) {
    throw new Error ("Missing arguments. Usage: pnpm ts-node app/grep/grep.ts file_name search_string");
}

const fileName: string  = args[2];
const searchString: string = args[3];
const contents: string = readFileSync(fileName, "utf8");
const lines: string[] = contents.split("\n");

for (const line of lines) {
    if (line.includes(searchString)){
        console.log(line);
    }
}
