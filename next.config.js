/** @type {import('next').NextConfig} */
const nextConfig = {
	distDir: 'dist',
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.worldvectorlogo.com',
				port: '',
			},
		],
	},
};

module.exports = nextConfig;
