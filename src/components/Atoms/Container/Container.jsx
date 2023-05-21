import styles from './Container.module.scss';

const Container = ({ children }) => {
	return (
		<section className={styles.container}>
			<div className={styles.content}>{children}</div>
		</section>
	);
};

export default Container;
