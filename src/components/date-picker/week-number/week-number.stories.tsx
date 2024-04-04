import type { Meta, StoryObj } from '@storybook/react';
import { eachDayOfInterval, getISOWeek } from 'date-fns';

import {
	DayPickerProvider,
	initialProps
} from '@/components/date-picker/Context';
import { Table } from '@/components/date-picker/table/table';
import { WeekNumber } from '@/components/date-picker/week-number/week-number';

const meta = {
	title: 'Date-Picker/Week-number',
	component: WeekNumber,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs']
} satisfies Meta<typeof WeekNumber>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		dates: [],
		number: 1
	},
	render: function (args) {
		const startDate = new Date();
		const endDate = new Date(
			startDate.getFullYear(),
			startDate.getMonth(),
			startDate.getDay() + 7
		);

		const dates = eachDayOfInterval({ start: startDate, end: endDate });
		const today = new Date();
		const weekNumber = getISOWeek(today);
		return (
			<DayPickerProvider initialProps={initialProps}>
				{dates.map((value, index) => (
					<WeekNumber
						key={index}
						number={weekNumber + index}
						dates={dates}
					/>
				))}
			</DayPickerProvider>
		);
	}
};
