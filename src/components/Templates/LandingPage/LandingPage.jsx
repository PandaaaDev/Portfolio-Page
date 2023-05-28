import React from 'react';
import styles from './LandingPage.module.scss';
import Container from '@/components/Atoms/Container/Container';
import MacWindow from '@/components/Organism/MacWindow/MacWindow';
import OverlayLink from '@/components/Atoms/Buttons/OverlayLink';
import { Ubuntu_Mono } from 'next/font/google';
const UbuntuMono = Ubuntu_Mono({
	weight: '400',
	subsets: ['latin'],
	variable: '--font-ubuntuMono',
	fallback: ['system-ui', 'arial'],
});
const links = [{ href: '#aboutme', nextLink: false, text: 'About me' }];
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
					<OverlayLink nextLink={false} href='#aboutme'>
						About me
					</OverlayLink>
					<OverlayLink nextLink={false} href='#projects'>
						Check my work
					</OverlayLink>
					<OverlayLink nextLink={false} href='#contact'>
						Contact me!
					</OverlayLink>
				</div>
			</MacWindow>
		</Container>
	);
};

export default LandingPage;
