import style from './navigation.module.scss';
import { ArrowLeftIcon, ArrowRightIcon } from '@/assets';

interface Props {}
export const Navigation = (props: Props) => {
	return (
		<div className={style.container}>
			<button className={style.root}>
				<ArrowLeftIcon />
				{/*Prev*/}
			</button>
			Название месяца
			<button className={style.root}>
				{/*Next*/}
				<ArrowRightIcon />
			</button>
		</div>
	);
};
