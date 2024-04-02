import { forwardRef } from 'react';

import IntrinsicElements = React.JSX.IntrinsicElements;

export type ButtonProps = IntrinsicElements['button'];

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(props, ref) => {
		return (
			<button
				{...props}
				ref={ref}
				type='button'
			/>
		);
	}
);
