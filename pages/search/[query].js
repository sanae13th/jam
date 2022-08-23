import Link from "next/link";
import { fuse } from "../../src/assets/data";
import { Container } from "../../src/components/Container";
import { Spacer } from "../../src/components/Spacer";
import styles from "../../styles/list.module.scss";

export default function Home({ data, searchQuery }) {
	const result = fuse.search(searchQuery);
	console.log(searchQuery, result, "hogeeeee");

	// console.log(data);
	return (
		<Container>
			<h2>fusejs検索結果</h2>
			<div>
				検索ワード: <span className={styles.word}>{searchQuery}</span>
			</div>
			<Spacer size={24} />
			<h3>検索結果</h3>
			{/* <div>検索結果は{data.length}件です</div>
			<ul className={styles.wrapper}>
				{data.map((data) => (
					<li key={data.id}>
						<Link href={`/books/${data.id}`}>
							<a>[title] {data.title}</a>
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

export const getStaticPaths = async () => {
	return {
		paths: [],
		fallback: "blocking",
	};
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async ({ params }) => {
	const result = fuse.search("ho");

	return {
		props: {
			data: result,
			searchQuery: params.query,
		},
	};
};
