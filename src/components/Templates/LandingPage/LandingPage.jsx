import React from 'react';
import styles from './LandingPage.module.scss';
import Container from '@/components/Organism/Container/Container';
import MacWindow from '@/components/Organism/MacWindow/MacWindow';
import { Ubuntu_Mono } from 'next/font/google';
const UbuntuMono = Ubuntu_Mono({
	weight: '400',
	subsets: ['latin'],
	variable: '--font-ubuntuMono',
	fallback: ['system-ui', 'arial'],
});
const LandingPage = () => {
	return (
		<Container>
			<MacWindow
				className={`${styles.windowLayout} ${UbuntuMono.className} ${styles.landingPage}`}
			>
				<div className={styles.wrapper}>
					<h1>Hello World!</h1>
					<p>My Name is Eryk Juszczak</p>
					<p>
						I am a software engineer with specialisation in web application
						development.
					</p>
				</div>

				<div className={styles.linkContiner}>
					<a className={styles.link} href='#aboutme'>
						About me
					</a>
					<a className={styles.link} href='#projects'>
						Check my work
					</a>
					<a className={styles.link} href='#projects'>
						Contact me!
					</a>
				</div>
			</MacWindow>
		</Container>
	);
};

export default LandingPage;
