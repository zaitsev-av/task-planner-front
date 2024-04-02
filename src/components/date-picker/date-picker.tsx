import dayjs from 'dayjs';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import 'react-day-picker/dist/style.css';

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
	const parseDate = (fromYear: number, toYear: number) => {
		return {
			fromDate: new Date(fromYear, 0, 1),
			toDate: new Date(toYear, 11, 31)
		};
	};
	// const [selected, setSelected] = useState<Date>();
	// const [isShow, setIsShow] = useState(false);
	// const ref = useRef<HTMLDivElement>(null);
	//
	// useOnClickOutside(ref, () => {});
	// const handleDaySelect: SelectSingleEventHandler = data => {
	// 	const ISOdate = data?.toISOString();
	// 	setSelected(data);
	// 	if (!ISOdate) return onChange('');
	// 	onChange(ISOdate);
	// 	//закрыть календарь
	// };
	return (
		<div>
			<Table displayMonth={new Date()} />
		</div>
	);
};
