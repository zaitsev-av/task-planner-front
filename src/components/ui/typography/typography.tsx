import { clsx } from 'clsx';
import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

import style from './typography.module.scss';

type TypographyVariantType = 'heading' | 'text' | 'link' | 'error';

type AllowedTags = 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'a';
interface Props<T extends ElementType> {
	/**
	 * Возможные типы
	 * @param {AllowedTags}
	 */
	as?: T extends AllowedTags ? T : never; // Сужение типа
	children: ReactNode;
	className?: string;
	variant?: TypographyVariantType;
}

export const Typography = <T extends ElementType = 'span'>(
	props: Props<T> & Omit<ComponentPropsWithoutRef<T>, keyof Props<T>>
) => {
	const {
		as: Component = 'span',
		children,
		className,
		variant = 'text',
		...rest
	} = props;

	const classNames = {
		root: clsx(
			style[variant]
			// variant === 'link' && style.link,
			// variant === 'error' && style.error
		)
	};
	return (
		<Component
			{...rest}
			className={classNames.root}
		>
			{children}
		</Component>
	);
};
