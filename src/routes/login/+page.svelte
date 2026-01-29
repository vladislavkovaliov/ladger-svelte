<script>
	// Svelte
	import { onMount } from 'svelte';

	// App
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';

	// Stores
	import { auth } from '$lib/stores/auth.store';

	// Component
	import Loginform from '$lib/components/auth/LoginForm.svelte';

	onMount(() => {
		auth.init();

		const unsubsribe = auth.subscribe((state) => {
			if (state.initialized === false) {
				return;
			}

			if (state.isAuthenticated === true) {
				goto(resolve('/admin/users'));
			}
		});

		return unsubsribe;
	});
</script>

{#if $auth.initialized == true && $auth.isAuthenticated == false}
	<Loginform />
{/if}
