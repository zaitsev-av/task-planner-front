import { clsx } from 'clsx';
import {
	ChangeEvent,
	forwardRef,
	InputHTMLAttributes,
	Ref,
	useId
} from 'react';

import { CheckIcon } from '../../assets/icons';

import style from './checkbox.module.scss';

export interface ICheckboxProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'checked'> {
	label?: string;
	/**
	 * Пропс для связывания label и checkbox
	 */
	id?: string;
	isChecked?: boolean;
	/**
	 * Обработчик события для получения состояния checkbox
	 */
	onChecked?: (checked: boolean) => void;
	/**
	 * Добавляет отступ слева 8px
	 */
	indent?: boolean;
}
export const Checkbox = forwardRef(
	(
		{
			id,
			label,
			onChecked,
			disabled,
			type = 'checkbox',
			isChecked,
			indent = false,
			...rest
		}: ICheckboxProps,
		forwardedRef: Ref<HTMLInputElement>
	) => {
		const classNames = {
			root: clsx(indent && style.indent, style.wrapper),
			input: clsx(style.inpCbx),
			label: clsx(style.cbx, disabled && style.disabled),
			iconBox: clsx(style.box)
		};

		const onCheckedChange = (event: ChangeEvent<HTMLInputElement>) => {
			onChecked && onChecked(event.target.checked);
		};

		const elementId = id || useId();
		return (
			<div className={classNames.root}>
				<input
					id={elementId}
					ref={forwardedRef}
					type={type}
					disabled={disabled}
					checked={isChecked}
					onChange={onCheckedChange}
					className={classNames.input}
					{...rest}
				/>
				<label
					htmlFor={elementId}
					className={classNames.label}
				>
					<span className={classNames.iconBox}>
						<CheckIcon />
					</span>
					<span>{label}</span>
				</label>
			</div>
		);
	}
);
