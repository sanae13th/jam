import Link from "next/link";
import { client } from "../../src/lib/client";

export default function Home({ books }) {
	return (
		<div>
			<ul>
				{books.map((book) => (
					<li key={book.id}>
						<Link href={`/book/${book.id}`}>
							<a>{book.title}</a>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
	const data = await client.get({ endpoint: "books" });

	return {
		props: {
			books: data.contents,
		},
	};
};
