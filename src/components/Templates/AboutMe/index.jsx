import styles from './index.module.scss';
import Container from '@/components/Atoms/Container/Container';
import technologyItem from '@/components/Atoms/technologyItem';
const AboutMe = () => {
	return (
		<Container>
			<div id='aboutme' className={styles.container}>
				<div className={styles.aboutme}>
					<div className='header'>
						<h2>About me</h2>
					</div>
					<div className='content'></div>
				</div>

				<div id='technologies' className={styles.technologies}>
					<div className='header'>
						<h2>I worked with!</h2>
						<technologyItem label='react' />
					</div>
					<div className='content'>
					</div>
				</div>
				<div className={styles.work}>
					<div className='header'>
						<h2>My projects</h2>
					</div>
					<div className='content'></div>
				</div>
			</div>
		</Container>
	);
};

export default AboutMe;
