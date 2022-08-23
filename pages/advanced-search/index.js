import Link from "next/link";
import { jsonData } from "../../src/assets/data";
import { Container } from "../../src/components/Container";
import { Spacer } from "../../src/components/Spacer";
import styles from "../../styles/advanced.module.scss";
import Fuse from "fuse.js";
import { useState } from "react";

export default function Home() {
	const [isNews, setIsNews] = useState(false);
	const [isBook, setIsBook] = useState(false);
	const [keyword, setKeyword] = useState("");
	const [match, setMatch] = useState(1);
	const [result, setResult] = useState(0);
	const bookTitle = "book.title";
	const newsTitle = "news.title";
	const options = {
		threshold: match,
		includeMatches: true,
		keys: [`${isBook ? bookTitle : null}`, `${isNews ? newsTitle : null}`],
	};

	const onChangeNews = () => {
		setIsNews((prev) => !prev);
		const optionsIn = {
			threshold: match,
			includeMatches: true,
			keys: [`${isBook ? bookTitle : null}`, `${!isNews ? newsTitle : null}`],
		};
		const fuse = new Fuse(jsonData, optionsIn);
		setResult(() => fuse.search(keyword));
	};
	const onChangeBook = () => {
		setIsBook((prev) => !prev);
		const optionsIn = {
			threshold: match,
			includeMatches: true,
			keys: [`${!isBook ? bookTitle : null}`, `${isNews ? newsTitle : null}`],
		};
		const fuse = new Fuse(jsonData, optionsIn);
		setResult(() => fuse.search(keyword));
	};
	const onChangeKeyword = (e) => {
		setKeyword(() => e.target.value);
		const fuse = new Fuse(jsonData, options);
		setResult(() => fuse.search(e.target.value));
	};
	const onChangeMatch = (e) => {
		setMatch(() => 1 - e.target.value);
		const optionsIn = {
			threshold: 1 - e.target.value,
			includeMatches: true,
			keys: [`${isBook ? bookTitle : null}`, `${isNews ? newsTitle : null}`],
		};
		const fuse = new Fuse(jsonData, optionsIn);
		setResult(() => fuse.search(keyword));
	};

	const data = result[0];
	const dataLength = data?.matches.length || 0;
	const dataList = () => {
		if (!data) return { news: "", books: "" };
		const bookArr = data.matches.filter(
			(content) => content.key === "book.title"
		);
		const newsArr = data.matches.filter(
			(content) => content.key === "news.title"
		);
		const news = newsArr.map((content) => data.item.news[content.refIndex]);
		const books = bookArr.map((content) => data.item.book[content.refIndex]);
		return { news, books };
	};
	const { news, books } = dataList();

	return (
		<Container>
			<h2>検索 + アルファ</h2>
			<div>
				検索ワード: <span className={styles.word}>{keyword}</span>
			</div>
			<Spacer size={24} />
			<h3>検索結果</h3>
			<div>検索結果は{dataLength}件です</div>
			<form className={styles.form}>
				<div className={styles.formWrapper}>
					<label htmlFor="keyword">検索キーワード</label>
					<input
						type="text"
						placeholder="keyword"
						id="keyword"
						onChange={onChangeKeyword}
					/>
					<div>
						<label htmlFor="book">book</label>
						<input type="checkbox" id="book" onChange={onChangeBook} />
						<Spacer size={8} />
						<label htmlFor="news">news</label>
						<input type="checkbox" id="news" onChange={onChangeNews} />
					</div>
					<label htmlFor="match">一致度(高いほど完全一致に近づく)</label>
					<input
						type="range"
						id="match"
						min="0"
						max="1"
						step="0.01"
						onChange={onChangeMatch}
						defaultValue={0}
					/>
				</div>
			</form>
			<Spacer size={24} />
			<section className={styles.result}>
				<div>
					<div>
						<h3>bookの検索結果</h3>
						<div>検索結果は{books.length}件です</div>
					</div>
					<ul className={styles.wrapper}>
						{books &&
							books.map((data) => (
								<li key={data.id}>
									<Link href={`/book/${data.id}`}>
										<a>[book title] {data.title}</a>
									</Link>
								</li>
							))}
					</ul>
				</div>
				<Spacer size={24} />
				<div>
					<div>
						<h3>newsの検索結果</h3>
						<div>検索結果は{news.length}件です</div>
					</div>
					<ul className={styles.wrapper}>
						{news &&
							news.map((data) => (
								<li key={data.id}>
									<Link href={`/news/${data.id}`}>
										<a>[news title] {data.title}</a>
									</Link>
								</li>
							))}
					</ul>
				</div>
			</section>
		</Container>
	);
}
