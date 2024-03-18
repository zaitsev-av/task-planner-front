import { clsx } from 'clsx';
import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

import style from './typography.module.scss';

type TypographyVariantType = 'heading' | 'text' | 'link' | 'error';

type AllowedTags = 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'a';
interface Props<T extends ElementType> {
	as?: T;
	children: ReactNode;
	className?: string;
	variant?: TypographyVariantType;
}

//todo нужна типизация которая сузит типы до AllowedTags и при этом будут доступны
// все возможные атрибуты от этого элемента не должно быть так что у span есть href

export const Typography = <T extends ElementType>(
	props: Props<AllowedTags> & ComponentPropsWithoutRef<T>
) => {
	const {
		as: Component = 'span',
		children,
		className,
		variant = 'text',
		...rest
	} = props;

	const classNames = {
		root: clsx(variant === 'link' && style.link)
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
