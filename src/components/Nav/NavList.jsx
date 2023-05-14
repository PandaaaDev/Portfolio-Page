'use client';
import Link from 'next/link';
import { useId } from 'react';
import styles from './nav.module.scss';
const NavList = ({ showMenu, toUpperCase, handleOnClick }) => {
	const navigationItems = [
		{
			id: useId(),
			label: 'home',
			link: '#home',
			newPage: false,
			isActive: false,
			dropdown: false,
		},
		{
			id: useId(),
			label: 'technology',
			link: '#technology',
			newPage: false,
			isActive: false,
			dropdown: false,
		},
		{
			id: useId(),
			label: 'projects',
			link: '',
			newPage: false,
			isActive: false,
			dropdown: false,
		},
		{
			id: useId(),
			label: 'experience',
			link: '',
			newPage: false,
			isActive: false,
			dropdown: false,
		},
		{
			id: useId(),
			label: 'my values',
			link: '',
			newPage: false,
			isActive: false,
			dropdown: false,
		},
		{
			id: useId(),
			label: 'contact',
			link: '',
			newPage: false,
			isActive: false,
			dropdown: false,
		},
	];
	return (
		<div className={`${styles.navbarList} ${showMenu && styles.show}`}>
			{navigationItems.map((element) => {
				return (
					<div
						key={element.id}
						className={
							element.isActive
								? `${styles.navItem} ${styles.active} `
								: styles.navItem
						}
					>
						{element.newPage ? (
							<Link href={element.link}>
								{toUpperCase
									? element.label.toUpperCase()
									: Array.from(element.label)[0].toUpperCase() +
									  element.label.substring(1)}
							</Link>
						) : (
							<a href={element.link} onClick={handleOnClick}>
								{toUpperCase
									? element.label.toUpperCase()
									: Array.from(element.label)[0].toUpperCase() +
									  element.label.substring(1)}
							</a>
						)}
					</div>
				);
			})}
		</div>
	);
};
export default NavList;
