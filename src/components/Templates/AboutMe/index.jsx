'use client';
import { useContext, useState } from 'react';
import styles from './index.module.scss';
import Container from '@/components/Atoms/Container/Container';
import TechnologyList from '@/components/Molecules/TechnologyList';
import Link from 'next/link';
const AboutMe = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [selectedItem, setSelectedItem] = useState(null);
	const handleSelectedItem = (item) => {
		setSelectedItem(item);
	};
	return (
		<Container>
			<div id='aboutme' className={styles.container}>
				<div className={styles.aboutme}>
					<div className='header'>
						<h2>Welcome to my page!</h2>
					</div>
					<div className='content'>
						{!selectedItem ? (
							<p>
								{`Hi, My name is Eryk Juszczak and i am software developer with 1
							year of commercial expirience and total 2 years in web
							development, i’am curretly workign at SPOC, where i honed my
							skills in JavaScript, Angular and ServiceNow, In addition to my
							professional experience i've been learning React with Redux and
							TypeScript. I'm truly passionate about React and its capabilities
							in creating interactive and responsive web applications. Beside
							programing i spend my free time playing video games and traning  martial arts!`}
							</p>
						) : (
							<>{selectedItem}</>
						)}
					</div>
				</div>

				<div id='technologies' className={styles.technologies}>
					<TechnologyList handleSelectedItem={handleSelectedItem} />
				</div>
				<div className={styles.work}>{selectedItem}</div>
			</div>
		</Container>
	);
};

export default AboutMe;
