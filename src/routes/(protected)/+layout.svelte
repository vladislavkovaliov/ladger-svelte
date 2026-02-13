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
		debugger;
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
	<div class="flex justify-end space-x-2 p-4">
		<a href={resolve('/admin/users')}>Users</a>
		<span>|</span>
		<a href={resolve('/admin/users/create')}>Create new user</a>
		<span>|</span>
		<a href={resolve('/payments')}>Payments</a>
		<span>|</span>
		<a href={resolve('/payments/new')}>Create payment</a>
		<span>|</span>
		<button on:click={() => auth.logout()}>logout</button>
	</div>
{/if}

<slot />
