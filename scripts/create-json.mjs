import fs from "fs";
import { client } from "./client.mjs";

(async () => {
	const book = await client.get({ endpoint: "books", queries: { limit: 100 } });
	const news = await client.get({ endpoint: "news", queries: { limit: 100 } });
	const data = {
		book: book.contents,
		news: news.contents,
	};
	const JSONdata = JSON.stringify(data, null, 2);
	fs.writeFileSync("./src/assets/data.json", JSONdata);
})();
