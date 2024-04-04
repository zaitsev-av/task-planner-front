import { addMonths, format } from 'date-fns';

import { useDayPicker } from '@/components/date-picker/Context';

import style from './navigation.module.scss';
import { ArrowLeftIcon, ArrowRightIcon } from '@/assets';

interface Props {}
export const Navigation = (props: Props) => {
	const { month, locale, onChangeMonth } = useDayPicker();

	// const onChangeMonth = () => {
	// 	const nextMonth = addMonths(month!, 1);
	// 	// month = nextMonth
	// };

	const monthName = format(month!, 'MMMM', {
		locale
	});
	return (
		<div className={style.container}>
			<button className={style.root}>
				<ArrowLeftIcon />
				{/*Prev*/}
			</button>
			Название месяца {monthName}
			<button
				className={style.root}
				onClick={onChangeMonth}
			>
				{/*Next*/}
				<ArrowRightIcon />
			</button>
		</div>
	);
};
