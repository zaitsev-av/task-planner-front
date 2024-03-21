import type { Metadata } from 'next';

import { NO_INDEX_PAGE } from '@/constants/seo.constans';

import { LoginForm, Typography } from '@/components';

export const metadata: Metadata = {
	title: 'Auth',
	...NO_INDEX_PAGE
};

export default function AuthPage() {
	return (
		<div>
			<LoginForm />
		</div>
	);
}
