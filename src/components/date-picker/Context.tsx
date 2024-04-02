import { Locale } from 'date-fns';
import { createContext, ReactNode, useContext } from 'react';
import { DayPickerProps } from 'react-day-picker';

import { parseDate } from '@/components/date-picker/utils';

/**
 * The value of the {@link DayPickerContext} extends the props from DayPicker
 * with default and cleaned up values.
 */
export interface DayPickerContextValue {
	required?: boolean;
	min?: number;
	max?: number;
	numberOfMonths: number;
	today: Date;
	fromDate: Date;
	toDate: Date;
}

/**
 * The DayPicker context shares the props passed to DayPicker within internal
 * and custom components. It is used to set the default values and perform
 * one-time calculations required to render the days.
 *
 * Access to this context from the {@link useDayPicker} hook.
 */
export const DayPickerContext = createContext<
	DayPickerContextValue | undefined
>(undefined);

/** The props for the {@link DayPickerProvider}. */
export interface DayPickerProviderProps {
	/** The initial props from the DayPicker component. */
	initialProps: DayPickerProps;
	children?: ReactNode;
}
export function DayPickerProvider(props: DayPickerProviderProps): JSX.Element {
	const { initialProps } = props;

	// const defaultContextValues = getDefaultContextValues();

	const { fromDate, toDate } = parseDate(
		//todo удалить костыль
		initialProps.fromYear ?? 1,
		initialProps.toYear ?? 2
	);

	const value: {
		defaultMonth?: Date;
		reverseMonths?: boolean;
		dir?: string;
		mode?: 'default' | undefined | 'single' | 'multiple' | 'range';
		id?: string;
		weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
		pagedNavigation?: boolean;
		numberOfMonths?: number;
		nonce?: string | undefined;
		fromDate: Date;
		ISOWeek?: boolean;
		month?: Date;
		fromMonth?: Date;
		fixedWeeks?: boolean;
		initialFocus?: boolean;
		showOutsideDays?: boolean;
		showWeekNumber?: boolean;
		locale?: Locale;
		title?: string;

		fromYear?: number;
		today?: Date;
		lang?: string;
		toYear?: number;
		toDate: Date;
		toMonth?: Date;
		disableNavigation?: boolean;
		firstWeekContainsDate?: 1 | 4;
		hideHead?: boolean;
	} = {
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

/**
 * Hook to access the {@link DayPickerContextValue}.
 *
 * Use the DayPicker context to access to the props passed to DayPicker inside
 * internal or custom components.
 */
export function useDayPicker(): DayPickerContextValue {
	const context = useContext(DayPickerContext);
	if (!context) {
		throw new Error(`useDayPicker must be used within a DayPickerProvider.`);
	}
	return context;
}
