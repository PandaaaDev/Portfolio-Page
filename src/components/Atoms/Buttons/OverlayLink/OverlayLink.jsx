import styles from './OveralyLink.module.scss';
import Link from 'next/link';
const OverlayLink = ({ href, children, nextLink, target = '_self' }) => {
	return (
		<>
			{nextLink ? (
				<Link className={styles.link} href={href} target={target}>
					{children}
				</Link>
			) : (
				<a className={styles.link} href={href} target={target}>
					{children}
				</a>
			)}
		</>
	);
};

export default OverlayLink;
