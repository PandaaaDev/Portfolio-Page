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
		repository: 'here needs to be a link to repository',
		desc: '',
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
		desc: '',
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
		desc: '',
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
