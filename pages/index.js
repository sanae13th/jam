import Link from "next/link";
import { Container } from "../src/components/Container";
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
			</Container>
		</main>
	);
}
