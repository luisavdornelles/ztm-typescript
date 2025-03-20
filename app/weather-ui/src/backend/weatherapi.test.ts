import { strict as assert } from "assert";
import axios from "axios"; // eslint-disable-line
import MockAdapter from "axios-mock-adapter"; // eslint-disable-line
import { WEATHER_API_URL, SAMPLE_API_RESPONSE_WEATHER } from "./constants";
import { CurrentWeather } from "./models/weatherapi.model";
import { fetchWeatherData } from "./weatherapi";

const params = {
    latitude: "0.0",
    longitude: "0.0",
    hourly: "temperature_2m",
    temperature_unit: "celsius",
    current_weather: true,
    forecast_days: 1,
}

const currentWeather = new CurrentWeather(SAMPLE_API_RESPONSE_WEATHER);

it("should convert API request", async () => {
    // makes `axios` to use the mock instead of making an actual request
    const httpClient = new MockAdapter(axios);

    httpClient.onGet(WEATHER_API_URL, params).reply(200, SAMPLE_API_RESPONSE_WEATHER);
  
    await fetchWeatherData("0.0", "0.0");
});

it("throws error when response is not 200", async () => {
    // makes `axios` to use the mock instead of making an actual request
    const httpClient = new MockAdapter(axios);

    httpClient.onGet(WEATHER_API_URL, params).reply(400, {});
  
    await expect(fetchWeatherData("0.0", "0.0")).rejects.toThrow();
});

it("throws error when the API response changes", async () => {
    // makes `axios` to use the mock instead of making an actual request
    const httpClient = new MockAdapter(axios);

    httpClient.onGet(WEATHER_API_URL, {
        params: {
          // fields renamed to `lat` and `long`
          lat: "0.0",
          long: "0.0",
          // latitude: "0.0",
          // longitude: "0.0",
          hourly: "temperature_2m",
          temperature_unit: "celsius",
          current_weather: true,
          forecast_days: 1,
        }
    }).reply(200, {});

    // this will throw an error if it fails, which will mark the test as a failure
    await expect(fetchWeatherData("0.0", "0.0")).rejects.toThrow();
});

it("gets low temp", () => {
    const lowTemp = currentWeather.lowTemp();
    assert.equal(lowTemp, 23.3);
});

it("gets high temp", () => {
    const highTemp = currentWeather.highTemp();
    assert.equal(highTemp, 33.5);
});

it("gets condition", () => {
    const condition = currentWeather.condition();
    assert.equal(condition, "Clear sky");
});
