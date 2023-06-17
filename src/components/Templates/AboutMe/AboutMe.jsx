'use client';
import { useEffect, useState } from 'react';
import styles from './index.module.scss';
import Container from '@/components/Atoms/Container/Container';
import TechnologyList from '@/components/Molecules/TechnologyList/TechnologyList';
import ProjectList from '@/components/Molecules/ProjectList/ProjectList';
import Link from 'next/link';
import OverlayLink from '@/components/Atoms/Buttons/OverlayLink/OverlayLink';
import axios from 'axios';
const AboutMe = () => {
	const [loading, setLoading] = useState(true);
	const [selectedTechnology, setSelectedTechnology] = useState(null);
	const [projects, setProjects] = useState([]);
	const [selectedProject, setSelectedProject] = useState(null);
	const fetchData = async (url) => {
		axios
			.get(url)
			.then((response) => {
				setProjects(response.data);
			})
			.catch((error) => {
				console.error(error);
			});
	};
	const handleSelectedTechnology = (item) => {
		setSelectedTechnology(item);
		setSelectedProject(null);
	};
	const handleSelectedProject = (item) => {
		setSelectedProject(item);
	};
	// UseEffect
	useEffect(() => {
		const currentURL = window.location;
		setLoading(true);
		if (selectedTechnology) {
			fetchData(
				currentURL.origin + `/api/myProjects?item=${selectedTechnology}`
			);
		}
		setLoading(false);
	}, [selectedTechnology]);

	return (
		<Container>
			<div id='aboutme' className={styles.container}>
				<div className={styles.aboutme}>
					<div className='header'>
						{selectedProject ? (
							<h2>{selectedProject.label}</h2>
						) : (
							<h2>Welcome to my page!</h2>
						)}
					</div>
					<div className={styles.content}>
						{selectedProject ? (
							<>
								<h4>Technologies i used in this project:</h4>
								<ul className={styles.projectTechnologies}>
									{selectedProject.technologies.map((e) => {
										{
											return <li>{e.charAt(0).toUpperCase() + e.slice(1)}</li>;
										}
									})}
								</ul>
								<div className={styles.description}>
									<div className={styles.header}>Description:</div>
									<div className={styles.content}>{selectedProject.desc}</div>
								</div>
								<div className={styles.linkContainer}>
									<OverlayLink target='_blank' href={selectedProject.url}>
										View page
									</OverlayLink>
									<OverlayLink
										target='_blank'
										href={selectedProject.repository}
									>
										View code
									</OverlayLink>
								</div>
							</>
						) : (
							<ProjectList
								selectedTechnology={selectedTechnology}
								projectList={projects}
								handleSelectProject={handleSelectedProject}
							></ProjectList>
						)}
					</div>
				</div>
				<div id='technologies' className={styles.technologies}>
					<TechnologyList handleSelectedTechnology={handleSelectedTechnology} />
				</div>
				<div className={styles.work}></div>
			</div>
		</Container>
	);
};

export default AboutMe;
