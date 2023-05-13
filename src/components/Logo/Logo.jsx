import Link from 'next/link';
import styles from './Logo.module.scss';
export const Logo = ({ URL, useImg, logoFile, text }) => {
	return (
		<div className={styles.wrapper}>
			<Link className={styles.logo} href={URL}>
				{useImg ? (
					<div dangerouslySetInnerHTML={{ __html: logoFile }} />
				) : (
					<div dangerouslySetInnerHTML={{ __html: text }} />
				)}
			</Link>

		</div>
	);
};
