import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const useSignUpForm = () => {
	const schema = z
		.object({
			email: z
				.string({
					invalid_type_error: 'Неверный адрес электронной почты',
					required_error: 'Введите адрес электронной почты'
				})
				.trim()
				.min(0, 'Введите адрес электронной почты')
				.email('Введите адрес электронной почты'),
			password: z
				.string({
					required_error: 'Введите пароль'
				})
				.trim()
				.min(6, 'Пароль должен содержать не менее 6 символов'),
			cPassword: z
				.string({
					required_error: 'Введите пароль'
				})
				.trim()
		})
		.superRefine((data, ctx) => {
			if (data.password !== data.cPassword) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message: 'Пароли не совпадают',
					path: ['cPassword']
				});
			}
			return data;
		});
	type SignFormType = z.infer<typeof schema>;

	return useForm<SignFormType>({
		defaultValues: {
			email: '',
			password: '',
			cPassword: ''
		},
		mode: 'onChange',
		resolver: zodResolver(schema)
	});
};
