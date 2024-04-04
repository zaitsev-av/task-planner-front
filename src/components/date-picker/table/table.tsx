import { useDayPicker } from '@/components/date-picker/Context';
import { Row } from '@/components/date-picker/table/Row/row';
import { HeadRow } from '@/components/date-picker/table/head-row';
import { getMonthWeeks } from '@/components/date-picker/utils';

import style from './table.module.scss';

export interface TableProps {
	id?: string;
	['aria-labelledby']?: string;
	displayMonth: Date;
}

export function Table(props: TableProps): JSX.Element {
	const {
		locale,
		fixedWeeks,
		weekStartsOn,
		firstWeekContainsDate,
		ISOWeek,
		month
	} = useDayPicker();

	console.log(props.displayMonth, 'props.displayMonth');

	const weeks = getMonthWeeks(month!, {
		useFixedWeeks: Boolean(fixedWeeks),
		ISOWeek,
		locale,
		weekStartsOn,
		firstWeekContainsDate
	});

	return (
		<table
			id={props.id}
			role='grid'
			aria-labelledby={props['aria-labelledby']}
			className={style.root}
		>
			<HeadRow />
			<tbody>
				{weeks.map(week => (
					<Row
						displayMonth={props.displayMonth}
						key={week.weekNumber}
						dates={week.dates}
						weekNumber={week.weekNumber}
					/>
				))}
			</tbody>
			{/*<Footer displayMonth={props.displayMonth} />*/}
		</table>
	);
}
