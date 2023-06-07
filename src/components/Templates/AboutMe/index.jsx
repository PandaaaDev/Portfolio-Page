import styles from './index.module.scss';
import Container from '@/components/Atoms/Container/Container';
import TechnologyList from '@/components/Molecules/TechnologyList';
const AboutMe = () => {
	return (
		<Container>
			<div id='aboutme' className={styles.container}>
				<div className={styles.aboutme}>
					<div className='header'>
						<h2>Welcome to my page!</h2>
					</div>
					<div className='content'>
						<p>
							{`I'm a passionate web developer with a year of commercial
							experience and a total of two years in programming. Throughout my
							journey, I've had the opportunity to work at SPOC, where I honed
							my skills in JavaScript, Angular.js, and ServiceNow.`}
						</p>
						<p>
							{`In addition to my professional experience i've been learning React
							with Redux and TypeScript. I'm truly passionate about React and
							its capabilities in creating interactive and responsive web
							applications. Its component-based architecture, virtual DOM, and
							extensive ecosystem empower me to build efficient and scalable
							solutions. I constantly strive to expand my knowledge of React by
							staying updated with the latest advancements and exploring new
							libraries and frameworks within the React ecosystem.`}
						</p>
						<p>
							{`To me, the essence of being a developer is continuous growth and
							learning. Throughout my journey, I have discovered that
							collaboration is an essential aspect of this process. By working
							alongside clients, I have gained valuable insights into their
							unique visions and aspirations, allowing me to transform their
							ideas into tangible digital solutions. I firmly believe that clear
							communication, attention to detail, and a steadfast commitment to
							delivering results are fundamental traits that contribute to a
							successful collaboration. As a developer I have embraced these
							principles, leveraging my technical expertise and problem-solving
							skills to create meaningful and impactful experiences for 
							clients.`}
						</p>
					</div>
				</div>

				<div id='technologies' className={styles.technologies}>
					<TechnologyList />
				</div>
				<div id='projects' className={styles.work}>
					<div className='header'>
						<h2>My projects</h2>
						<div className=''>
							{' '}
							Here i need add list of box of projects and after click they will
							redirect to a page with iframe of this page :D!{' '}
						</div>
					</div>
					<div className='content'></div>
				</div>
			</div>
		</Container>
	);
};

export default AboutMe;
