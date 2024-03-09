import { clsx } from 'clsx'
import { ComponentProps, ComponentPropsWithoutRef, ElementType } from 'react'

import style from './button.module.scss'

type ButtonVariantType = 'button' | 'a'

type ButtonProps<T extends ElementType = ButtonVariantType> = {
	/**
	 * Указывает тип элемента @type {'button' | 'a'}
	 */
	as?: T
	/**
	 *Занимает все свободное место в контейнере
	 */
	fullWidth?: boolean
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = ButtonVariantType>(
	props: ButtonProps<T>
) => {
	const { as = 'button', className, fullWidth, ...rest } = props
	const Component = as

	const classNames = {
		root: clsx(style.root, fullWidth && style.fullWidth, className)
	}

	return (
		<Component
			className={classNames.root}
			{...rest}
		/>
	)
}
