import { clsx } from 'clsx';
import { isToday } from 'date-fns';
import { useRef } from 'react';

import style from './day.module.scss';

export interface DayProps {
	displayMonth: Date;
	date: Date;
}

export function Day(props: DayProps): JSX.Element {
	const buttonRef = useRef<HTMLButtonElement>(null);
	// const dayRender = useDayRender(props.date, props.displayMonth, buttonRef);
	const today = isToday(props.date ?? new Date());
	const classNames = {
		root: clsx(style.root, today && style.today)
	};
	return <div className={classNames.root}>{props.date.getDate()}</div>;
}
