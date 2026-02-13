import { createQuery } from '@tanstack/svelte-query';

import { apiProtectedFetch } from '$lib/utils/protected-fetcher';
import type { CategoriesListData, DtoCategoryResponse } from '$lib/types/api';

export type CategoriesCollectionData = Record<DtoCategoryResponse["ID"], DtoCategoryResponse>;

export function useCategories() {
    return createQuery<CategoriesCollectionData>(() => ({
        queryKey: ['categories'],
        queryFn: async () => {
            const result = await apiProtectedFetch<CategoriesListData>('/categories');

            const collection = result.reduce((acc, category) => {
                acc[category.ID] = category;

                return acc;
            }, {} as Record<DtoCategoryResponse["ID"], DtoCategoryResponse>);
            
            return collection;
        },
    }));
}
