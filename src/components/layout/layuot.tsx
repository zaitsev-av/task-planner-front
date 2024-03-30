import { ReactNode } from 'react';

import { Heading } from '@/components/heading';
import { Sidebar } from '@/components/sidebar';

import style from './layuot.module.scss';

interface Props {
	children: ReactNode;
}
export const Layout = ({ children }: Props) => {
	return (
		<div className={style.root}>
			<Sidebar />
			<Heading name={'Heading'} />
			<main className={style.body}>{children}</main>
		</div>
	);
};
