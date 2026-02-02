import { createMutation } from '@tanstack/svelte-query';

import { apiFetch } from '$lib/utils/fetcher';
import type { DtoLoginRequest, LoginCreateData } from '$lib/types/api';

type IUseLoginOptions = {
	onSuccess?: (data: LoginCreateData) => void;
};

export function useLogin({ onSuccess }: IUseLoginOptions) {
	return createMutation<LoginCreateData, unknown, DtoLoginRequest>(() => ({
		mutationFn: (payload) => {
			return apiFetch('/auth/login', {
				method: 'POST',
				body: JSON.stringify({
					Email: payload.Email,
					Password: payload.Password
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
