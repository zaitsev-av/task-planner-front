import { clsx } from 'clsx'
import { ReactNode } from 'react'

import style from './card.module.scss'

interface Props {
	children: ReactNode
	className?: string
}
export const Card = ({ children, className }: Props) => {
	const classNames = {
		root: clsx(className, style.root)
	}
	return <div className={classNames.root}>{children}</div>
}
