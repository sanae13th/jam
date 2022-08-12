import styles from "../../styles/container.module.scss";

export const Container = ({ children }) => {
	return <div className={styles.main}>{children}</div>;
};
