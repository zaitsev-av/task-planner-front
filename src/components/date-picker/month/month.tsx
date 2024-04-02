import { ReactNode } from 'react';

export type MonthsProps = { children: ReactNode };

export function Months(props: MonthsProps): JSX.Element {
	return <div>{props.children}</div>;
}
