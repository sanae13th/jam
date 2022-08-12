import Link from "next/link";
// import { client } from "../src/lib/client";

export default function Home() {
	return (
		<div>
			<Link href={`/blog`}>
				<a>ブログ一覧へ</a>
			</Link>
			<Link href={`/news`}>
				<a>ニュース一覧へ</a>
			</Link>
		</div>
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
