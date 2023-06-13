import React from 'react';

const ProjectList = ({ selectedTechnology, projectList }) => {
	if (selectedTechnology) {
		console.log(projectList.length > 0);
		if (projectList.length > 0) {
			return projectList.map((e) => {
				console.log(e)
				return (
					<div key={e.id}>
						<a href={``}>{e.label}</a>
					</div>
				);
			});
		} else {
			return <div>Sorry but there is nothing i can show you :( </div>;
		}
	} else
		return (
			<p>
				{`Hi, My name is Eryk Juszczak and i am software developer with 1
year of commercial expirience and total 2 years in web
development, i’am curretly workign at SPOC, where i honed my
skills in JavaScript, Angular and ServiceNow, In addition to my
professional experience i've been learning React with Redux and
TypeScript. I'm truly passionate about React and its capabilities
in creating interactive and responsive web applications. Beside
programing i spend my free time playing video games and traning  martial arts!`}
			</p>
		);
};

export default ProjectList;
