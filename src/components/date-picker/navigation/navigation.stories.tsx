import type { Meta, StoryObj } from '@storybook/react';

import { Navigation } from '@/components/date-picker/navigation/navigation';

const meta = {
	title: 'Date-Picker/Navigation',
	component: Navigation,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs']
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
