'use client';

import { clsx } from 'clsx';

import { Typography } from '@/components/typography';

import { Card } from '../../card';

import style from './login-form.module.scss';
import { Button, Checkbox, Input } from '@/components';

interface Props {}
export const LoginForm = (props: Props) => {
	const classNames = {
		card: clsx(style.card),
		root: clsx(style.root),
		buttonBox: clsx(style.buttons)
	};

	return (
		<Card className={classNames.card}>
			<form className={classNames.root}>
				<Input
					type={'text'}
					labelText={'Login'}
					withLabel
				/>
				<Input
					type={'password'}
					labelText={'Password'}
					withLabel
				/>
				<Checkbox
					label={'Remember me'}
					indent={true}
				/>
				<div className={classNames.buttonBox}>
					<Button type={'button'}>Login</Button>
					<Button type={'button'}>Cansel</Button>
				</div>
			</form>
		</Card>
	);
};
