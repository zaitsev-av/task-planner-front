import type { Meta, StoryObj } from '@storybook/react';

import { CustomDay } from './day-content';

const meta = {
	title: 'Components/Day-Content',
	component: CustomDay,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs']
} satisfies Meta<typeof CustomDay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: { date: new Date(), displayMonth: new Date() }
};
