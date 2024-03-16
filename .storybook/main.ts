import type { StorybookConfig } from '@storybook/nextjs'
import path from 'path'

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-onboarding',
		'@storybook/addon-interactions',
		'storybook-dark-mode'
	],
	framework: {
		name: '@storybook/nextjs',
		options: {}
	},
	docs: {
		autodocs: 'tag'
	},
	//solves the alias imports problem in the storybook
	webpackFinal: async config => {
		if (config.resolve) {
			config.resolve.alias = {
				...config.resolve.alias,
				'@': path.resolve(__dirname, '../src')
			}
		}
		return config
	}
}
export default config
