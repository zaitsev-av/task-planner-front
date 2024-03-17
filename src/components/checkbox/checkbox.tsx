import { clsx } from 'clsx';
import { ChangeEvent, forwardRef, InputHTMLAttributes, Ref } from 'react';

import { CheckIcon } from '../../assets/icons';

import style from './checkbox.module.scss';

export interface ICheckboxProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'checked'> {
	label?: string;
	/**
	 * Пропс для связывания label и checkbox
	 */
	htmlFor?: string;
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
			htmlFor,
			label,
			onChecked,
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
			label: clsx(style.cbx),
			iconBox: clsx(style.box)
		};

		const onCheckedChange = (event: ChangeEvent<HTMLInputElement>) => {
			onChecked && onChecked(event.target.checked);
		};

		// todo описать стили для состояния disabled
		//костыль на время без него не срабатывает чекбокс
		const generatedHtmlFor =
			htmlFor || `checkbox-${Math.random().toString(36).substring(2)}`;
		return (
			<div className={classNames.root}>
				<input
					id={generatedHtmlFor}
					ref={forwardedRef}
					type={type}
					checked={isChecked}
					onChange={onCheckedChange}
					className={classNames.input}
					{...rest}
				/>
				<label
					htmlFor={generatedHtmlFor}
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
