'use client';
import { useEffect, useState } from 'react';
import styles from './index.module.scss';
import Container from '@/components/Atoms/Container/Container';
import TechnologyList from '@/components/Molecules/TechnologyList/TechnologyList';
import ProjectList from '@/components/Molecules/ProjectList/ProjectList';
import Link from 'next/link';
import axios from 'axios';
const AboutMe = () => {
	const [loading, setLoading] = useState(true);
	const [selectedTechnology, setselectedTechnology] = useState(null);
	const [projects, setProjects] = useState([]);
	const handleselectedTechnology = (item) => {
		setselectedTechnology(item);
	};
	useEffect(() => {
		const currentURL = window.location;
		setLoading(true);
		console.log(selectedTechnology);
		if (selectedTechnology) {
			console.log(selectedTechnology, '2');
			fetchData(
				currentURL.origin + `/api/myProjects?item=${selectedTechnology}`
			);
		}
		setLoading(false);
	}, [selectedTechnology]);
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
						<ProjectList
							selectedTechnology={selectedTechnology}
							projectList={projects}
						></ProjectList>
					</div>
				</div>

				<div id='technologies' className={styles.technologies}>
					<TechnologyList handleselectedTechnology={handleselectedTechnology} />
				</div>
				<div className={styles.work}></div>
			</div>
		</Container>
	);
};

export default AboutMe;
