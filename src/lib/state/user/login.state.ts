import { createMutation } from '@tanstack/svelte-query';

import { apiFetch } from '$lib/utils/fetcher';

type ILoginPayload = {
	email: string;
	password: string;
};

type ILoginResponse = {
	token: string;
};

type IUseLoginOptions = {
	onSuccess?: (data: ILoginResponse) => void;
};

export function useLogin({ onSuccess }: IUseLoginOptions) {
	return createMutation<ILoginResponse, unknown, ILoginPayload>(() => ({
		mutationFn: (payload) => {
			return apiFetch('/auth/login', {
				method: 'POST',
				body: JSON.stringify({
					email: payload.email,
					password: payload.password
				})
			});
		},
		onSuccess: (data) => {
			if (onSuccess) {
				onSuccess(data);
			}
		}
	}));
}
