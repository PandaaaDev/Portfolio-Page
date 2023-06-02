'use client';
import Image from 'next/image';
import styles from './index.module.scss';
import React, { Suspense } from 'react';
const TechnologyItem = ({ label, action, img, alt }) => {
	return (
		<div className={styles.item} onClick={action}>
			<div className={styles.header}>
				{label.charAt(0).toUpperCase() + label.slice(1)}
			</div>
			<div className={styles.content}>
				<Suspense fallback={<div>Loading...</div>}>
					<Image src={img} alt={alt} width={50} height={50} />
				</Suspense>
			</div>
		</div>
	);
};

export default TechnologyItem;
