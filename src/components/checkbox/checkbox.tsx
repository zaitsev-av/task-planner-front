import { clsx } from 'clsx'

import { CheckIcon } from '@/assets/icons'

import style from './checkbox.module.scss'

interface Props {}
export const Checkbox = (props: Props) => {
	const classNames = {
		root: clsx(style.wrapper),
		input: clsx(style.inpCbx)
	}

	return (
		<div className={classNames.root}>
			<input
				type='checkbox'
				id='cbx-46'
				className={classNames.input}
			/>
			<label
				htmlFor='cbx-46'
				className={style.cbx}
			>
				<span className={style.box}>
					<svg
						viewBox='0 0 12 10'
						height='10px'
						width='12px'
					>
						<polyline points='1.5 6 4.5 9 10.5 1'></polyline>
					</svg>
					{/*<CheckIcon />*/}
				</span>
				<span>Checkbox</span>
			</label>
		</div>
	)
}
