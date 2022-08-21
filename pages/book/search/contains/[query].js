import Link from "next/link";
import { Container } from "../../../../src/components/Container";
import { Spacer } from "../../../../src/components/Spacer";
import { client } from "../../../../src/lib/client";
import styles from "../../../../styles/list.module.scss";

export default function Home({ books, searchQuery }) {
	return (
		<Container>
			<h2>本の検索結果</h2>
			<div>
				検索ワード: <span className={styles.word}>{searchQuery}</span>
			</div>
			<Spacer size={24} />
			{books.length === 0 ? (
				<div>検索結果は0件です</div>
			) : (
				<ul className={styles.wrapper}>
					{books.map((book) => (
						<li key={book.id}>
							<Link href={`/book/${book.id}`}>
								<a>{book.title}</a>
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
		endpoint: "books",
		queries: { filters: `text[contains]${params.query}`, limit: 100 },
	});

	return {
		props: {
			books: data.contents,
			searchQuery: params.query,
		},
	};
};
