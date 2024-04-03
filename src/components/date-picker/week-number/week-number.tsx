import { MouseEventHandler } from 'react';

import { useDayPicker } from '@/components/date-picker/Context';
import { Button } from '@/components/date-picker/button';

/**
 * The props for the {@link WeekNumber} component.
 */
export interface WeekNumberProps {
	/** The number of the week. */
	number: number;
	/** The dates in the week. */
	dates: Date[];
}
export function WeekNumber(props: WeekNumberProps): JSX.Element {
	const { number: weekNumber, dates } = props;
	const { locale } = useDayPicker();
	function formatWeekNumber(weekNumber: number): string {
		return `${weekNumber}`;
	}

	const content = formatWeekNumber(Number(weekNumber));

	// if () {
	// 	return (
	// 		<span
	// 			className={classNames.weeknumber}
	// 			style={styles.weeknumber}
	// 		>
	// 			{content}
	// 		</span>
	// 	);
	// }

	const handleClick: MouseEventHandler = function (e) {
		// onWeekNumberClick(weekNumber, dates, e);
	};

	return (
		<Button
			name='week-number'
			onClick={handleClick}
		>
			{content}
		</Button>
	);
}
