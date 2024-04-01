import { clsx } from 'clsx';
import { ComponentProps, PropsWithChildren } from 'react';

import style from './card.module.scss';

type Props = PropsWithChildren<ComponentProps<'div'>>;
export const Card = ({ children, className, ...rest }: Props) => {
	const classNames = clsx(className, style.root);

	return (
		<div
			className={classNames}
			{...rest}
		>
			{children}
		</div>
	);
};
