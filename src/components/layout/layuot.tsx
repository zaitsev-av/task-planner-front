import { Heading } from '@/components/heading';
import { Sidebar } from '@/components/sidebar';

import style from './layuot.module.scss';

export const Layout = () => {
	return (
		<>
			<Sidebar />
			<Heading name={'Heading'} />
		</>
	);
};
