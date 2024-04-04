import { addMonths, Locale } from 'date-fns';
import { ru } from 'date-fns/locale';
import { createContext, CSSProperties, ReactNode, useContext } from 'react';

import { parseDate } from '@/components/date-picker/utils';

export interface IBase {
	className?: string;
	style?: CSSProperties;
	id?: string;
	defaultMonth?: Date;
	month?: Date;
	numberOfMonths?: number;
	fromDate?: Date;
	toDate?: Date;
	fromMonth?: Date;
	toMonth?: Date;
	fromYear?: number;
	toYear?: number;
	disableNavigation?: boolean;
	pagedNavigation?: boolean;
	reverseMonths?: boolean;
	fixedWeeks?: boolean;
	hideHead?: boolean;
	showOutsideDays?: boolean;
	showWeekNumber?: boolean;
	weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
	firstWeekContainsDate?: 1 | 4;
	ISOWeek?: boolean;
	footer?: ReactNode;
	initialFocus?: boolean;
	today?: Date;
	locale?: Locale;
	onChangeMonth: () => void;
}
const nextMonth = addMonths(new Date(), 1);
export const initialProps: IBase = {
	className: '',
	style: {},
	id: '',
	defaultMonth: undefined,
	month: new Date(),
	numberOfMonths: 0,
	fromDate: undefined,
	toDate: undefined,
	fromMonth: undefined,
	toMonth: undefined,
	fromYear: 0,
	toYear: 0,
	disableNavigation: false,
	pagedNavigation: false,
	reverseMonths: false,
	fixedWeeks: false,
	hideHead: false,
	showOutsideDays: false,
	showWeekNumber: false,
	weekStartsOn: 1,
	firstWeekContainsDate: 1,
	ISOWeek: false,
	today: new Date(),
	locale: ru,
	onChangeMonth: () => {
		const nextMonth = addMonths(new Date(), 1);
		console.log('called', nextMonth);
		console.log('called', initialProps.month);

		initialProps.month = nextMonth;
	}
};

export interface DayPickerContextValue extends IBase {
	required?: boolean;
	min?: number;
	max?: number;
	numberOfMonths?: number;
	today?: Date;
	fromDate?: Date;
	toDate?: Date;
}

export const DayPickerContext = createContext<
	DayPickerContextValue | undefined
>(undefined);

export interface DayPickerProviderProps {
	/** The initial props from the DayPicker component. */
	initialProps: IBase;
	children?: ReactNode;
}
export function DayPickerProvider(props: DayPickerProviderProps): JSX.Element {
	const { initialProps } = props;

	const { fromDate, toDate } = parseDate(
		//todo удалить костыль
		initialProps.fromYear ?? 1,
		initialProps.toYear ?? 2
	);

	const value = {
		...initialProps,

		fromDate,
		toDate
	};

	return (
		<DayPickerContext.Provider value={value}>
			{props.children}
		</DayPickerContext.Provider>
	);
}

export function useDayPicker(): DayPickerContextValue {
	const context = useContext(DayPickerContext);
	if (!context) {
		throw new Error(`useDayPicker must be used within a DayPickerProvider.`);
	}
	return context;
}
