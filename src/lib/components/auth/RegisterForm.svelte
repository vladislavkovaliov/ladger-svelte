<script lang="ts">
	import { apiFetch } from '$lib/utils/fetcher';
	import { goto } from '$app/navigation';

	let email = '';
	let password = '';
	let loading = false;
	let error = '';

	async function submit() {
		loading = true;
		error = '';

		try {
			await apiFetch('/auth/register', {
				method: 'POST',
				body: JSON.stringify({ email, password })
			});

			goto('/login');
		} catch (e: any) {
			error = e.message;
		} finally {
			loading = false;
		}
	}
</script>

<div class="card flex flex-col mx-auto max-w-md space-y-4 p-6">
	<h1 class="text-center text-2xl font-bold">Register</h1>

	<input placeholder="Email" type="email" bind:value={email} />

	<input placeholder="Password" type="password" bind:value={password} />

	{#if error}
		<p class="text-error text-sm">{error}</p>
	{/if}

	<button on:click={submit} disabled={loading} class="button preset-filled">
		{loading ? 'Creating...' : 'Register'}
	</button>
</div>
