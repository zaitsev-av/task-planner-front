import type { Meta, StoryObj } from '@storybook/react';

import { DatePicker } from '@/components/date-picker/date-picker';

const meta = {
	title: 'Date-Picker/Date-Picker',
	component: DatePicker,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs']
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		value: '',
		position: 'right'
	},
	render: function ({}) {
		return <DatePicker />;
	}
};
