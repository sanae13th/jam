import Link from "next/link";
import { Container } from "../../src/components/Container";
import { Spacer } from "../../src/components/Spacer";
import { client } from "../../src/lib/client";
import styles from "../../styles/list.module.scss";

export default function Home({ news }) {
	return (
		<Container>
			<h2>ニュース一覧</h2>
			<Spacer size={24} />
			<ul className={styles.wrapper}>
				{news.map((news) => (
					<li key={news.id}>
						<Link href={`/news/${news.id}`}>
							<a>[発売開始] {news.title}</a>
						</Link>
					</li>
				))}
			</ul>
		</Container>
	);
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
	const data = await client.get({ endpoint: "news" });

	return {
		props: {
			news: data.contents,
		},
	};
};
