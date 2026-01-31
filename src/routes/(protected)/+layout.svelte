<script>
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
			}
		});

		return unsubscribe;
	});
</script>

{#if $auth.isAuthenticated}
	<div class="flex justify-end p-4 space-x-2">
		<a href={resolve("/admin/users")}>Users</a>
		<a href={resolve("/payments")}>Payments</a>
		<button on:click={() => auth.logout()}>logout</button>
	</div>
{/if}

<slot />
