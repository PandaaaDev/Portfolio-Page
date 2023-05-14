import MacWindow from '@/components/MacWindow/MacWindow';
import styles from '@/app/home.module.scss';
import { Ubuntu_Mono } from 'next/font/google';
const UbuntuMono = Ubuntu_Mono({
	weight: '400',
	subsets: ['latin'],
	variable: '--font-ubuntuMono',
	fallback: ['system-ui', 'arial'],
});
export default function Home() {
	return (
		<div>
			<MacWindow className={`${styles.windowLayout} ${UbuntuMono.className}`}>
				<h1>Hello World!</h1>
				<p>My Name is Eryk Juszczak</p>
				<p>
					I am a software engineer with specialisation in web application
					development.
				</p>
				<a className={styles.checkoutlink} href='#projects'>
					Check out my work!
				</a>
			</MacWindow>

			{/* <MacWindow id='technology' className={styles.windowLayout}></MacWindow> */}
		</div>
	);
}
