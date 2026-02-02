import { createQuery } from '@tanstack/svelte-query';

import { apiProtectedFetch } from '$lib/utils/protected-fetcher';
import type { PaymentsListData } from '$lib/types/api';

export function usePayments() {
	return createQuery<PaymentsListData>(() => ({
		queryKey: ['payments'],
		queryFn: () => apiProtectedFetch('/payments')
	}));
}
