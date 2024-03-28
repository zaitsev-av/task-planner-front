import { Heading } from '@/components/heading';
import { Sidebar } from '@/components/sidebar';

import style from './layuot.module.scss';

export const Layout = () => {
	return (
		<div className={style.root}>
			<Heading name={'Heading'} />
			<Sidebar />
		</div>
	);
};
