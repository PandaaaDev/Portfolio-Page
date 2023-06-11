'use client';
import { useId } from 'react';
import styles from './Footer.module.scss';
import { Logo } from '@/components/Atoms/Logo/Logo';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
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
			<nav className={`${styles.container} ${styles.navBar}`}>
				{navigationItems.map((element) => {
					return (
						<Link href={element.link} key={element.id}>
							{element.label}
						</Link>
					);
				})}
			</nav>
			<div className={`${styles.container} ${styles.social}`}>
				<div className={styles.iconContainer}>
					<a href='https://github.com/PandaaaDev' target='_blank'>
						<FontAwesomeIcon icon={faGithub} />
					</a>
				</div>
				<div className={styles.iconContainer}>
					<a
						href='https://www.linkedin.com/in/eryk-juszczak-524b13218/'
						target='_blank'
					>
						<FontAwesomeIcon icon={faLinkedin} />
					</a>
				</div>
			</div>
			<div className={`${styles.container} ${styles.copyright}`}>
				PandaDev 2023
			</div>
		</footer>
	);
};
export default Footer;
