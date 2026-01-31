import { createQuery } from '@tanstack/svelte-query';

import { apiProtectedFetch } from '$lib/utils/protected-fetcher';
import type { IPayment } from '$lib/types/payment';

export function usePayments() {
	return createQuery<IPayment[]>(() => ({
		queryKey: ['payments'],
		queryFn: () => apiProtectedFetch('/payments')
	}));
}
