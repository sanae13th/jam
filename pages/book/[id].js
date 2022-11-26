import { Container } from "../../src/components/Container";
import { Spacer } from "../../src/components/Spacer";
import { client } from "../../src/lib/client";

export default function BlogId({ book }) {
	return (
		<Container>
			<h2>題名: {book.title}</h2>
			<Spacer size={24} />
			<p>執筆者: {book.author}</p>
			<Spacer size={8} />
			<p>発売日: {book.publishedAt}</p>
			<Spacer size={32} />
			<div
				dangerouslySetInnerHTML={{
					__html: `${book.text}`,
				}}
			/>
		</Container>
	);
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
	const data = await client.get({ endpoint: "books", queries: { limit: 100 } });

	const paths = data.contents.map((content) => `/book/${content.id}`);
	return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
	const id = context.params.id;
	const data = await client.get({ endpoint: "books", contentId: id });

	return {
		props: {
			book: data,
		},
	};
};