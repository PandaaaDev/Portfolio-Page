import Link from 'next/link';
import styles from './NavLink.module.scss';
const NavLink = ({
	children,
	href,
	nextLink,
	target = '_self',
	handleOnClick,
}) => {
	return (
		<div className={styles.link}>
			{nextLink ? (
				<Link href={href} target={target}>
					{children}
				</Link>
			) : (
				<a href={href} target={target} onClick={handleOnClick}>
					{children}
				</a>
			)}
		</div>
	);
};

export default NavLink;
