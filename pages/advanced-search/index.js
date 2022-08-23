import Link from "next/link";
import { jsonData } from "../../src/assets/data";
import { Container } from "../../src/components/Container";
import { Spacer } from "../../src/components/Spacer";
import styles from "../../styles/list.module.scss";
import Fuse from "fuse.js";

export default function Home() {
	const options = {
		threshold: 0,
		includeMatches: true,
		keys: ["book.title", "news.title"],
	};

	const fuse = new Fuse(jsonData, options);
	const result = fuse.search("");
	// const data = dataRaw[0];
	// const dataLength = data?.matches.length || 0;
	// const dataList = () => {
	// 	if (!data) return { news: "", books: "" };
	// 	const bookArr = data.matches.filter(
	// 		(content) => content.key === "book.title"
	// 	);
	// 	const newsArr = data.matches.filter(
	// 		(content) => content.key === "news.title"
	// 	);
	// 	const news = newsArr.map((content) => data.item.news[content.refIndex]);
	// 	const books = bookArr.map((content) => data.item.book[content.refIndex]);
	// 	return { news, books };
	// };
	// const { news, books } = dataList();

	return (
		<Container>
			<h2>高度な検索</h2>
			<div>
				検索ワード: <span className={styles.word}>{}</span>
			</div>
			<Spacer size={24} />
			<h3>検索結果</h3>
			<div>検索結果は{}件です</div>
			{/* <Spacer size={24} />
			<h3>本の検索結果</h3>
			<div>検索結果は{books.length}件です</div>
			<ul className={styles.wrapper}>
				{books &&
					books.map((data) => (
						<li key={data.id}>
							<Link href={`/book/${data.id}`}>
								<a>[book title] {data.title}</a>
							</Link>
						</li>
					))}
			</ul> */}
			<Link href="/">
				<a>TOPへ</a>
			</Link>
		</Container>
	);
}
