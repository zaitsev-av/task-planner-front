import * as SelectRdx from '@radix-ui/react-select';
import { CSSProperties, FC } from 'react';

import { SelectItem } from '@/components/shared/select/item/item';

import style from './select.module.scss';
import { ChevronDownIcon } from '@/assets';

export type SelectItemsType = {
	id: string;
	name: string;
};

interface Props {
	disabled?: boolean;
	items: SelectItemsType[];
	label?: string;
	onChange?: (value: string) => void;
	value?: string;
	width?: CSSProperties['width'];
}

export const Select: FC<Props> = props => {
	const { disabled, items, label, onChange, value, width = '100px' } = props;

	return (
		<div
			style={{
				alignItems: 'center',
				display: 'flex',
				gap: '10px',
				justifyContent: 'center'
			}}
		>
			{label && <label> {label} </label>}
			<SelectRdx.Root
				disabled={disabled}
				onValueChange={onChange}
				value={value}
			>
				<SelectRdx.Trigger
					className={style.trigger}
					style={{ width: width }}
				>
					<SelectRdx.Value placeholder={items[3].name} />
					<SelectRdx.Icon
						className={style.icon}
						data-state={disabled ? 'disabled' : undefined}
					>
						<ChevronDownIcon />
					</SelectRdx.Icon>
				</SelectRdx.Trigger>
				<SelectRdx.Portal>
					<SelectRdx.Content
						className={style.content}
						position={'popper'}
						side={'bottom'}
						sideOffset={0}
					>
						<SelectRdx.Viewport className={style.viewport}>
							{items.map(el => (
								<SelectItem
									key={el.id}
									value={el.id}
								>
									{el.name}
								</SelectItem>
							))}
						</SelectRdx.Viewport>
					</SelectRdx.Content>
				</SelectRdx.Portal>
			</SelectRdx.Root>
		</div>
	);
};
