import { fetchLocationData } from "./location";
import type { LocationInfo } from "./location";

const GEOCODE_API_URL = "https://geocode.maps.co/search";
const WEATHER_API_URL = "https://api.open-meteo.com/v1/forecast";

// pnpm run weather LOCATION
async function main(): Promise<number> {
    // enforce correct usage
    if (process.argv.length !== 3) {
        console.error("usage: weather.ts \"LOCATION\"");
        return 1;
    }

    // get location
    const location = process.argv[2];
    // convert to lat/lon

    let locationInfo: LocationInfo;
    try {
        locationInfo = await fetchLocationData(GEOCODE_API_URL, location);
    } catch (e) {
        console.error(e);
        return 1;
    }

    // fetch weather data

    // display data


    // test logging
    console.log(locationInfo);


    return await Promise.resolve(0);
}

main().catch((err) => console.error(err));
