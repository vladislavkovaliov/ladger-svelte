import { createQuery } from '@tanstack/svelte-query';

import { apiFetch } from '$lib/utils/fetcher';
import type { HealthListData } from '$lib/types/api';

export function useHealth() {
	return createQuery<HealthListData>(() => ({
		queryKey: ['health'],
		queryFn: () => apiFetch('/health')
	}));
}
