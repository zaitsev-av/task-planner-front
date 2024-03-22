import type { Meta, StoryObj } from '@storybook/react';
import { ChangeEvent, useState } from 'react';

import { Input } from './input';
import { Typography } from '@/components';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Input> = {
	title: 'Components/Input',
	component: Input,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Input>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default: Story = {
	args: {
		type: 'text',
		withLabel: true,
		labelText: 'Default'
	},
	render: function (args) {
		const [value, setValue] = useState<string>('');

		const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
			console.log(value, '<- input value');
			setValue(e.target.value);
		};

		return (
			<Input
				{...args}
				onChange={onChangeHandler}
				value={value}
			/>
		);
	}
};

export const Password: Story = {
	args: {
		type: 'password',
		withLabel: true,
		labelText: 'Password'
	}
};

export const Placeholder: Story = {
	args: {
		type: 'text',
		placeholder: 'Placeholder'
	},
	render: function (args) {
		const [value, setValue] = useState<string>('');

		const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
			console.log(value, '<- input value');
			setValue(e.target.value);
		};

		return (
			<Input
				{...args}
				onChange={onChangeHandler}
				value={value}
			/>
		);
	}
};

export const Error: Story = {
	args: {
		type: 'text',
		withLabel: true,
		labelText: 'Error input'
	},
	render: function (args) {
		const [value, setValue] = useState<string>('');
		const [error, setError] = useState<boolean>(false);

		const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
			console.log(value, '<- input value');
			setValue(e.target.value);
			if (value.length <= 5) {
				setError(true);
			} else {
				setError(false);
			}
		};

		return (
			<div style={{ display: 'flex', flexDirection: 'column', gap: 45 }}>
				<Typography
					as={'h3'}
					variant={'heading'}
				>
					Начните вводить символы...
				</Typography>
				<Input
					{...args}
					onChange={onChangeHandler}
					value={value}
					error={error ? 'Введите пароль' : ''}
				/>
			</div>
		);
	}
};
