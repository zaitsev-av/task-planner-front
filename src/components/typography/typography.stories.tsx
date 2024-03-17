import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from '@/components';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Typography> = {
	title: 'Components/Typography',
	component: Typography,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Typography>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default: Story = {
	args: {
		children: 'Default example'
	}
};
