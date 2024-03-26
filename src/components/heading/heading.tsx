import style from './heading.module.scss';

interface Props {
	name: string;
}
export const Heading = ({ name }: Props) => {
	return <header className={style.root}>{name}</header>;
};
