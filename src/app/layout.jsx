import { Poppins, Ubuntu_Mono } from 'next/font/google';
import '@/styles/global.scss';
import Nav from '@/components/Organism/Nav/Nav';
import Footer from '@/components/Organism/Footer/Footer';
const poppins = Poppins({
	subsets: ['latin'],
	weight: '400', //Needs to be a string
	variable: '--font-poppins',
	fallback: ['monospace', 'system-ui'],
});

export const metadata = {
	title: 'PandaDev',
	description: 'A portfolio page of a software developer',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={` ${poppins.className}`}>
				<Nav />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
