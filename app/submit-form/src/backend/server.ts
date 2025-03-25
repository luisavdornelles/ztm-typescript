// Required disables so that tutorial is followed
/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/return-await */
import path from "path";
import cookie from "@fastify/cookie";
import formBody from "@fastify/formbody";
import staticFiles from "@fastify/static";
import dotenv from "dotenv";
import Fastify from "fastify";
import nunjucks from "nunjucks";
import { z } from "zod";
import { connect, newDb, SqliteUserRepository } from "./db";

dotenv.config();

const environment = process.env.NODE_ENV;
const cookieSecret = process.env.COOKIE_SECRET;
if (cookieSecret === undefined) {
    console.error("must set COOKIE_SECRET environment variable");
    process.exit(1);
}

const templates = new nunjucks.Environment(new nunjucks.FileSystemLoader("src/backend/templates"));
const USERS_DB = "./users.sqlite";

const accountCreateRequestSchema = z.object({
    email: z.string(),
    password: z.string(),
    agreedToTerms: z.string().optional(),
});
  
type AccountCreateRequest = z.infer<typeof accountCreateRequestSchema>;

const fastify = Fastify({
    logger: true,
});

// middlewares
{
    // process forms
    fastify.register(formBody);
  
    // enable cookies
    fastify.register(cookie, {
        secret: cookieSecret,
    });
  
    // serve static files
    fastify.register(staticFiles, {
        root: path.join(__dirname, "../../dist"),
    });
}

fastify.get("/", async (request, reply) => {
    await reply.redirect("/signin");
});

fastify.get("/signin", async (request, reply) => {
    const rendered = templates.render("signin.njk", { environment });
    return await reply
        .header("Content-Type", "text/html; charset=utf-8")
        .send(rendered);
});

fastify.get("/signup", async (request, reply) => {
    const rendered = templates.render("signup.njk", { environment });
    return await reply
        .header("Content-Type", "text/html; charset=utf-8")
        .send(rendered);
});

fastify.post("/account/signup", async (request, reply) => {
    let requestData: AccountCreateRequest;
    try {
        requestData = accountCreateRequestSchema.parse(request.body);
    } catch (e) {
        return await reply.redirect("/signup");
    }

    if (requestData.agreedToTerms !== "on") {
        return await reply.redirect("/signup");
    }

    const db = await connect(USERS_DB);
    const userRepository = new SqliteUserRepository(db);

    try {
        const newUser = {
            ...requestData,
            id: 0, // database will set appropriate ID number
            agreedToTerms: true,
            hashedPassword: "FIXME",
        };
        const user = await userRepository.create(newUser);
        return await reply.redirect("/welcome");
    } catch (e) {
        return await reply.redirect("/signup");
    }
});

const start = async (): Promise<void> => {
    try {
        const db = await connect(USERS_DB);
        newDb(db);
    
        await fastify.listen({ port: 8089 });
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};
  
start();
