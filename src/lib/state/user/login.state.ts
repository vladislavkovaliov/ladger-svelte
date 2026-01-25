import { createMutation } from '@tanstack/svelte-query';

import { apiFetch } from '$lib/utils/fetcher';

export function useLogin({ onSuccess }: { onSuccess?: (data: { token: string }) => void }) {
	return createMutation< {token: string}, unknown, { email: string; password: string }>(() => ({
		mutationFn: (payload) => {
			console.log(JSON.stringify({
				email: payload.email,
				password: payload.password,
			}))
			return apiFetch('/users/login', {
				method: 'POST',
				body: JSON.stringify(
					{
						email: payload.email,
						password: payload.password,
					}
				),
			});
		},
		// onSuccess: (data) => {
		// 	console.log('success', data);
		// }
	}));
}
