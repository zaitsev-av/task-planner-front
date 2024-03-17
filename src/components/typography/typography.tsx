import { ElementType, ReactNode } from 'react';

type TypographyVariantType = 'heading' | 'text' | 'link' | 'error';

type AllowedTags = 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'a';
interface Props<T extends ElementType> {
	as?: T;
	children: ReactNode;
	className?: string;
	variant?: TypographyVariantType;
}

export const Typography = (props: Props<AllowedTags>) => {
	const {
		as: Component = 'span',
		children,
		className,
		variant = 'text',
		...rest
	} = props;
	return <Component {...rest}>{children}</Component>;
};
