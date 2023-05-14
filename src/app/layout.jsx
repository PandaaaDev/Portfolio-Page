import { Poppins, Ubuntu_Mono } from 'next/font/google';
import './global.scss';
import Nav from '@/components/Nav/Nav';
import Footer from '@/components/Footer/Footer';
import Container from '@/components/Container/Container';

const poppins = Poppins({
	subsets: ['latin'],
	weight: '400', //Needs to be a string
	variable: '--font-poppins',
	fallback: ['system-ui', 'arial'],
});


export const metadata = {
	title: 'PandaDev',
	description: 'A portfolio page of a software developer',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={`dark ${poppins.className}`}>
				<Nav />
				<Container>{children}</Container>
				<Footer />
			</body>
		</html>
	);
}
