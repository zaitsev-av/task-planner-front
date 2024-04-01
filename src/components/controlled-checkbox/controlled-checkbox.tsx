'use client';

import {
	FieldValues,
	useController,
	UseControllerProps
} from 'react-hook-form';

import { Checkbox, ICheckboxProps } from '@/components';

type ControlledCheckboxType<T extends FieldValues> = UseControllerProps<T> &
	ICheckboxProps;
export const ControlledCheckbox = <T extends FieldValues>({
	control,
	defaultValue,
	shouldUnregister,
	disabled,
	name,
	rules,
	...rest
}: ControlledCheckboxType<T>) => {
	const { field } = useController({
		control,
		defaultValue,
		shouldUnregister,
		disabled,
		name,
		rules
	});
	return (
		<Checkbox
			{...field}
			{...rest}
		/>
	);
};
