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

	return (
		<tr>
			{weekNumberCell}
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
