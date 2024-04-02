import type { Meta, StoryObj } from '@storybook/react';

import { Table } from '@/components/date-picker/table/table';

const meta = {
	title: 'Components/TableButton',
	component: Table,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs']
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		displayMonth: new Date()
	},
	render: function (args) {
		return <Table {...args} />;
	}
};
