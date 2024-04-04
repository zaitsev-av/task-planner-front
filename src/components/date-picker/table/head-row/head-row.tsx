import { addDays, format, Locale, startOfISOWeek, startOfWeek } from 'date-fns';

import { useDayPicker } from '@/components/date-picker/Context';

import style from './head-row.module.scss';

interface Props {}
export function HeadRow(): JSX.Element {
	const { showWeekNumber, locale, weekStartsOn, ISOWeek } = useDayPicker();
	function getWeekdays(
		locale?: Locale,
		weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6,
		ISOWeek?: boolean
	): Date[] {
		const start = ISOWeek
			? startOfISOWeek(new Date())
			: startOfWeek(new Date(), { locale, weekStartsOn });

		const days = [];
		for (let i = 0; i < 7; i++) {
			const day = addDays(start, i);
			days.push(day);
		}
		return days;
	}

	const weekdays = getWeekdays(locale, weekStartsOn, ISOWeek);

	return (
		<tr className={style.root}>
			<td></td>
			{weekdays.map((weekday, i) => (
				<th
					key={i}
					scope='col'
				>
					{format(weekday, 'cccccc', { locale })}
				</th>
			))}
		</tr>
	);
}
