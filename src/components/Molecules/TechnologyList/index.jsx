'use client';
import React from 'react';
import TechnologyItem from '@/components/atoms/TechnologyItem';
import styles from './TechnologyList.module.scss';
const TechnologyList = () => {
	const items = [
		{
			label: 'TypeScript',
			img: 'https://cdn.worldvectorlogo.com/logos/typescript.svg',
			alt: 'TypeScript logo',
		},
		{
			label: 'JavaScript',
			img: 'https://cdn.worldvectorlogo.com/logos/logo-javascript.svg',
			alt: 'JavaScript logo',
		},
		{
			label: 'react',
			img: 'https://cdn.worldvectorlogo.com/logos/react-2.svg',
			alt: 'React logo',
		},
		{
			label: 'Next.js',
			img: 'https://cdn.worldvectorlogo.com/logos/next-js.svg',
			alt: 'Next.js logo',
		},
		{
			label: 'ServiceNow',
			img: 'https://cdn.worldvectorlogo.com/logos/servicenow-2.svg',
			alt: 'SerivceNow logo',
		},
		{
			label: 'Angular.js',
			img: 'https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg',
			alt: 'Angular.js logo',
		},
		{
			label: 'redux',
			img: 'https://cdn.worldvectorlogo.com/logos/redux.svg',
			alt: 'Redux logo',
		},
		{
			label: 'Sass',
			img: 'https://cdn.worldvectorlogo.com/logos/sass-1.svg',
			alt: 'Sass logo',
		},
		{
			label: 'Node.js',
			img: 'https://cdn.worldvectorlogo.com/logos/nodejs-1.svg',
			alt: 'Node.js logo',
		},
		{
			label: 'Postman',
			img: 'https://cdn.worldvectorlogo.com/logos/postman.svg',
			alt: 'Postman logo',
		},
		{
			label: 'Webpack',
			img: 'https://cdn.worldvectorlogo.com/logos/webpack-icon.svg',
			alt: 'Webpack logo',
		},
		{
			label: 'electron',
			img: 'https://www.electronjs.org/assets/img/logo.svg',
			alt: 'Electron Logo',
		},
	];
	// Here we need to do an api call to backend for geting the data for page :D!
	return (
		<>
			<div className={styles.header}>
				<h2>I worked with!</h2>
			</div>
			<div className={styles.content}>
				{items.map((element) => {
					return (
						<TechnologyItem
							key={element.label}
							label={element.label}
							img={element.img}
							alt={element.alt}
						/>
					);
				})}
			</div>
		</>
	);
};

export default TechnologyList;
