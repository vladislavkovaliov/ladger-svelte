<script lang="ts">
	// Components
	import { Input } from '$lib/components/ui/input/index.js';
	import { Button } from '$lib/components/ui/button/index.js';

	// State
	import { useLogin } from '$lib/state/auth/login.state';
	import { useHealth } from '$lib/state/health/health.state';

	// Other
	import { createForm } from 'felte';

	const { form } = createForm({
		onSubmit: async (values) => {
			// ...
			console.log(values);

			await mutationLogin.mutateAsync(values);
		}
	});

	const health = useHealth();
</script>

<div class="card mx-auto flex max-w-md flex-col space-y-4 p-6">
	<h1 class="text-center text-2xl font-bold">Register</h1>

	<form use:form>
		<Input placeholder="Email" type="email" name="email" />
		<Input placeholder="Password" type="password" name="password" />
		<Button variant="outline" type="submit">{health.isLoading ? 'loading' : 'Register'}</Button>
	</form>
</div>
