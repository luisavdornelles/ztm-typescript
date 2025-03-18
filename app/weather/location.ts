import axios from "axios";

const API_KEY = "67d9c11706027690288422sae27514a";

export interface LocationInfo {
    lat: string;
    lon: string;
    display_name: string;
}

export async function fetchLocationData(
    apiUrl:string,
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

    const response = await axios.request<LocationInfo[]>(options);

    if (response.status !== 200) {
        throw new Error(`Failed to fecth location data. API responded with status ${response.status}`);
    }

    if (response.data.length === 0) {
        throw new Error(`Unable to find location information for ${locationName}`);
    }

    const locationData: LocationInfo = response.data[0];

    return locationData;
}
