import { NextResponse } from 'next/server';

const projectData = [
	{
		id: 'P01',
		label: 'Portfolio Page',
		technologies: [
			'react',
			'next.js',
			'modules.scss',
			'jest',
			'sass',
			'javascript',
			'mongodb',
		],
		url: '/',
		repository: '/',
		desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
	},
	{
		id: 'P02',
		label: 'Email app',
		technologies: [
			'react',
			'electron',
			'styled-components',
			'jest',
			'sass',
			'typescript',
			'mongodb',
		],
		url: '/',
		repository: 'here needs to be a link to repository',
		desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
	},
	{
		id: 'P03',
		label: 'Live time chat app',
		technologies: [
			'react',
			'styled-components',
			'sass',
			'jest',
			'typescript',
			'mongodb',
		],
		url: '/',
		repository: 'here needs to be a link to repository',
		desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
	},
];

export async function GET(req) {
	const { searchParams } = new URL(req.url);
	const item = searchParams.get('item');
	const array = projectData.filter((el) => {
		if (el.technologies.includes(item.trim().toLowerCase())) return true;
		return false;
	});
	return NextResponse.json(array);
}
