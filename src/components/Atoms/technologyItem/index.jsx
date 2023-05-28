import Image from 'next/image';
import styles from './index.module.scss';
const technologyItem = ({ label, img, action }) => {
	return (
		<div className={styles.item}>
			<div className={styles.header}>{label}</div>
			some text in development
			<div className={styles.content} onClick={action}>
				{/* <Image src={img.src} alt={img.alt} /> */}
			</div>
		</div>
	);
};

export default technologyItem;
