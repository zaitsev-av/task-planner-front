import {
	addWeeks,
	endOfMonth,
	getWeeksInMonth,
	Locale,
	startOfMonth,
	addDays,
	differenceInCalendarDays,
	endOfISOWeek,
	endOfWeek,
	getISOWeek,
	getWeek,
	startOfISOWeek,
	startOfWeek
} from 'date-fns';

export type MonthWeek = {
	weekNumber: number;
	dates: Date[];
};

export function getMonthWeeks(
	month: Date,
	options: {
		locale?: Locale;
		useFixedWeeks?: boolean;
		weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
		firstWeekContainsDate?: 1 | 4;
		ISOWeek?: boolean;
	}
): MonthWeek[] {
	const weeksInMonth: MonthWeek[] = daysToMonthWeeks(
		startOfMonth(month),
		endOfMonth(month),
		options
	);

	if (options?.useFixedWeeks) {
		const nrOfMonthWeeks = getWeeksInMonth(month, options);
		if (nrOfMonthWeeks < 6) {
			const lastWeek = weeksInMonth[weeksInMonth.length - 1];
			const lastDate = lastWeek.dates[lastWeek.dates.length - 1];
			const toDate = addWeeks(lastDate, 6 - nrOfMonthWeeks);
			const extraWeeks = daysToMonthWeeks(
				addWeeks(lastDate, 1),
				toDate,
				options
			);
			weeksInMonth.push(...extraWeeks);
		}
	}
	return weeksInMonth;
}

export function daysToMonthWeeks(
	fromDate: Date,
	toDate: Date,
	options?: {
		ISOWeek?: boolean;
		locale?: Locale;
		weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
		firstWeekContainsDate?: 1 | 4;
	}
): MonthWeek[] {
	const toWeek = options?.ISOWeek
		? endOfISOWeek(toDate)
		: endOfWeek(toDate, options);
	const fromWeek = options?.ISOWeek
		? startOfISOWeek(fromDate)
		: startOfWeek(fromDate, options);

	const nOfDays = differenceInCalendarDays(toWeek, fromWeek);
	const days: Date[] = [];

	for (let i = 0; i <= nOfDays; i++) {
		days.push(addDays(fromWeek, i));
	}

	const weeksInMonth = days.reduce((result: MonthWeek[], date) => {
		const weekNumber = options?.ISOWeek
			? getISOWeek(date)
			: getWeek(date, options);

		const existingWeek = result.find(value => value.weekNumber === weekNumber);
		if (existingWeek) {
			existingWeek.dates.push(date);
			return result;
		}
		result.push({
			weekNumber,
			dates: [date]
		});
		return result;
	}, []);

	return weeksInMonth;
}

export const parseDate = (fromYear: number, toYear: number) => {
	return {
		fromDate: new Date(fromYear, 0, 1),
		toDate: new Date(toYear, 11, 31)
	};
};
