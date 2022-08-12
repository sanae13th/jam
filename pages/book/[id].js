import { client } from "../../src/lib/client";

export default function BlogId({ book }) {
	return (
		<main>
			<h1>{book.title}</h1>
			<p>{book.author}</p>
			<p>{book.publishedAt}</p>
			<div
				dangerouslySetInnerHTML={{
					__html: `${book.text}`,
				}}
			/>
		</main>
	);
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
	const data = await client.get({ endpoint: "books" });

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
