'use client';
import Link from 'next/link';
import { useId } from 'react';
import styles from './nav.module.scss';
const NavList = ({ showMenu, toUpperCase }) => {
	const navigationItems = [
		{
			id: useId(),
			label: 'home',
			link: '/',
			newPage: true,
			isActive: false,
			dropdown: false,
		},
		{
			id: useId(),
			label: 'technology',
			link: '/',
			newPage: false,
			isActive: false,
			dropdown: false,
		},
		{
			id: useId(),
			label: 'projects',
			link: '/',
			newPage: false,
			isActive: false,
			dropdown: false,
		},
		{
			id: useId(),
			label: 'comercial experience',
			link: '/',
			newPage: false,
			isActive: false,
			dropdown: false,
		},
		{
			id: useId(),
			label: 'my values',
			link: '/',
			newPage: false,
			isActive: false,
			dropdown: false,
		},
		{
			id: useId(),
			label: 'contact',
			link: '/',
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
									: Array.from(element.label)[0] + element.label.substring(1)}
							</Link>
						) : (
							<a href={element.link}>
								{toUpperCase
									? element.label.toUpperCase()
									: Array.from(element.label)[0] + element.label.substring(1)}
							</a>
						)}
					</div>
				);
			})}
		</div>
	);
};
export default NavList;
