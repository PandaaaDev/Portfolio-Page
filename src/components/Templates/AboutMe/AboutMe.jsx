'use client';
import { useEffect, useState } from 'react';
import styles from './index.module.scss';
import Container from '@/components/Atoms/Container/Container';
import TechnologyList from '@/components/Molecules/TechnologyList/TechnologyList';
import ProjectList from '@/components/Molecules/ProjectList/ProjectList';
import Link from 'next/link';
import OverlayLink from '@/components/Atoms/Buttons/OverlayLink/OverlayLink'
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
						<h2>Welcome to my page!</h2>
					</div>
					<div className='content'>
						{selectedProject ? (
							<>
								<h2>{selectedProject.label}</h2>
								<ul className='technologies'>
									{selectedProject.technologies.map((e) => {
										{
											return <li>{e}</li>;
										}
									})}
								</ul>
								<OverlayLink href={selectedProject.url}>
									Check this project live!
								</OverlayLink>
								<OverlayLink href={selectedProject.repository}>
									View code
								</OverlayLink>
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
				<div className={styles.work}>
					{selectedProject ? (
						<>{selectedProject.desc}</>
					) : (
						<> selectedPorject not define</>
					)}
				</div>
			</div>
		</Container>
	);
};

export default AboutMe;
