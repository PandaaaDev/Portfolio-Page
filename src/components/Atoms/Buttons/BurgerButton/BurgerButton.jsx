import styles from './BurgerMenu.module.scss';
const BurgerButton = ({ showMenu, handleOnClick }) => {
	return (
		<button
			className={`${styles.burgerMenu} ${
				showMenu ? styles.open : styles.close
			}`}
			onClick={handleOnClick}
		>
			<div className={styles.burgerBar}></div>
			<div className={styles.burgerBar}></div>
			<div className={styles.burgerBar}></div>
		</button>
	);
};

export default BurgerButton;
