import axios from "axios"; // eslint-disable-line
import { locationInfoSchema } from "./models/location.model"
import type { LocationInfo } from "./models/location.model"

// Free API key, safe to save in repo
const API_KEY = "67d9c11706027690288422sae27514a";
const GEOCODE_API_URL = "https://geocode.maps.co/search";

export async function fetchLocationData(
    locationName: string
): Promise<LocationInfo> {
    const options = {
        method: "GET",
        url: GEOCODE_API_URL,
        params: {
            q: locationName,
            api_key: API_KEY,
        }
    }

    const response = await axios.request(options);

    if (response.status !== 200) {
        throw new Error(`Failed to fecth location data. API responded with status ${response.status}`);
    }

    try {
        return locationInfoSchema.parse(response.data[0]); // eslint-disable-line
    } catch (err) {
        console.error(err);
        throw new Error(`Unable to find location information for ${locationName}`);
    }
}
