import Link from "next/link";
import { Container } from "../../../../src/components/Container";
import { Spacer } from "../../../../src/components/Spacer";
import { client } from "../../../../src/lib/client";
import styles from "../../../../styles/list.module.scss";

export default function Home({ news, searchQuery }) {
	return (
		<Container>
			<h2>ニュース検索結果</h2>
			<div>
				検索ワード: <span className={styles.word}>{searchQuery}</span>
			</div>
			<Spacer size={24} />
			{news.length === 0 ? (
				<div>検索結果は0件です</div>
			) : (
				<ul className={styles.wrapper}>
					{news.map((news) => (
						<li key={news.id}>
							<Link href={`/news/${news.id}`}>
								<a>[発売開始] {news.title}</a>
							</Link>
						</li>
					))}
				</ul>
			)}
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
	const data = await client.get({
		endpoint: "news",
		queries: { filters: `title[contains]${params.query}`, limit: 100 },
	});

	return {
		props: {
			news: data.contents,
			searchQuery: params.query,
		},
	};
};
