import type { ReactNode } from 'react';

import { Heading } from '@/components/heading';
import { Sidebar } from '@/components/sidebar';

import style from './app-layuot.module.scss';

interface Props {
	children: ReactNode;
}
export const AppLayout = ({ children }: Props) => {
	return (
		<div className={style.root}>
			<Sidebar />
			<Heading name={'Heading'} />
			<main className={style.body}>{children}</main>
		</div>
	);
};
