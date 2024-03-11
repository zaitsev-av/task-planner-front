import { clsx } from 'clsx'

import style from './input.module.scss'

interface Props {}
export const Input = (props: Props) => {
	const classNames = {
		box: clsx(style.box),
		field: clsx(style.field),
		label: clsx(style.label)
	}
	return (
		<div className={classNames.box}>
			<input
				className={classNames.field}
				type='text'
				autoComplete='off'
			/>
			<label
				className={classNames.label}
				htmlFor='name'
			>
				Username
			</label>
		</div>
	)
}
