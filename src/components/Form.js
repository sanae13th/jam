import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../../styles/form.module.scss";

export const Form = ({ category, type }) => {
	const [value, setValue] = useState("");
	const router = useRouter();
	const onChange = (event) => {
		setValue(event.target.value);
	};
	const onClick = (event) => {
		event.preventDefault();
		router.push(`/${category}/search/${type}/${value}`);
	};
	return (
		<form className={styles.form}>
			<label htmlFor={`${category}_${type}`}>{type} 検索</label>
			<input
				type="text"
				placeholder="文字入力"
				onChange={onChange}
				id={`${category}_${type}`}
			/>
			<button onClick={onClick}>検索</button>
		</form>
	);
};
