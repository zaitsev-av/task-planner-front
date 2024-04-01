import * as Select from '@radix-ui/react-select';
import { SelectItemProps } from '@radix-ui/react-select';
import { clsx } from 'clsx';
import { FC, ReactNode, forwardRef } from 'react';

import { CheckIcon } from '@/assets/icons';

import style from './item.module.scss';
import { Typography } from '@/components';

interface Props extends SelectItemProps {
	children: ReactNode;
	className?: string;
}

export const SelectItem: FC<Props> = forwardRef(
	({ children, className, ...props }, ref: any) => {
		const cn = {
			item: clsx(style.item, className)
		};

		return (
			<Select.Item
				className={cn.item}
				{...props}
				ref={ref}
			>
				<Select.ItemText>
					<Typography>{children}</Typography>
				</Select.ItemText>
			</Select.Item>
		);
	}
);
