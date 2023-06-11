import Image from 'next/image';
import styles from './technologyItem.module.scss';
const TechnologyItem = (props) => {
	return (
		<div className={styles.item} {...props}>
			<div className={styles.header}>
				{props.label.charAt(0).toUpperCase() + props.label.slice(1)}
			</div>
			<div className={styles.content}>
				<Image src={props.img} alt={props.alt} width={50} height={50} />
			</div>
		</div>
	);
};

export default TechnologyItem;
