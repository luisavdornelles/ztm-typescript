import axios from "axios";

const weatherCodes: Record<number, string> = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Depositing rime fog",
    51: "Light drizzle",
    53: "Moderate drizzle",
    55: "Dense drizzle",
    56: "Light freezing drizzle",
    57: "Dense freezing drizzle",
    61: "Slight rain",
    63: "Moderate rain",
    65: "Heavy rain",
    66: "Light freezing rain",
    67: "Heavy freezing rain",
    71: "Slight snow fall",
    73: "Moderate snow fall",
    75: "Heavy snow fall",
    77: "Snow grains",
    80: "Slight rain showers",
    81: "Moderate rain showers",
    82: "Violent rain showers",
    85: "Slight snow showers",
    86: "Heavy snow showers",
    95: "Moderate thunderstorm",
    96: "Thunderstorm with slight hail",
    99: "Thunderstorm with heavy hail",
};

export interface CurrentWeatherApiResponse {
    current_weather: {
        temperature: string;
        windspeed: number;
        winddirection: number;
        weathercode: number;
        is_day: number;
        time: string;
    }
}

export interface Temperature {
    value: number;
    unit: string
}

const formatTemperature = (temp: Temperature): string => `${temp.value}${temp.unit}`;

export interface Wind {
    speed: number;
    direction: number;
    unit: string;
}

const formatWind = (wind: Wind): string => `${wind.speed}${wind.unit}`;

export async function fetchWeatherData(
    apiUrl:string,
    lat: string,
    lon: string
): Promise<CurrentWeatherApiResponse> {
    const options = {
        method: "GET",
        url: apiUrl,
        params: {
            latitude: lat,
            longitude: lon,
            hourly: "",
        }
    }

}
