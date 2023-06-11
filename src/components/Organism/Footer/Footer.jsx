'use client';
import { useId } from 'react';
import styles from './Footer.module.scss';
import { Logo } from '@/components/Atoms/Logo/Logo';
import NavLink from '@/components/Atoms/Buttons/NavLink/NavLink';
const Footer = () => {
	const navigationItems = [
		{
			id: useId(),
			label: 'home',
			link: '#home',
			sameOriginPage: true,
			newPage: false,
			target: '_blank',
			isActive: false,
		},
		{
			id: useId(),
			label: 'about me',
			link: '#aboutme',
			sameOriginPage: true,
			newPage: false,
			target: '_blank',
			isActive: false,
		},
		{
			id: useId(),
			label: 'experience',
			link: '#experience',
			sameOriginPage: true,
			newPage: false,
			target: '_blank',
			isActive: false,
		},
		{
			id: useId(),
			label: 'contact',
			link: '#contact',
			sameOriginPage: true,
			newPage: false,
			target: '_blank',
			isActive: false,
		},
	];

	return (
		<footer className={styles.footer}>
			<div className={`${styles.container} ${styles.logoContainer}`}>
				<Logo URL='/' text='Panda<span>Dev</span>' />
			</div>
			<nav className={`${styles.container} ${styles.nav}`}>
				{navigationItems.map((element) => {
					return (
						<NavLink
							href={element.link}
							key={element.id}
							nextLink={element.newPage}
						>
							{element.label}
						</NavLink>
					);
				})}
			</nav>
			<div className={`${styles.container} ${styles.social}`}>

			</div>
			<div className={`${styles.container} ${styles.copyright}`}>
				PandaDev 2023
			</div>
		</footer>
	);
};
export default Footer;
