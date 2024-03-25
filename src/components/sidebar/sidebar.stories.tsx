import type { Meta, StoryObj } from '@storybook/react';

import { Sidebar } from '@/components/sidebar/sidebar';

const meta = {
	title: 'Layout/Sidebar',
	component: Sidebar,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs']
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
	render: function () {
		return (
			<div style={{ display: 'flex', width: '100vh', height: '100vh' }}>
				<Sidebar />
			</div>
		);
	}
};
