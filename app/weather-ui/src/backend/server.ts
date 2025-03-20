import path from "path";
import formBody from "@fastify/formbody"; // eslint-disable-line
import staticFiles from "@fastify/static"; // eslint-disable-line
import dotenv from "dotenv"; // eslint-disable-line
import { fastify as fastify_fastify } from "fastify"; // eslint-disable-line
import nunjucks from "nunjucks"; // eslint-disable-line
import { z } from "zod"; // eslint-disable-line
import { weatherCodeToImage } from "./constants";
import { fetchLocationData } from "./location";
import { fetchWeatherData } from "./weatherapi";

dotenv.config();

const environment = process.env.NODE_ENV;
const templates = new nunjucks.Environment(new nunjucks.FileSystemLoader("src/backend/templates"));

const server = fastify_fastify({
    logger: true,
});

// setup middlewares
{
    // process forms
    server.register(formBody);
  
    // serve static files
    server.register(staticFiles, {
        root: path.join(__dirname, '../../dist'),
    });
}

server.get("/", async (request, reply) => {
    const locationSchema = z.object({
        location: z.string(),
    });
    const queryParams = request.query;
    try {
        const { location } = locationSchema.parse(queryParams);
        const locationInfo = await fetchLocationData(location); // eslint-disable-line
        const weatherInfo = await fetchWeatherData(locationInfo.lat, locationInfo.lon); // eslint-disable-line

        const rendered = templates.render("weather.njk", {
            environment,
            location: locationInfo.display_name,
            currentDate: new Date().toDateString(),
            weather: {
                ...weatherInfo,
                conditionImg: weatherCodeToImage(weatherInfo.weathercode),
                condition: weatherInfo.condition(),
                lowTemp: weatherInfo.lowTemp(),
                highTemp: weatherInfo.highTemp(),
            }
        });
        await reply
            .header("Content-Type", "text/html; charset=utf-8")
            .send(rendered);
    } catch (err) {
        console.error(err);
        const rendered = templates.render("get_started.njk", { environment, });
        await reply
            .header("Content-Type", "text/html; charset=utf-8")
            .send(rendered);
    }
});

const start = async (): Promise<void> => {
    try {
        await server.listen({ port: 8089 });
    } catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};

start();
