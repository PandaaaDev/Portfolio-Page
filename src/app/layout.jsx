import { Poppins } from 'next/font/google';
import './global.scss';
import Nav from '@/components/Nav/Nav';
import { Footer } from '@/components/Footer/Footer';
const poppins = Poppins({
	subsets: ['latin'],
	weight: '400', //Needs to be a string
	variable: '--font-poppins',
	fallback: ['system-ui', 'arial'],
});

export const metadata = {
	title: 'PandaDev',
	description: 'Portfolio developer application',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={`dark ${poppins.className}`}>
				<Nav />
				{children}
				<Footer />
			</body>
		</html>
	);
}
