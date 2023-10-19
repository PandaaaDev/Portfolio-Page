'use client';
import Link from 'next/link';
import { useId } from 'react';
import styles from './NavList.module.scss';
import NavLink from '@/components/Atoms/Buttons/NavLink/NavLink';
const NavList = ({ showMenu, toUpperCase, handleOnClick }) => {
	// Need to redesign this
	const navigationItems = [
		{
			id: useId(),
			label: 'home',
			link: '/',
			sameOriginPage: true,
			newPage: true,
			target: '_blank',
			isActive: false,
		},
		{
			id: useId(),
			label: 'about me',
			link: '/aboutme',
			sameOriginPage: true,
			newPage: true,
			target: '_blank',
			isActive: false,
		},
		// {
		// 	id: useId(),
		// 	label: 'experience',
		// 	link: '/experience',
		// 	sameOriginPage: true,
		// 	newPage: true,
		// 	target: '_blank',
		// 	isActive: false,
		// },
		{
			id: useId(),
			label: 'contact',
			link: '/contact',
			sameOriginPage: true,
			newPage: true,
			target: '_blank',
			isActive: false,
		},
	];
	return (
		<div className={`${styles.navbarList} ${showMenu && styles.show}`}>
			{navigationItems.map((element) => {
				return (
					<NavLink
						href={element.link}
						key={element.id}
						handleOnClick={handleOnClick}
						nextLink={element.newPage}
					>
						{element.label.charAt(0).toUpperCase() + element.label.slice(1)}
					</NavLink>
				);
			})}
		</div>
	);
};
export default NavList;
