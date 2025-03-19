import { z } from "zod" // eslint-disable-line
import type { AxiosStatic } from "axios";

// Free API key, safe to save in repo
const API_KEY = "67d9c11706027690288422sae27514a";

// TypeScript-first schema validation with static type inference
// https://zod.dev/
const locationInfoSchema = z.object({
    lat: z.string(),
    lon: z.string(),
    display_name: z.string(),
});

// extract the TypeScript type of any schema with infer
export type LocationInfo = z.infer<typeof locationInfoSchema>;

export async function fetchLocationData(
    axios: AxiosStatic,
    apiUrl: string,
    locationName: string
): Promise<LocationInfo> {
    const options = {
        method: "GET",
        url: apiUrl,
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
        const locationData: LocationInfo = locationInfoSchema.parse(response.data[0]);
        return locationData;
    } catch (err) {
        console.error(err);
        throw new Error(`Unable to find location information for ${locationName}`);
    }
}
