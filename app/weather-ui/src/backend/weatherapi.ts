import axios from "axios"; // eslint-disable-line
import { CurrentWeather, CurrentWeatherApiResponseSchema } from "./models/weatherapi.model"

const WEATHER_API_URL = "https://api.open-meteo.com/v1/forecast";

export async function fetchWeatherData(
    lat: string,
    lon: string
): Promise<CurrentWeather> {
    const options = {
        method: "GET",
        url: WEATHER_API_URL,
        params: {
            latitude: lat,
            longitude: lon,
            hourly: "temperature_2m",
            temperature_unit: "celsius",
            current_weather: true,
            forecast_days: 1,
        },
    };

    const response = await axios.request(options);

    if (response.status !== 200) {
        throw new Error(`Failed to fecth weather data. API responded with status ${response.status}`);
    }

    try {
        const res = CurrentWeatherApiResponseSchema.parse(response.data);     
        return new CurrentWeather(res);
    } catch (err) {
        console.error(err);
        throw new Error("Received invalid API response");
    }
}
