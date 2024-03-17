import type { Meta, StoryObj } from '@storybook/react'
import { ChangeEvent, CSSProperties, useState } from 'react'

import { Card } from './card'
import { Button, Input } from '@/components'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Card> = {
	title: 'Components/Card',
	component: Card,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Card>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default: Story = {
	args: {},
	render: function (args) {
		const [value, setValue] = useState<string>('')

		const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
			console.log(value, '<- input value')
			setValue(e.target.value)
		}

		const exampleStyle: CSSProperties = {
			display: 'flex',
			flexDirection: 'column',
			gap: '25px'
		}

		return (
			<Card className={`${exampleStyle}`}>
				<Input
					type={'text'}
					withLabel={true}
					labelText={'Example card'}
					onChange={onChangeHandler}
					value={value}
				/>
				<div style={{ marginTop: 20 }}>
					"Солнце ярко сияло на голубом небе, птицы щебетали в ветвях деревьев.
					Летний ветерок ласкал лицо, а цветы распускались во всей своей красе.
					Люди гуляли по парку, наслаждаясь теплым днем и прекрасной природой.
					Дети играли весело на площадке, а собаки бегали по зеленому газону. В
					такие моменты жизнь казалась прекрасной и полной радости."
				</div>
				<div style={{ marginTop: 20 }}>{value}</div>
				<div style={{ marginTop: 20 }}>
					<Button fullWidth>Example</Button>
				</div>
			</Card>
		)
	}
}
