import { useRef } from 'react';

import { Button } from '../button';

export interface DayProps {
	displayMonth: Date;
	date: Date;
}

export function Day(props: DayProps): JSX.Element {
	const buttonRef = useRef<HTMLButtonElement>(null);
	// const dayRender = useDayRender(props.date, props.displayMonth, buttonRef);

	// if (dayRender.isHidden) {
	// 	return <div role='gridcell'></div>;
	// }
	// if (!dayRender.isButton) {
	// 	return <div {...dayRender.divProps} />;
	// }
	return (
		<Button
			name='day'
			ref={buttonRef}
			//{...dayRender.buttonProps}
		/>
	);
}
