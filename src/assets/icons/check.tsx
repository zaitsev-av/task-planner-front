import * as React from 'react'
import { forwardRef, Ref, SVGProps } from 'react'

const SvgComponent = (
	props: SVGProps<SVGSVGElement>,
	ref: Ref<SVGSVGElement>
) => (
	<svg
		width={12}
		height={10}
		ref={ref}
		{...props}
	>
		<path d='m1.5 6 3 3 6-8' />
	</svg>
)
const ForwardRef = forwardRef(SvgComponent)
export default (ForwardRef)
