import * as React from 'react'
import { SVGProps, Ref, forwardRef, memo } from 'react'

const SvgComponent = (
	props: SVGProps<SVGSVGElement>,
	ref: Ref<SVGSVGElement>
) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='1em'
		height='1em'
		viewBox='0 0 24 24'
		ref={ref}
		{...props}
	>
		<path
			fill='currentColor'
			d='M12 17a2 2 0 0 0 2-2 2 2 0 0 0-2-2 2 2 0 0 0-2 2 2 2 0 0 0 2 2m6-9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h1V6a5 5 0 0 1 5-5 5 5 0 0 1 5 5v2zm-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3'
		/>
	</svg>
)
const ForwardRef = forwardRef(SvgComponent)
export default memo(ForwardRef)
