'use client';

import { clsx } from 'clsx';
import { forwardRef, InputHTMLAttributes, Ref, useState } from 'react';

import { PasswordIcon } from '../../assets/icons';

import style from './input.module.scss';
import { Typography } from '@/components';

type CommonInputType = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'type' | 'placeholder'
>;

interface Props extends CommonInputType {
	type: 'text' | 'password' | 'email';
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
			...rest
		}: InputPropsType,
		forwardRef: Ref<HTMLInputElement>
	) => {
		const [isVisible, setIsVisible] = useState<boolean>(false);

		const classNames = {
			box: clsx(style.box),
			field: clsx(style.field),
			label: clsx(style.label),
			icon: clsx(style.icon)
		};

		return (
			<div>
				<div className={classNames.box}>
					<input
						className={classNames.field}
						type={isVisible ? 'text' : type}
						ref={forwardRef}
						placeholder={placeholder}
						data-value={value ? 'skip' : ''}
						required
						{...rest}
					/>
					{withLabel && !placeholder && (
						<label className={classNames.label}>{labelText}</label>
					)}
					<PasswordIcon
						onClick={() => setIsVisible(prevState => !prevState)}
						isVisible={isVisible}
						className={classNames.icon}
						data-icon={type === 'password' ? 'password' : 'none'}
					/>
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
