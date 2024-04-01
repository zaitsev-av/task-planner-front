import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Select } from '@/components/shared/select/select';

const meta = {
	argTypes: {
		label: {
			control: { type: 'text' }
		}
	},
	args: {
		label: 'password length'
	},
	component: Select,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: 'centered'
	},
	tags: ['autodocs'],
	title: 'Components/Select'
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof Select>;

const items = [
	{
		id: '1',
		name: '5'
	},
	{
		id: '2',
		name: '8'
	},
	{
		id: '3',
		name: '12'
	},
	{
		id: '4',
		name: '15'
	},
	{
		id: '5',
		name: '20'
	}
];

export const Default: Story = {
	args: {
		items
	},
	render: function (args) {
		const [value, setValue] = useState(items[0].name);

		const onChangeHandler = (value: string) => {
			setValue(value);
			console.log(value);
		};
		return (
			<Select
				items={items}
				value={value}
				onChange={onChangeHandler}
			/>
		);
	}
};

export const WithLabel: Story = {
	args: {
		items
	},
	render: function (args) {
		const [value, setValue] = useState(items[0].name);

		const onChangeHandler = (value: string) => {
			setValue(value);
			console.log(value);
		};
		return (
			<Select
				items={items}
				value={value}
				onChange={onChangeHandler}
				label={'this label'}
			/>
		);
	}
};

export const Disabled: Story = {
	args: {
		items
	},
	render: function (args) {
		const [value, setValue] = useState(items[0].name);

		const onChangeHandler = (value: string) => {
			setValue(value);
			console.log(value);
		};
		return (
			<Select
				disabled={true}
				items={items}
				value={value}
				onChange={onChangeHandler}
				label={'this label'}
			/>
		);
	}
};
