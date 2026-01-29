<script lang="ts">
	import './layout.css';

	import favicon from '$lib/assets/favicon.svg';

	// TanStack Query
	import { QueryClient } from '@tanstack/svelte-query';
	import { SvelteQueryDevtools } from '@tanstack/svelte-query-devtools';
	import { PersistQueryClientProvider } from '@tanstack/svelte-query-persist-client';
	import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';

	import { browser } from '$app/environment';

	const { children } = $props();

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				enabled: browser
			}
		}
	});

	const persister = createAsyncStoragePersister({
		storage: browser ? window.localStorage : null
	});
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<PersistQueryClientProvider client={queryClient} persistOptions={{ persister }}>
	{@render children()}
	<SvelteQueryDevtools />
</PersistQueryClientProvider>
