import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Checkbox } from './checkbox';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Checkbox> = {
	title: 'Components/Checkbox',
	component: Checkbox,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default: Story = {
	args: {
		label: 'Example'
	}
};

export const Label: Story = {
	args: {
		id: 'qwerty1234',
		label: 'Label',
		isChecked: true
	},
	render: function RenderLabel(args) {
		const [isChecked, setChecked] = useState(args.isChecked);
		function onChange() {
			console.log(isChecked);
			setChecked(prevState => !prevState);
		}

		return (
			<Checkbox
				{...args}
				isChecked={isChecked}
				onChecked={onChange}
			/>
		);
	}
};

export const Disabled: Story = {
	args: {
		label: 'Example disabled',
		disabled: true
	}
};
