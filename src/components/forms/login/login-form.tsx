'use client';

import { DevTool } from '@hookform/devtools';
import { clsx } from 'clsx';

import { ControlledCheckbox } from '@/components/controlled-checkbox';
import { useLoginForm } from '@/components/forms/login/use-login-form';

import style from './login-form.module.scss';
import {
	Button,
	Card,
	ControlledInput,
	EInputType,
	Typography
} from '@/components';

interface Props {}
export default function LoginForm(props: Props) {
	const classNames = {
		card: clsx(style.card),
		root: clsx(style.root),
		fields: clsx(style.field),
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
					className={classNames.fields}
				/>
				<ControlledInput
					name={'password'}
					type={EInputType.Password}
					withLabel={true}
					labelText={'Password'}
					control={control}
					className={classNames.fields}
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
					href={'редирект на регистрацию'}
					variant={'link'}
				>
					Sign Up
				</Typography>
			</div>
			<DevTool control={control} />
		</Card>
	);
}
