import '@fontsource/rubik/400.css'
import '@fontsource/rubik/700.css'
import '@fontsource/rubik/900.css'
import type { Preview } from '@storybook/react'

import '../src/styles/index.scss'

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		}
	}
}

export default preview
