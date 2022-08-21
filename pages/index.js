import Link from "next/link";
import { Container } from "../src/components/Container";
import { Form } from "../src/components/Form";
import { Spacer } from "../src/components/Spacer";

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
				<section>
					<h3>microCMS検索</h3>
					<section>
						<h4>本の検索</h4>
						<Spacer size={16} />
						<Form category="book" type="q" />
						<Form category="book" type="contains" />
					</section>
					<Spacer size={24} />
					<section>
						<h4>ニュースの検索</h4>
						<Spacer size={16} />
						<Form category="news" type="q" />
						<Form category="news" type="contains" />
					</section>
					<Spacer size={24} />
					<section>
						<h4>複合</h4>
						<Spacer size={16} />
						<Form category="" type="contains" />
					</section>
				</section>
				{/* TODO: 検索設置C fusejs */}
			</Container>
		</main>
	);
}
