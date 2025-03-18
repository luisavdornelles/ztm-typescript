const GEOCODE_API_URL = "https://geocode.maps.co/search";

async function main(): Promise<number> {
    // pnpm run weather LOCATION

    if (process.argv.length !== 3) {
        console.error("usage: weather.ts \"LOCATION\"");
        return 1;
    }

    // get location
    const location = process.argv[2];
    // convert to lat/lon

    // fetch weather data

    // display data

    console.log(process.argv);
    return await Promise.resolve(0);
}

main().catch((err) => console.error(err));
