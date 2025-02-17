import Page from '@/components/page'
import Section from '@/components/section'
import Link from 'next/link'

const Index = () => (
	<Page>
		<Section>
			<main className='flex flex-col items-center justify-center p-4 bg-white dark:bg-zinc-900'>
				<h2 className='text-xl font-semibold text-zinc-800 dark:text-zinc-200'>
					A bit about the project
				</h2>

				<div className='mt-2 text-start max-w-2xl'>
					<p className='text-zinc-600 dark:text-zinc-400'>
						{`	This project utilizes next-pwa to build PWA (Pogressive web app). I have also generated static file and deployed it on Github Pages.`}
					</p>

					<h3 className='mt-4 text-lg font-semibold text-zinc-800 dark:text-zinc-200'>
						Benefits of PWAs:
					</h3>

					<ul className='mt-2 text-zinc-600 dark:text-zinc-400 text-left'>
						<li>- Installable on any device like a native app</li>
						<li>- Works offline with service workers</li>
						<li>- Fast performance with efficient caching</li>
						<li>- No need for app stores—just visit the website</li>
						<li>- Secure and responsive across all devices</li>
					</ul>
				</div>
				<div className='flex text-center mt-20'>
					<Link
						href='https://github.com/maniadav/next-pwa-github-template'
						target='_blank'
						rel='noopener noreferrer'
						className='px-4 py-2 mt-6 text-sm font-medium text-white bg-fuchsia-600 rounded-lg shadow-md hover:bg-fuchsia-700 dark:bg-fuchsia-500 dark:hover:bg-fuchsia-600'
					>
						🚀 View on GitHub
					</Link>
				</div>
			</main>
		</Section>
	</Page>
)

export default Index
