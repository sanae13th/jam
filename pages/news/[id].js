import { Container } from "../../src/components/Container";
import { Spacer } from "../../src/components/Spacer";
import { client } from "../../src/lib/client";

export default function NewsId({ news }) {
	return (
		<Container>
			<h2>{news.title}</h2>
			<Spacer size={8} />
			<p>{news.publishedAt}</p>
			<Spacer size={8} />
			<div
				dangerouslySetInnerHTML={{
					__html: `${news.author}`,
				}}
			/>
		</Container>
	);
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
	const data = await client.get({ endpoint: "news" });

	const paths = data.contents.map((content) => `/news/${content.id}`);
	return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
	const id = context.params.id;
	const data = await client.get({ endpoint: "news", contentId: id });

	return {
		props: {
			news: data,
		},
	};
};
