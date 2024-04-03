import { useDayPicker } from '@/components/date-picker/Context';
import { Row } from '@/components/date-picker/table/Row/Row';
import { getMonthWeeks } from '@/components/date-picker/utils';

import style from './table.module.scss';

export interface TableProps {
	id?: string;
	['aria-labelledby']?: string;
	displayMonth: Date;
}

/** Render the table with the calendar. */
export function Table(props: TableProps): JSX.Element {
	const { locale, fixedWeeks, weekStartsOn, firstWeekContainsDate, ISOWeek } =
		useDayPicker();

	const weeks = getMonthWeeks(props.displayMonth, {
		useFixedWeeks: Boolean(fixedWeeks),
		ISOWeek,
		locale,
		weekStartsOn,
		firstWeekContainsDate
	});

	console.log(weeks);

	return (
		<table
			id={props.id}
			role='grid'
			aria-labelledby={props['aria-labelledby']}
			className={style.root}
		>
			{/*{!hideHead && <Head />}*/}
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