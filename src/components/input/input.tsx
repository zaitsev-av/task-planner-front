import { clsx } from 'clsx'
import { forwardRef, InputHTMLAttributes, Ref, useState } from 'react'

import { PasswordIcon } from '../../assets/icons'

import style from './input.module.scss'

type CommonInputType = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'type' | 'placeholder'
>

interface Props extends CommonInputType {
	type: 'text' | 'password' | 'email'
	placeholder?: string
}

type ConditionalLabelPropsType =
	| {
			withLabel: true
			labelText: string
	  }
	| {
			withLabel?: false
			labelText: never
	  }

type InputPropsType = Props & ConditionalLabelPropsType
export const Input = forwardRef(
	(
		{
			type,
			withLabel = false,
			labelText,
			placeholder,
			...rest
		}: InputPropsType,
		forwardRef: Ref<HTMLInputElement>
	) => {
		const [isVisible, setIsVisible] = useState<boolean>(false)
		const classNames = {
			box: clsx(style.box),
			field: clsx(style.field),
			label: clsx(style.label),
			icon: clsx(style.icon)
		}
		//todo если есть данные в инпуте, и используется label то не опускать его на текст внутри инпута, оставить его в верхнем положении
		//todo добавить иконки
		//todo настроить обработчики событий
		return (
			<div className={classNames.box}>
				<input
					className={classNames.field}
					type={isVisible ? 'text' : type}
					ref={forwardRef}
					placeholder={placeholder}
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
		)
	}
)
