import basePath from '@/components/config'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				<link
					rel='icon'
					type='image/png'
					href={`${basePath && `/${basePath}`}/images/icon-192.png`}
				/>
				<link
					rel='apple-touch-icon'
					href={`${basePath && `/${basePath}`}/images/icon-masked-512.png`}
				/>
				<link
					rel='manifest'
					href={`${basePath && `/${basePath}`}/manifest.json`}
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
