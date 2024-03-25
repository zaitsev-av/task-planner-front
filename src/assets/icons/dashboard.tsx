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
		className='lucide lucide-layout-dashboard'
		ref={ref}
		{...props}
	>
		<rect
			width={7}
			height={9}
			x={3}
			y={3}
			rx={1}
		/>
		<rect
			width={7}
			height={5}
			x={14}
			y={3}
			rx={1}
		/>
		<rect
			width={7}
			height={9}
			x={14}
			y={12}
			rx={1}
		/>
		<rect
			width={7}
			height={5}
			x={3}
			y={16}
			rx={1}
		/>
	</svg>
);
const ForwardRef = forwardRef(SvgComponent);
export default memo(ForwardRef);
