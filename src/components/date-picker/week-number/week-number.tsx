import { MouseEventHandler } from 'react';

import { useDayPicker } from '@/components/date-picker/Context';

import style from './week-number.module.scss';

export interface WeekNumberProps {
	number: number;
	dates: Date[];
}
export function WeekNumber(props: WeekNumberProps): JSX.Element {
	const { number: weekNumber, dates } = props;
	const { locale } = useDayPicker();
	function formatWeekNumber(weekNumber: number): string {
		return `${weekNumber}`;
	}

	const content = formatWeekNumber(Number(weekNumber));

	const handleClick: MouseEventHandler = function (e) {
		// onWeekNumberClick(weekNumber, dates, e);
	};

	return (
		<button
			name='week-number'
			onClick={handleClick}
			className={style.root}
		>
			{content}
		</button>
	);
}
