import Link from "next/link";
import { Container } from "../src/components/Container";
import { client } from "../src/lib/client";

export default function Home({ books }) {
	console.log(books);
	return (
		<main>
			<Container>
				{books.map((book) => {
					return (
						<Link href={`book/${book.id}`} key={book.id}>
							{book.title}
						</Link>
					);
				})}
			</Container>
		</main>
	);
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
	const data = await client.get({
		endpoint: "books",
		queries: { limit: 100 },
	});

	return {
		props: {
			books: data.contents,
		},
	};
};