import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const useLoginForm = () => {
	const schema = z.object({
		email: z
			.string({
				invalid_type_error: 'Неверный адрес электронной почты',
				required_error: 'Введите адрес электронной почты'
			})
			.trim()
			.min(1, 'Не шути со мной 😡')
			.email('Введите адрес электронной почты'),
		password: z
			.string({
				required_error: 'Введите пароль'
			})
			.trim()
			.min(6, 'Пароль должен содержать не менее 6 символов'),
		rememberMe: z.boolean().optional()
	});
	type LoginFormType = z.infer<typeof schema>;

	return useForm<LoginFormType>({
		defaultValues: {
			email: '',
			password: '',
			rememberMe: false
		},
		mode: 'onChange',
		resolver: zodResolver(schema)
	});
};
