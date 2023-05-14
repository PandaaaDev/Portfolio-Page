import styles from './Container.module.scss';

const Container = ({ children }) => {
	return (
		<main className={styles.container} id='home'>
			<div className={styles.content}>{children}</div>
		</main>
	);
};

export default Container;
