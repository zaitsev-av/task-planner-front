'use client';

import { clsx } from 'clsx';
import { forwardRef, InputHTMLAttributes, Ref, useState } from 'react';

import { PasswordIcon } from '../../assets/icons';

import style from './input.module.scss';
import { Typography } from '@/components';

export enum EInputType {
	Text = 'text',
	Password = 'password',
	Email = 'email'
}

type CommonInputType = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'type' | 'placeholder'
>;

interface Props extends CommonInputType {
	type: EInputType;
	error?: string;
	placeholder?: string;
}

type ConditionalLabelPropsType = {
	withLabel: boolean;
	labelText?: string;
};

export type InputPropsType = Props & ConditionalLabelPropsType;
export const Input = forwardRef<HTMLInputElement, InputPropsType>(
	(
		{
			type,
			value,
			error,
			withLabel = true,
			labelText,
			placeholder,
			disabled,
			...rest
		}: InputPropsType,
		forwardRef: Ref<HTMLInputElement>
	) => {
		const [isVisible, setIsVisible] = useState<boolean>(false);

		const classNames = {
			box: clsx(style.box, disabled && style.disabled),
			field: clsx(style.field),
			label: clsx(style.label, disabled && style.disabled),
			icon: clsx(style.icon, disabled && style.disabled),
			button: clsx(style.iconButton)
		};

		const passwordButton = type === EInputType.Password && (
			<button
				disabled={disabled}
				className={classNames.button}
				onClick={() => setIsVisible(prevState => !prevState)}
			>
				<PasswordIcon
					isVisible={isVisible}
					className={classNames.icon}
					data-icon={type === 'password' ? 'password' : 'none'}
				/>
			</button>
		);

		return (
			<div>
				<div className={classNames.box}>
					<input
						className={classNames.field}
						type={isVisible ? 'text' : type}
						ref={forwardRef}
						placeholder={placeholder}
						data-value={value ? 'skip' : ''}
						disabled={disabled}
						required
						{...rest}
					/>
					{withLabel && !placeholder && (
						<label
							className={classNames.label}
							aria-disabled={disabled}
						>
							{labelText}
						</label>
					)}
					{passwordButton}
				</div>
				{error && (
					<Typography
						as={'span'}
						variant={'error'}
					>
						{error}
					</Typography>
				)}
			</div>
		);
	}
);
