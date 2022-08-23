import Link from "next/link";
import { Container } from "../../src/components/Container";
import { Spacer } from "../../src/components/Spacer";
import { client } from "../../src/lib/client";
import styles from "../../styles/list.module.scss";

export default function Home({ news, books, searchQuery }) {
	return (
		<Container>
			<h2>複合検索結果(contains)</h2>
			<div>
				検索ワード: <span className={styles.word}>{searchQuery}</span>
			</div>
			<Spacer size={24} />
			<h3>本の検索結果</h3>
			<div>検索結果は{books.length}件です</div>
			<ul className={styles.wrapper}>
				{books.map((books) => (
					<li key={books.id}>
						<Link href={`/book/${books.id}`}>
							<a>[title] {books.title}</a>
						</Link>
					</li>
				))}
			</ul>
			<Spacer size={24} />
			<h3>ニュースの検索結果</h3>
			<div>検索結果は{news.length}件です</div>
			<ul className={styles.wrapper}>
				{news.map((news) => (
					<li key={news.id}>
						<Link href={`/news/${news.id}`}>
							<a>[発売開始] {news.title}</a>
						</Link>
					</li>
				))}
			</ul>
			<Link href="/">
				<a>TOPへ</a>
			</Link>
		</Container>
	);
}

export const getStaticPaths = async () => {
	return {
		paths: [],
		fallback: "blocking",
	};
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async ({ params }) => {
	const book = await client.get({
		endpoint: "books",
		queries: { filters: `title[contains]${params.query}`, limit: 100 },
	});
	const news = await client.get({
		endpoint: "news",
		queries: { filters: `title[contains]${params.query}`, limit: 100 },
	});

	return {
		props: {
			books: book.contents,
			news: news.contents,
			searchQuery: params.query,
		},
	};
};
