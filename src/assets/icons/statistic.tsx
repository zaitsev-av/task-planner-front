import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const SvgComponent = (
	props: SVGProps<SVGSVGElement>,
	ref: Ref<SVGSVGElement>
) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		fill='none'
		stroke='currentColor'
		strokeLinecap='round'
		strokeLinejoin='round'
		strokeWidth={2}
		className='lucide lucide-bar-chart-3'
		ref={ref}
		{...props}
	>
		<path d='M3 3v18h18M18 17V9M13 17V5M8 17v-3' />
	</svg>
);
const ForwardRef = forwardRef(SvgComponent);
export default memo(ForwardRef);
