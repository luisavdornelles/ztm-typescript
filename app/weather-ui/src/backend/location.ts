import axios from "axios"; // eslint-disable-line
import { GEOCODE_API_URL, API_KEY } from "./constants";
import { locationInfoSchema } from "./models/location.model"
import type { LocationInfo } from "./models/location.model"

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
