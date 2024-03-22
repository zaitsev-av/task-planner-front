'use client';

import { DevTool } from '@hookform/devtools';
import { clsx } from 'clsx';
import { FormProvider, useForm } from 'react-hook-form';

import { useLoginForm } from '@/components/forms/login/use-login-form';
import { Typography } from '@/components/typography';

import { Card } from '../../card';

import style from './login-form.module.scss';
import { Button, Checkbox, ControlledInput } from '@/components';

interface Props {}
export const LoginForm = (props: Props) => {
	const classNames = {
		card: clsx(style.card),
		root: clsx(style.root),
		buttonBox: clsx(style.buttons)
	};

	const {
		handleSubmit,
		control,
		formState: { isDirty, isLoading, isValid }
	} = useLoginForm();
	console.log(
		isDirty,
		'-> isDirty',
		isLoading,
		'-->isLoading',
		isValid,
		'---> isValid'
	);
	return (
		<Card className={classNames.card}>
			<Typography
				as={'h1'}
				variant={'heading'}
			>
				Login
			</Typography>
			<form
				className={classNames.root}
				onSubmit={handleSubmit(data => console.log(data))}
			>
				<ControlledInput
					control={control}
					name={'email'}
					type={'text'}
					withLabel={true}
					labelText={'Login'}
				/>
				<ControlledInput
					name={'password'}
					type={'password'}
					withLabel={true}
					labelText={'Password'}
					control={control}
				/>
				<Checkbox
					label={'Remember me'}
					indent={true}
				/>
				<div className={classNames.buttonBox}>
					<Button type={'submit'}>Login</Button>
					<Button type={'button'}>Cansel</Button>
				</div>
			</form>
			<DevTool control={control} />
		</Card>
	);
};
