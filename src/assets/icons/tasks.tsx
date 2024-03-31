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
		className='lucide lucide-list-todo'
		ref={ref}
		{...props}
	>
		<rect
			width={6}
			height={6}
			x={3}
			y={5}
			rx={1}
		/>
		<path d='m3 17 2 2 4-4M13 6h8M13 12h8M13 18h8' />
	</svg>
);
const ForwardRef = forwardRef(SvgComponent);
export default memo(ForwardRef);
