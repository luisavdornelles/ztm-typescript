import { fetchLocationData } from "./location";
import { fetchWeatherData } from "./weatherapi";
import type { LocationInfo } from "./location";

const GEOCODE_API_URL = "https://geocode.maps.co/search";
const WEATHER_API_URL = "https://api.open-meteo.com/v1/forecast";

// CLI implementation

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
    console.log(`Fetching weather data for ${locationInfo.display_name}...\n`);

    try {
        const weather = await fetchWeatherData(WEATHER_API_URL, locationInfo.lat, locationInfo.lon);
        console.log(weather.format());
        return await Promise.resolve(0);
    } catch (e) {
        console.error(e);
        return 1;
    }
}

main().catch((err) => console.error(err));
