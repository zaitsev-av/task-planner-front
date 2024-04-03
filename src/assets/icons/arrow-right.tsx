import { SVGProps, Ref, forwardRef, memo } from 'react';

const SvgComponent = (
	props: SVGProps<SVGSVGElement>,
	ref: Ref<SVGSVGElement>
) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={16}
		height={16}
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth={2}
		strokeLinecap='round'
		strokeLinejoin='round'
		className='lucide lucide-arrow-right'
		ref={ref}
		{...props}
	>
		<path d='M5 12h14' />
		<path d='m12 5 7 7-7 7' />
	</svg>
);
const ForwardRef = forwardRef(SvgComponent);
export default memo(ForwardRef);
