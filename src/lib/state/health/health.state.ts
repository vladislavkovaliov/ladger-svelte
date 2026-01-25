import { createQuery } from '@tanstack/svelte-query';

import { apiFetch } from '$lib/utils/fetcher';

export function useHealth() {
	return createQuery<{status: string}>(() => ({
		queryKey: ['health'],
		queryFn: () => apiFetch('/health')
	}));
}
