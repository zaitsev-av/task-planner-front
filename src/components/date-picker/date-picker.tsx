import { addMonths } from 'date-fns';
import dayjs from 'dayjs';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import 'react-day-picker/dist/style.css';

import {
	DayPickerProvider,
	initialProps,
	useDayPicker
} from '@/components/date-picker/Context';
import { Navigation } from '@/components/date-picker/navigation';
import { Table } from '@/components/date-picker/table/table';

dayjs.extend(LocalizedFormat);

interface Props {
	fromYear: number;
	toYear: number;
	weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
	// onChange: (value: string) => void;
	// value: string;
	// position?: 'left' | 'right';
}
export const DatePicker = () => {
	const nextMonth = addMonths(new Date(), 1);

	return (
		<div>
			<DayPickerProvider initialProps={initialProps}>
				<Navigation />
				<Table displayMonth={new Date()} />
			</DayPickerProvider>
		</div>
	);
};
