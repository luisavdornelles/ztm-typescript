import { z } from "zod" // eslint-disable-line
import { weatherCodes } from "../constants"

// TypeScript-first schema validation with static type inference
// https://zod.dev/
export const CurrentWeatherApiResponseSchema = z.object({
    current_weather: z.object({
        temperature: z.number(),
        windspeed: z.number(),
        winddirection: z.number(),
        weathercode: z.number(),
        is_day: z.number(),
        time: z.string(),
    }),
    hourly_units: z.object({
        temperature_2m: z.string(),
    }),
    hourly: z.object({
        temperature_2m: z.array(z.number()),
    }),
});

// extract the TypeScript type of any schema with infer
type CurrentWeatherApiResponse = z.infer<typeof CurrentWeatherApiResponseSchema>;

interface Temperature {
    value: number;
    unit: string;
}

export class CurrentWeather {
    temperature: Temperature;
    weathercode: number;
    is_day: boolean;
    time: string;
    hourlyTemp: number[];

    constructor(apiResponse: CurrentWeatherApiResponse) {
        this.temperature = {
            value: apiResponse.current_weather.temperature,
            unit: apiResponse.hourly_units.temperature_2m,
        };
        this.weathercode = apiResponse.current_weather.weathercode;
        this.is_day = apiResponse.current_weather.is_day === 1;
        this.time = apiResponse.current_weather.time;
        this.hourlyTemp = apiResponse.hourly.temperature_2m;
    }

    condition(): string {
        return weatherCodes[this.weathercode];
    }

    lowTemp(): number {
        return Math.min(...this.hourlyTemp);
    }

    highTemp(): number {
        return Math.max(...this.hourlyTemp);
    }
}
