'use client';
import { useEffect, useState } from 'react';
import styles from './index.module.scss';
import Container from '@/components/Atoms/Container/Container';
import TechnologyList from '@/components/Molecules/TechnologyList';
import Link from 'next/link';
import axios from 'axios';
const AboutMe = () => {
	const [loading, setLoading] = useState(true);
	const [selectedItem, setSelectedItem] = useState(null);
	const [projects, setProjects] = useState([]);
	const handleSelectedItem = (item) => {
		setSelectedItem(item);
	};
	useEffect(() => {
		const currentURL = window.location;
		setLoading(true);
		console.log(selectedItem);
		if (selectedItem) {
			console.log(selectedItem, '2');
			fetchData(currentURL.origin + `/api/myProjects?item=${selectedItem}`);
		}
		setLoading(false);
	}, [selectedItem]);
	const fetchData = async (url) => {
		axios
			.get(url)
			.then((response) => {
				console.log(response.data);
				setProjects(response.data);
			})
			.catch((error) => {
				console.error(error);
			});
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
							<>
								{projects.length < 0 ? (
									<>There is nothing i can show you :D NDA sorry :(</>
								) : (
									<div>
										{projects.map((e) => {
											return (
												<div key={e.id}>
													<p>{e.label}</p>
												</div>
											);
										})}
									</div>
								)}
							</>
						)}
					</div>
				</div>

				<div id='technologies' className={styles.technologies}>
					<TechnologyList handleSelectedItem={handleSelectedItem} />
				</div>
				<div className={styles.work}>
					{!selectedItem ? (
						<p>If you chose technology here magic will happen</p>
					) : (
						<></>
					)}
				</div>
			</div>
		</Container>
	);
};

export default AboutMe;
