import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const SvgComponent = (
	props: SVGProps<SVGSVGElement>,
	ref: Ref<SVGSVGElement>
) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={36}
		height={36}
		fill='none'
		stroke='currentColor'
		strokeLinecap='round'
		strokeLinejoin='round'
		strokeWidth={2}
		className='lucide lucide-alarm-clock-check'
		viewBox='0 0 24 24'
		ref={ref}
		{...props}
	>
		<circle
			cx={12}
			cy={13}
			r={8}
		/>
		<path d='M5 3 2 6M22 6l-3-3M6.38 18.7 4 21M17.64 18.67 20 21M9 13l2 2 4-4' />
	</svg>
);
const ForwardRef = forwardRef(SvgComponent);
export default memo(ForwardRef);
