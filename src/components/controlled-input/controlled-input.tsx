import {
	FieldValues,
	useController,
	UseControllerProps
} from 'react-hook-form';

import { Input, InputPropsType } from '@/components';

type ControlledInputProps<T extends FieldValues> = UseControllerProps<T> &
	Omit<InputPropsType, 'onChange' | 'value'>;
export const ControlledInput = <T extends FieldValues>({
	labelText,
	withLabel,
	type,
	control,
	name,
	rules,
	disabled,
	defaultValue,
	shouldUnregister,
	...rest
}: ControlledInputProps<T>) => {
	const { field, fieldState } = useController({
		control,
		name,
		rules,
		disabled,
		defaultValue,
		shouldUnregister
	});

	return (
		<Input
			type={type}
			withLabel={withLabel}
			labelText={labelText}
			{...field}
			{...rest}
		/>
	);
};
