import { z } from "zod" // eslint-disable-line

// TypeScript-first schema validation with static type inference
// https://zod.dev/
export const locationInfoSchema = z.object({
    lat: z.string(),
    lon: z.string(),
    display_name: z.string(),
});

// extract the TypeScript type of any schema with infer
export type LocationInfo = z.infer<typeof locationInfoSchema>;
