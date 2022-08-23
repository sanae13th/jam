import data from "./data.json";
import Fuse from "fuse.js";

const jsonData = [data];

const options = {
	threshold: 0,
	includeMatches: true,
	keys: ["book.title", "news.title"],
};

export const fuse = new Fuse(jsonData, options);
