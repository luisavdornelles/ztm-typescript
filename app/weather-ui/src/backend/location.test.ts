import axios from "axios"; // eslint-disable-line
import MockAdapter from "axios-mock-adapter"; // eslint-disable-line
import { fetchLocationData } from "./location";
import { GEOCODE_API_URL, SAMPLE_API_RESPONSE_GEO, API_KEY } from "./constants";

it("should convert API request", async () => {
    // makes `axios` to use the mock instead of making an actual request
    const httpClient = new MockAdapter(axios);

    httpClient.onGet(GEOCODE_API_URL, { params: { q: "test", api_key: API_KEY } })
        .reply(200, SAMPLE_API_RESPONSE_GEO);
  
    await fetchLocationData("test");
});

it("throws error when response is not 200", async () => {
    // makes `axios` to use the mock instead of making an actual request
    const httpClient = new MockAdapter(axios);
    httpClient.onGet(GEOCODE_API_URL, { params: { q: "test", api_key: undefined } }).reply(400, {});
  
    // this will throw an error if it fails, which will mark the test as a failure
    await expect(fetchLocationData("test")).rejects.toThrow();
});
  
it("throws error when the API response changes", async () => {
    // makes `axios` to use the mock instead of making an actual request
    const httpClient = new MockAdapter(axios);
    httpClient.onGet(GEOCODE_API_URL, { params: { q: "test", api_key: undefined } }).reply(200, {});
  
    jest.spyOn(console, 'error').mockImplementation(jest.fn());
    // this will throw an error if it fails, which will mark the test as a failure
    await expect(fetchLocationData("test")).rejects.toThrow();
});
