import { createQuery } from '@tanstack/svelte-query';

import { apiProtectedFetch } from '$lib/utils/protected-fetcher';
import type { UsersListData } from '$lib/types/api';

export function useUsers() {
	return createQuery<UsersListData>(() => ({
		queryKey: ['users'],
		queryFn: () => apiProtectedFetch('/users')
	}));
}
