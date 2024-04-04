import { getUnixTime } from 'date-fns';

import { useDayPicker } from '@/components/date-picker/Context';
import { Day } from '@/components/date-picker/day/day';
import { WeekNumber } from '@/components/date-picker/week-number';

export interface RowProps {
	displayMonth: Date;
	weekNumber: number;
	dates: Date[];
}

export function Row(props: RowProps): JSX.Element {
	const { showWeekNumber } = useDayPicker();
	console.log(showWeekNumber, '-> showWeekNumber');

	let weekNumberCell;
	if (showWeekNumber) {
		weekNumberCell = (
			<td>
				<WeekNumber
					number={props.weekNumber}
					dates={props.dates}
				/>
			</td>
		);
	}
	// console.log(props.dates, '-< props.dates');
	// console.log(props.weekNumber, '-< props.weekNumber');

	return (
		<tr>
			<td>
				<WeekNumber
					number={props.weekNumber}
					dates={props.dates}
				/>
			</td>
			{props.dates.map(date => (
				<td
					key={getUnixTime(date)}
					role='presentation'
				>
					<Day
						displayMonth={props.displayMonth}
						date={date}
					/>
				</td>
			))}
		</tr>
	);
}
