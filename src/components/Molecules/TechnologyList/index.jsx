'use client';
import React from 'react';
import TechnologyItem from '@/components/atoms/TechnologyItem';
import reactLogo from '@/assets/react-2.svg';
import reduxLogo from '@/assets/redux.svg';
import webpackLogo from '@/assets/webpack-icon.svg';
import styles from './TechnologyList.module.scss';
import javaScriptLogo from '@/assets/logo-javascript.svg';
import sassLogo from '@/assets/sass-1.svg';
import jestLogo from '@/assets/jest-2.svg'
const TechnologyList = () => {
	console.log(reactLogo);
	const items = [
		{ label: 'JavaScript', img: javaScriptLogo, alt: 'JavaScript logo' },
		{ label: 'react', img: reactLogo, alt: 'React logo' },
		{ label: 'redux', img: reduxLogo, alt: 'Redux logo' },
		{ label: 'Webpack', img: webpackLogo, alt: 'Webpack logo' },
		{ label: 'Sass', img: sassLogo, alt: 'Sass logo' },
		{ label: 'Jest', img: jestLogo, alt: 'Jest logo' },
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
