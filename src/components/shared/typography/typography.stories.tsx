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

export const Heading: Story = {
	args: {
		variant: 'heading',
		children: 'Heading example'
	},
	render: function (args) {
		const { children, ...rest } = args;
		return (
			<div style={{ display: 'flex', flexDirection: 'column', gap: 25 }}>
				<Typography
					as={'h1'}
					{...rest}
				>
					H1 {children}
				</Typography>
				<Typography
					as={'h2'}
					{...rest}
				>
					H2 {children}
				</Typography>
				<Typography
					as={'h3'}
					{...rest}
				>
					H3 {children}
				</Typography>
			</div>
		);
	}
};

export const Link: Story = {
	args: {
		as: 'a',
		variant: 'link',
		children: 'Link example',
		href: 'https://www.google.com'
	}
};

export const Error: Story = {
	args: {
		as: 'p',
		variant: 'error',
		children: 'Error example'
	}
};
