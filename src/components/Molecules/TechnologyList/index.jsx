'use client';
import React from 'react';
import TechnologyItem from '@/components/atoms/TechnologyItem';
import styles from './TechnologyList.module.scss';
import nodejs from '@/assets/angular-icon-logo-svgrepo-com.svg';
const TechnologyList = () => {
	const items = [
		{
			label: 'TypeScript',
			img: '/_next/static/media/TypeScript.e217d83f.svg',
			alt: 'TypeScript logo',
		},
		{
			label: 'JavaScript',
			img: '/_next/static/media/logo-javascript.ea9b923b.svg',
			alt: 'JavaScript logo',
		},
		{
			label: 'react',
			img: '/_next/static/media/react-2.2e5ddb29.svg',
			alt: 'React logo',
		},
		{
			label: 'Next.js',
			img: '/_next/static/media/next-dot-js-svgrepo-com.fd3b334b.svg',
			alt: 'Next.js logo',
		},
		{
			label: 'ServiceNow',
			img: '/_next/static/media/servicenow-2.87924f49.svg',
			alt: 'SerivceNow logo',
		},
		{
			label: 'Angular.js',
			img: '/_next/static/media/angular-icon-logo-svgrepo-com.f67920b2.svg',
			alt: 'Angular.js logo',
		},
		{
			label: 'redux',
			img: '/_next/static/media/redux.50fa5b93.svg',
			alt: 'Redux logo',
		},
		{
			label: 'Sass',
			img: '/_next/static/media/sass-1.110665ff.svg',
			alt: 'Sass logo',
		},
		{
			label: 'Jest',
			img: '/_next/static/media/jest-2.1c9b68cc.svg',
			alt: 'Jest logo',
		},
		{
			label: 'Node.js',
			img: '/_next/static/media/node-js-svgrepo-com.a16532a0.svg',
			alt: 'Node.js logo',
		},
		{
			label: 'Postman',
			img: '/_next/static/media/postman.293fd8fc.svg',
			alt: 'Postman logo',
		},
		{
			label: 'Webpack',
			img: '/_next/static/media/webpack-icon.59f5a542.svg',
			alt: 'Webpack logo',
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
