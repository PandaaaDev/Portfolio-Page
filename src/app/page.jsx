import styles from '@/app/home.module.scss';
import LandingPage from '@/components/Templates/LandingPage/LandingPage';
import { Ubuntu_Mono } from 'next/font/google';

const UbuntuMono = Ubuntu_Mono({
	weight: '400',
	subsets: ['latin'],
	variable: '--font-ubuntuMono',
	fallback: ['system-ui', 'arial'],
});
export default function Home() {
	return (
		<>
			<LandingPage />
		</>
	);
}
