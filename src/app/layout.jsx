'use client'
import { Poppins, Ubuntu_Mono } from 'next/font/google';
import '@/styles/global.scss';
import Nav from '@/components/Organism/Nav/Nav';
import Footer from '@/components/Organism/Footer/Footer';
import { Provider } from 'react-redux';
import store from '@/store';
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
			<Provider store={store}>
				<body className={`dark ${poppins.className}`}>
					<Nav />
					<main>{children}</main>
					<Footer />
				</body>
			</Provider>
		</html>
	);
}
