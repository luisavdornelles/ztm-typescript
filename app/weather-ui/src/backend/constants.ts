export const weatherCodeToImage = (code: number): string => {
    switch (code) {
        case 0: return "/static/img/clear.svg";
        case 1: return "/static/img/clear.svg";
        case 2: return "/static/img/cloudy.svg";
        case 3: return "/static/img/overcast.svg";
        case 45: return "/static/img/fog.svg";
        case 48: return "/static/img/fog.svg";
        case 51: return "/static/img/drizzle.svg";
        case 53: return "/static/img/drizzle.svg";
        case 55: return "/static/img/drizzle.svg";
        case 56: return "/static/img/drizzle.svg";
        case 57: return "/static/img/drizzle.svg";
        case 61: return "/static/img/rain.svg";
        case 63: return "/static/img/rain.svg";
        case 65: return "/static/img/rain.svg";
        case 66: return "/static/img/rain.svg";
        case 67: return "/static/img/rain.svg";
        case 71: return "/static/img/snow.svg";
        case 73: return "/static/img/snow.svg";
        case 75: return "/static/img/snow.svg";
        case 77: return "/static/img/snow.svg";
        case 80: return "/static/img/rain.svg";
        case 81: return "/static/img/rain.svg";
        case 82: return "/static/img/rain.svg";
        case 85: return "/static/img/snow.svg";
        case 86: return "/static/img/snow.svg";
        case 95: return "/static/img/thunderstorm.svg";
        case 96: return "/static/img/thunderstorm.svg";
        case 99: return "/static/img/thunderstorm.svg";
        default: return "/static/img/info.svg";
    }
};

export const weatherCodes: Record<number, string> = {
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

export const GEOCODE_API_URL = "https://geocode.maps.co/search";
// Free API key, safe to save in repo
export const API_KEY = "67d9c11706027690288422sae27514a";

export const WEATHER_API_URL = "https://api.open-meteo.com/v1/forecast";

export const SAMPLE_API_RESPONSE_GEO = [
    {
        place_id: 287781008,
        licence: 'Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright',
        powered_by: 'Map Maker: https://maps.co',
        osm_type: 'relation',
        osm_id: 207359,
        boundingbox: [Array],
        lat: '34.0536909',
        lon: '-118.242766',
        display_name: 'Los Angeles, Los Angeles County, California, United States',
        class: 'boundary',
        type: 'administrative',
        importance: 0.9738053728457621
    },
    {
        place_id: 259239981,
        licence: 'Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright',
        powered_by: 'Map Maker: https://maps.co',
        osm_type: 'way',
        osm_id: 807458549,
        boundingbox: [Array],
        lat: '34.0708781',
        lon: '-118.44684973165106',
        display_name: 'University of California, Los Angeles, Bellagio Road, Bel Air, Bel-Air, Los Angeles, Los Angeles County, California, 90049, United States',
        class: 'amenity',
        type: 'university',
        importance: 0.8181396344174214
    },
];

export const SAMPLE_API_RESPONSE_WEATHER = {
    latitude: 36.16438,
    longitude: -115.143936,
    generationtime_ms: 0.23496150970458984,
    utc_offset_seconds: 0,
    timezone: 'GMT',
    timezone_abbreviation: 'GMT',
    elevation: 620,
    current_weather: {
        temperature: 30.7,
        windspeed: 15.3,
        winddirection: 27,
        weathercode: 0,
        is_day: 1,
        time: '2023-05-13T18:00'
    },
    hourly_units: { time: 'iso8601', temperature_2m: '°C' },
    hourly: {
        time: [
            '2023-05-13T00:00', '2023-05-13T01:00',
            '2023-05-13T02:00', '2023-05-13T03:00',
            '2023-05-13T04:00', '2023-05-13T05:00',
            '2023-05-13T06:00', '2023-05-13T07:00',
            '2023-05-13T08:00', '2023-05-13T09:00',
            '2023-05-13T10:00', '2023-05-13T11:00',
            '2023-05-13T12:00', '2023-05-13T13:00',
            '2023-05-13T14:00', '2023-05-13T15:00',
            '2023-05-13T16:00', '2023-05-13T17:00',
            '2023-05-13T18:00', '2023-05-13T19:00',
            '2023-05-13T20:00', '2023-05-13T21:00',
            '2023-05-13T22:00', '2023-05-13T23:00'
        ],
        temperature_2m: [
            32.5, 32.1, 30.9, 28.7, 27.4,
            26.4, 26, 26.1, 26, 24.7,
            24.2, 23.8, 24, 23.3, 24.1,
            25.7, 27.2, 28.6, 30.7, 31.6,
            32.3, 33.4, 33.5, 33.5
        ]
    }
}
