import type { Meta, StoryObj } from '@storybook/react';

import { Layout } from './app-layuot';
import { LoginForm } from '@/components';

const meta = {
	title: 'Layout/Layout',
	component: Layout,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs']
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: <LoginForm />
	}
};
