import Image from 'next/image';
import styles from './technologyItem.modules.scss';
const TechnologyItem = ({ label, action, img, alt }) => {
	return (
		<div className={styles.item} onClick={action}>
			<div className={styles.header}>
				{label.charAt(0).toUpperCase() + label.slice(1)}
			</div>
			<div className={styles.content}>
				<Image src={img} alt={alt} width={50} height={50} />
			</div>
		</div>
	);
};

export default TechnologyItem;
