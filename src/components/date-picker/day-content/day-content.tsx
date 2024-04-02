import { DayProps } from 'react-day-picker';

import style from './day-content.module.scss';

interface Props extends DayProps {
	description?: string;
}
export function CustomDay({ date }: Props) {
	console.log(date, 'date');
	return <span className={style.root}>{date.getDate()}</span>;
}
