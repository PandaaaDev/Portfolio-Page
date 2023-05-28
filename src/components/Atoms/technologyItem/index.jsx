import Image from 'next/image';
import styles from './index.module.scss';
// Props
// Label String
// Action function
// img object! With (keys) src and alt :D
const TechnologyItem = ({ label, action, img, alt }) => {
	return (
		<div className={styles.item} onClick={action}>
			<div className={styles.header}>
				{label.charAt(0).toUpperCase() + label.slice(1)}
			</div>
			<div className={styles.content}>
				<Image src={img} alt={alt} />
			</div>
		</div>
	);
};

export default TechnologyItem;
