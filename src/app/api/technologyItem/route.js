import { NextResponse } from 'next/server';
export async function GET(req) {
	return NextResponse.json([
		{
			label: 'TypeScript',
			img: 'https://cdn.worldvectorlogo.com/logos/typescript.svg',
			alt: 'TypeScript logo',
		},
		{
			label: 'JavaScript',
			img: 'https://cdn.worldvectorlogo.com/logos/logo-javascript.svg',
			alt: 'JavaScript logo',
		},
		{
			label: 'react',
			img: 'https://cdn.worldvectorlogo.com/logos/react-2.svg',
			alt: 'React logo',
		},
		{
			label: 'Next.js',
			img: 'https://cdn.worldvectorlogo.com/logos/next-js.svg',
			alt: 'Next.js logo',
		},
		{
			label: 'ServiceNow',
			img: 'https://cdn.worldvectorlogo.com/logos/servicenow-2.svg',
			alt: 'SerivceNow logo',
		},
		{
			label: 'Angular.js',
			img: 'https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg',
			alt: 'Angular.js logo',
		},
		{
			label: 'redux',
			img: 'https://cdn.worldvectorlogo.com/logos/redux.svg',
			alt: 'Redux logo',
		},
		{
			label: 'Node.js',
			img: 'https://cdn.worldvectorlogo.com/logos/nodejs-1.svg',
			alt: 'Node.js logo',
		},

		{
			label: 'Express',
			img: 'https://cdn.worldvectorlogo.com/logos/express-109.svg',
			alt: 'express  logo',
		},
		{
			label: 'GraphQL',
			img: 'https://cdn.worldvectorlogo.com/logos/graphql-logo-2.svg',
			alt: 'graphql logo',
		},
		{
			label: 'Webpack',
			img: 'https://cdn.worldvectorlogo.com/logos/webpack-icon.svg',
			alt: 'Webpack logo',
		},
		{
			label: 'Styled Components',
			img: 'https://cdn.worldvectorlogo.com/logos/styled-components-1.svg',
			alt: 'Styled components logo',
		},
		{
			label: 'Sass',
			img: 'https://cdn.worldvectorlogo.com/logos/sass-1.svg',
			alt: 'Sass logo',
		},
		{
			label: 'electron',
			img: 'https://www.electronjs.org/assets/img/logo.svg',
			alt: 'Electron Logo',
		},
	]);
}
