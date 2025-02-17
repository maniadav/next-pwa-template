import { writeFileSync } from 'fs'
import basePath from '../components/config.ts'

const manifest = {
	name: 'Next PWA Template',
	short_name: 'NEXT-PWA',
	description: 'Progressive web app using next-pwa',
	icons: [
		{
			src: `${basePath && `/${basePath}`}/images/icon-192.png`,
			type: 'image/png',
			sizes: '192x192',
		},
		{
			src: `${basePath && `/${basePath}`}/images/icon-512.png`,
			type: 'image/png',
			sizes: '512x512',
		},
		{
			src: `${basePath && `/${basePath}`}/images/icon-masked-192.png`,
			type: 'image/png',
			sizes: '192x192',
			purpose: 'maskable',
		},
		{
			src: `${basePath && `/${basePath}`}/images/icon-masked-512.png`,
			type: 'image/png',
			sizes: '512x512',
			purpose: 'maskable',
		},
	],
	start_url: `${basePath && `/${basePath}`}`,
	orientation: 'portrait',
	display: 'standalone',
	scope: basePath || '/',
}

writeFileSync('public/manifest.json', JSON.stringify(manifest, null, 2))
console.log('✅ Manifest.json generated successfully!')
