import type { Meta, StoryObj } from '@storybook/react';

import { SignUpForm } from '@/components/forms/sign-up/sign-up-form';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof SignUpForm> = {
	title: 'Forms/Register',
	component: SignUpForm,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof SignUpForm>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default: Story = {
	args: {},
	render: function (args) {
		// const [value, setValue] = useState<string>('');
		//
		// const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		// 	console.log(value, '<- input value');
		// 	setValue(e.target.value);
		// };
		//
		// const exampleStyle: CSSProperties = {
		// 	display: 'flex',
		// 	flexDirection: 'column',
		// 	gap: '25px'
		// };

		return <SignUpForm />;
	}
};
