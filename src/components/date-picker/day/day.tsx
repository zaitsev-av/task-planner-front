import { clsx } from 'clsx';
import { endOfMonth, isAfter, isBefore, isToday, startOfMonth } from 'date-fns';
import { useRef } from 'react';

import { useDayPicker } from '@/components/date-picker/Context';

import style from './day.module.scss';

export interface DayProps {
	displayMonth: Date;
	date: Date;
}
const isMonthBoundary = (current: Date, target: Date) => {
	const startOfMonthDate = startOfMonth(current);
	const endOfMonthDate = endOfMonth(current);

	const isPreviousMonth = isBefore(target, startOfMonthDate);
	const isNextMonth = isAfter(target, endOfMonthDate);
	return isPreviousMonth || isNextMonth;
};

export function Day(props: DayProps): JSX.Element {
	const buttonRef = useRef<HTMLButtonElement>(null);
	const isNoCurrentMonth = isMonthBoundary(props.displayMonth, props.date);
	const today = isToday(props.date ?? new Date());
	const classNames = {
		root: clsx(
			style.root,
			today && style.today,
			isNoCurrentMonth && style.noCurrent
		)
	};

	console.log(isNoCurrentMonth, 'isDay');

	return (
		<button
			className={classNames.root}
			disabled={isNoCurrentMonth}
		>
			{props.date.getDate()}
		</button>
	);
}
