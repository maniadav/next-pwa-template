/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
	dest: 'public',
	register: true,
	skipWaiting: true,
})

const isGithubDeploy = true
const repoName = 'next-pwa-github-template'

module.exports = withPWA({
	reactStrictMode: true,
	output: 'export',
	basePath: isGithubDeploy ? `/${repoName}` : '',
	assetPrefix: isGithubDeploy ? `/${repoName}/` : '',
	images: {
		unoptimized: true,
	},
})
