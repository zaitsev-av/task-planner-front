import { forwardRef } from 'react';

export type ButtonProps = React.JSX.IntrinsicElements['button'];

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
