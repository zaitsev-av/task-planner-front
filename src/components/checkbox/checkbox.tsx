import { clsx } from 'clsx'
import { ChangeEvent, forwardRef, InputHTMLAttributes, Ref } from 'react'

import { CheckIcon } from '../../assets/icons'

import style from './checkbox.module.scss'

interface Props
	extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'checked'> {
	label: string
	/**
	 * Пропс для связывания label и checkbox
	 */
	htmlFor: string
	checked?: boolean
	/**
	 * Обработчик события для получения состояния checkbox
	 */
	onChecked?: (checked: boolean) => void
}
export const Checkbox = forwardRef(
	(
		{ htmlFor, label, onChecked, type = 'checkbox', ...rest }: Props,
		forwardedRef: Ref<HTMLInputElement>
	) => {
		const classNames = {
			root: clsx(style.wrapper),
			input: clsx(style.inpCbx),
			label: clsx(style.cbx),
			iconBox: clsx(style.box)
		}

		const onCheckedChange = (event: ChangeEvent<HTMLInputElement>) => {
			onChecked && onChecked(event.target.checked)
		}

		// todo описать стили для состояния disabled

		return (
			<div className={classNames.root}>
				<input
					type={type}
					id={htmlFor}
					className={classNames.input}
					onChange={onCheckedChange}
					ref={forwardedRef}
					{...rest}
				/>
				<label
					htmlFor={htmlFor}
					className={classNames.label}
				>
					<span className={classNames.iconBox}>
						<CheckIcon />
					</span>
					<span>{label}</span>
				</label>
			</div>
		)
	}
)
