<script lang="ts">
	// Svelte
	import { onMount } from 'svelte';

	// App
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';

	// Stores
	import { auth } from '$lib/stores/auth.store';

	onMount(() => {
		auth.init();

		const unsubscribe = auth.subscribe((state) => {
			if (state.initialized === false) {
				return;
			}

			if (state.isAuthenticated === false) {
				goto(resolve('/login'));
			} else {
				goto(resolve('/admin/users'));
			}
		});

		return unsubscribe;
	});
</script>

<div>loading...</div>
