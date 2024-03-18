import type { Metadata } from 'next';

import { NO_INDEX_PAGE } from '@/constants/seo.constans';

import { Typography } from '@/components';

export const metadata: Metadata = {
	title: 'Auth',
	...NO_INDEX_PAGE
};

export default function AuthPage() {
	return (
		<div>
			<Typography
				variant={'link'}
				as={'span'}
				href={''}
			>
				Auth
			</Typography>
		</div>
	);
}
