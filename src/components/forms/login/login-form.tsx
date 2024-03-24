'use client';

import { DevTool } from '@hookform/devtools';
import { clsx } from 'clsx';

import { ControlledCheckbox } from '@/components/controlled-checkbox';
import { useLoginForm } from '@/components/forms/login/use-login-form';

import style from './login-form.module.scss';
import { Card } from '@/components';
import { Typography } from '@/components';
import { Button, Checkbox, ControlledInput, EInputType } from '@/components';

interface Props {}
export const LoginForm = (props: Props) => {
	const classNames = {
		card: clsx(style.card),
		root: clsx(style.root),
		info: clsx(style.info)
	};

	const {
		handleSubmit,
		control,
		formState: { isDirty, isLoading, isValid }
	} = useLoginForm();

	const isDisabled = !isDirty || !isValid || isLoading;
	//todo добавить reset после отправки формы
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
					type={EInputType.Text}
					withLabel={true}
					labelText={'Login'}
				/>
				<ControlledInput
					name={'password'}
					type={EInputType.Password}
					withLabel={true}
					labelText={'Password'}
					control={control}
				/>
				<ControlledCheckbox
					control={control}
					name={'rememberMe'}
					label={'Remember me'}
					indent={true}
				/>
				<Button
					type={'submit'}
					fullWidth={true}
					disabled={isDisabled}
				>
					Login
				</Button>
			</form>
			<div className={classNames.info}>
				<Typography
					as={'a'}
					href={'#'}
					variant={'link'}
				>
					Registration
				</Typography>
			</div>
			<DevTool control={control} />
		</Card>
	);
};
