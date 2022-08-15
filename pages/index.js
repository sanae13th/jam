import Link from "next/link";
import { Container } from "../src/components/Container";
import { Spacer } from "../src/components/Spacer";
// import { client } from "../src/lib/client";

export default function Home() {
	return (
		<main>
			<Container>
				<h2>本の紹介サイト</h2>
				<Spacer size={24} />
				<Link href={`/book`}>
					<a>本一覧へ</a>
				</Link>
				<Spacer size={16} />
				<Link href={`/news`}>
					<a>ニュース一覧へ</a>
				</Link>
				<Spacer size={40} />
				{/* TODO: 検索設置A 通常全文検索 */}
				{/* TODO: 検索設置B 複数API検索 */}
				{/* TODO: 検索設置C fusejs */}
			</Container>
		</main>
	);
}

// // データをテンプレートに受け渡す部分の処理を記述します
// export const getStaticProps = async () => {
// 	const data = await client.get({ endpoint: "blogs" });

// 	return {
// 		props: {
// 			blog: data.contents,
// 		},
// 	};
// };
