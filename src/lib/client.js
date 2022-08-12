import { createClient } from "microcms-js-sdk";

export const client = createClient({
	serviceDomain: "sampleblog0824",
	apiKey: process.env.API_KEY,
});
