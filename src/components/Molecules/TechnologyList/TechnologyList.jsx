'use client';
import { useNextApiFetch } from '@/hooks/useFetch/useFetch';
import TechnologyItem from '@/components/Atoms/technologyItem/technologyItem';
import styles from './TechnologyList.module.scss';

const TechnologyList = ({ handleSelectedTechnology }) => {
	const { data, loading, error } = useNextApiFetch('/api/technologyItem');

	return (
		<>
			<div className={styles.header}>
				<h2>I worked with!</h2>
			</div>
			{loading ? (
				<div>Loading...</div>
			) : (
				<div className={styles.content}>
					{data.map((element) => {
						return (
							<TechnologyItem
								key={element.label}
								label={element.label}
								img={element.img}
								alt={element.alt}
								onClick={() => {
									handleSelectedTechnology(element.label);
								}}
							/>
						);
					})}
				</div>
			)}
		</>
	);
};

export default TechnologyList;
