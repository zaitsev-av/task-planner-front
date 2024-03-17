import type { Meta, StoryObj } from '@storybook/react';
import { ChangeEvent, CSSProperties, useState } from 'react';

import { LoginForm } from './login-form';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof LoginForm> = {
	title: 'Forms/Login',
	component: LoginForm,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default: Story = {
	args: {},
	render: function (args) {
		const [value, setValue] = useState<string>('');

		const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
			console.log(value, '<- input value');
			setValue(e.target.value);
		};

		const exampleStyle: CSSProperties = {
			display: 'flex',
			flexDirection: 'column',
			gap: '25px'
		};

		return <LoginForm />;
	}
};
