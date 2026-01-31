import { createQuery } from '@tanstack/svelte-query';

import { apiProtectedFetch } from '$lib/utils/protected-fetcher';
import type { IUser } from '$lib/types/user';

export function useUsers() {
	return createQuery<IUser[]>(() => ({
		queryKey: ['users'],
		queryFn: () => apiProtectedFetch('/users')
	}));
}
