import { createClient } from "microcms-js-sdk";
import dotenv from "dotenv";

dotenv.config();

export const client = createClient({
	serviceDomain: "sampleblog0824",
	apiKey: process.env.API_KEY,
});
