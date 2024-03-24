'use client';

import { DevTool } from '@hookform/devtools';
import { clsx } from 'clsx';

import { useSignUpForm } from '@/components/forms/sign-up/use-sign-up-form';

import style from './sign-up-form.module.scss';
import {
	Button,
	Card,
	ControlledInput,
	EInputType,
	Typography
} from '@/components';

interface Props {}
export const SignUpForm = (props: Props) => {
	const classNames = {
		card: clsx(style.card),
		root: clsx(style.root),
		fields: clsx(style.field),
		info: clsx(style.info)
	};

	const {
		watch,
		setError,
		clearErrors,
		handleSubmit,
		control,
		formState: { isDirty, isLoading, isValid }
	} = useSignUpForm();

	const onBlurConfirmPassword = () => {
		//решает проблему когда поля были заполнены, но юзер изменил пароль
		// ошибка не показывается, с этой функцией покажет при клике на поле.
		if (watch('password') != watch('cPassword')) {
			return setError('cPassword', {
				message: 'Пароли не совпадают',
				type: 'custom'
			});
		}

		clearErrors('cPassword');
	};

	const isDisabled = !isDirty || !isValid || isLoading;
	//todo добавить reset после отправки формы
	return (
		<Card className={classNames.card}>
			<Typography
				as={'h1'}
				variant={'heading'}
			>
				Sign Up
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
					labelText={'Email'}
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
				<ControlledInput
					name={'cPassword'}
					type={EInputType.Password}
					withLabel={true}
					labelText={'Confirm password'}
					control={control}
					onBlur={onBlurConfirmPassword}
					className={classNames.fields}
				/>
				<Button
					type={'submit'}
					fullWidth={true}
					disabled={isDisabled}
				>
					Sign Up
				</Button>
			</form>
			<div className={classNames.info}>
				<Typography
					as={'a'}
					href={'редирект на страницу логина'}
					variant={'link'}
				>
					Do you already have an account?
				</Typography>
			</div>
			<DevTool control={control} />
		</Card>
	);
};
