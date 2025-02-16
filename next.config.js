/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
	dest: 'public',
	register: true,
	skipWaiting: true,
})

const isProd = true //process.env.NODE_ENV === 'production'
const repoName = 'next-pwa-template'

module.exports = withPWA({
	reactStrictMode: true,
	output: 'export',
	basePath: isProd ? `/${repoName}` : '',
	assetPrefix: isProd ? `/${repoName}/` : '',
	images: {
		unoptimized: true,
	},
})
