import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: 'Components/Button',
	component: Button,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: 'centered'
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ['autodocs']
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
	args: {
		children: 'Default',
		onClick: () => console.log('click to button')
	}
};

export const FullWidth: Story = {
	args: {
		fullWidth: true,
		children: 'Full width',
		onClick: () => console.log('click to full width button')
	}
};

export const Link: Story = {
	args: {
		as: 'a',
		children: 'Link',
		onClick: () => console.log('click to link button')
	}
};

export const Disabled: Story = {
	args: {
		children: 'Disabled',
		disabled: true,
		onClick: () => console.log('click to link button')
	}
};
