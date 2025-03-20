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
