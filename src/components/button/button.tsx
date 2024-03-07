import { clsx } from 'clsx'
import { ComponentProps, ComponentPropsWithoutRef, ElementType } from 'react'

import style from './button.module.scss'

type ButtonVariantType = 'button' | 'a'

type ButtonProps<T extends ElementType = ButtonVariantType> = {
	as?: T
	fullWidth?: boolean
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(
	props: ButtonProps<T>
) => {
	const { as = 'button', className, fullWidth, ...rest } = props
	const Component = as

	const classNames = {
		root: clsx(style.root, fullWidth && style.fullWidth, className)
	}

	return (
		<Component
			{...rest}
			className={classNames.root}
		/>
	)
}
