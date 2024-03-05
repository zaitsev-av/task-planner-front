import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'

import { SITE_NAME } from '@/constants/seo.constans'

import '../styles/index.scss'

import { Providers } from '@/app/porviders'

const font = Rubik({
	subsets: ['cyrillic', 'latin'],
	weight: ['400', '700', '900'],
	display: 'swap',
	variable: '--font-rubik',
	style: 'normal'
})

export const metadata: Metadata = {
	title: { default: SITE_NAME, template: `%s | ${SITE_NAME}` },
	description: 'Your planner'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={font.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
