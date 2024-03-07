import type { Preview } from '@storybook/react'
import { Rubik } from 'next/font/google'

import '../src/styles/index.scss'

const font = Rubik({
	subsets: ['cyrillic', 'latin'],
	weight: ['400', '700', '900'],
	display: 'swap',
	variable: '--font-rubik',
	style: 'normal'
})
const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*', extends: font },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		}
	}
}

export default preview
