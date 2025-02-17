import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				<link rel='icon' type='image/png' href={`/images/icon-192.png`} />
				<link rel='apple-touch-icon' href={`/images/icon-masked-512.png`} />
				<link rel='manifest' href={`/manifest.json`} />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
