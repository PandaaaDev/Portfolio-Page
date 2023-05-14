import styles from './MacWindow.module.scss';
const MacWindow = (props) => {
	return (
		<div  {...props}>
			<div className={styles.nav}>
				<div className={styles.dot}></div>
				<div className={styles.dot}></div>
				<div className={styles.dot}></div>
			</div>
			<div className={styles.window}>{props.children}</div>
		</div>
	);
};

export default MacWindow;
