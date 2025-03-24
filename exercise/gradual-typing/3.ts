// Convert the JavaScript program to a TypeScript program. See code comments
// and assertions to help determine how the code is supposed to behave. For
// more complex scenarios, consider using `console.log` to see the shape of an
// object. This will help when creating interfaces and type aliases.
//
// Both the JavaScript and TypeScript code are shown here for comparison. In
// practice you would not duplicate the code.

import { strict as assert } from "assert";

type MovieTitle = string;
type ShowTime = `${number}:${number}`;

class Theater {
    showtimes: Record<MovieTitle, ShowTime[]>;
    constructor() {
        this.showtimes = {};
    }

    addShowtime(title: MovieTitle, time: ShowTime): void {
        if (!(title in this.showtimes)) {
            this.showtimes[title] = [];
        }
        this.showtimes[title].push(time);
        console.log(`Added showtime ${time} for movie "${title}".`);
    }

    removeShowtime(title: MovieTitle, time: ShowTime): void {
        if (title in this.showtimes) {
            const index = this.showtimes[title].indexOf(time);
            if (index !== -1) {
                this.showtimes[title].splice(index, 1);
                console.log(`Removed showtime ${time} for movie "${title}".`);
            } else {
                console.log(`Showtime ${time} not found for movie "${title}".`);
            }
        } else {
            console.log(`Movie "${title}" not found.`);
        }
    }

    listShowtimes(title: MovieTitle): void {
        if (title in this.showtimes) {
            console.log(`Showtimes for "${title}": ${this.showtimes[title].join(', ')}`);
        } else {
            console.log(`No showtimes found for movie "${title}".`);
        }
    }

    getShowtimes(title: MovieTitle): ShowTime[] {
        return this.showtimes[title];
    }
}

// Example usage
const theater = new Theater();

theater.addShowtime("The Matrix", "18:00");
theater.addShowtime("The Matrix", "21:00");
theater.addShowtime("Inception", "20:00");

theater.listShowtimes("The Matrix"); // Outputs: Showtimes for "The Matrix": 18:00, 21:00

theater.removeShowtime("The Matrix", "18:00");
theater.listShowtimes("The Matrix"); // Outputs: Showtimes for "The Matrix": 21:00

theater.addShowtime("Inception", "20:00");

// It's possible to add showtimes that aren't actual times, but this is not desired.
// theater.addShowtime("whoops", "whenever");
theater.listShowtimes("whoops"); // Outputs: Showtimes for "whoops": whenever

// Test cases
const testTheater = new Theater();
testTheater.addShowtime("a", "18:00");
testTheater.addShowtime("a", "21:00");
testTheater.addShowtime("b", "20:00");
testTheater.removeShowtime("a", "18:00");
assert.deepEqual(testTheater.getShowtimes("a"), ["21:00"]);
assert.deepEqual(testTheater.getShowtimes("b"), ["20:00"]);

