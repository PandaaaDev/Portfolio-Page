'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import TechnologyItem from '@/components/Atoms/technologyItem/technologyItem';
import styles from './TechnologyList.module.scss';

const TechnologyList = () => {
	const [loading, setLoading] = useState(true);
	const [items, setItems] = useState();

	useEffect(() => {
		const currentURL = window.location;
		setLoading(true);
		getItems(currentURL.origin + '/api/technologyItem');
	}, []);
	const getItems = async (url) => {
		axios
			.get(url)
			.then((res) => {
				setLoading(false);
				setItems(res.data);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	return (
		<>
			<div className={styles.header}>
				<h2>I worked with!</h2>
			</div>
			{loading ? (
				<div>Loading...</div>
			) : (
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
			)}
		</>
	);
};

export default TechnologyList;
