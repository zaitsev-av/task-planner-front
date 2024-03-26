import type { Meta, StoryObj } from '@storybook/react';

import { Heading } from './heading';

const meta = {
	title: 'Layout/Heading',
	component: Heading,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs']
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		name: 'Heading  example'
	},
	render: function ({ name }) {
		return <Heading name={name} />;
	}
};
