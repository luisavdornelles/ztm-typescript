// The following ESLint rules are disabled intentionally to align with the tutorial's approach.
// Note: Some best practices may not be followed as this code is designed for educational purposes.
/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/return-await */
import fp from "fastify-plugin";
import type { FastifyPluginCallback, FastifyReply, FastifyRequest } from "fastify";

export const FLASH_MSG_COOKIE = "flash";

const pluginCallback: FastifyPluginCallback = (fastify, _options, next) => {
    fastify.addHook("onRequest",
        async (_request: FastifyRequest, reply: FastifyReply) => {
            await reply.setCookie(FLASH_MSG_COOKIE, "", {
                path: "/",
            });
    })
    next();
}

export const clearFlashCookie = fp(pluginCallback);
