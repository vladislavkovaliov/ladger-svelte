<script lang="ts">
	// App
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';

	// Components
	import { Input } from '$lib/components/ui/input/index.js';
	import { Button } from '$lib/components/ui/button/index.js';

	// Stores
	import { auth } from '$lib/stores/auth.store';

	// State
	import { useLogin } from '$lib/state/user/login.state';

	// Other
	import { createForm } from 'felte';
	import { validator } from '@felte/validator-zod';
	import * as zod from 'zod';

	const schema = zod.object({
		email: zod.string().email().nonempty(),
		password: zod.string().nonempty()
	});

	const mutationLogin = useLogin({
		onSuccess: (data) => {
			if (data.token) {
				auth.login(data.token);

				goto(resolve('/admin/users'));
			}
		}
	});

	const { form } = createForm({
		extend: validator({ schema }),
		onSubmit: async (values) => {
			try {
				await mutationLogin.mutateAsync(values);
			} catch (error) {
				console.error(error);
			}
		}
	});
</script>

<div class="card mx-auto flex max-w-md flex-col space-y-4 p-6">
	<h1 class="text-center text-2xl font-bold">Register</h1>

	<form use:form class="space-y-2">
		<Input placeholder="Email" type="email" name="email" />
		<Input placeholder="Password" type="password" name="password" />
		<Button variant="outline" type="submit">{mutationLogin.isPending ? 'loading' : 'Login'}</Button>

		<!-- TODO: adds fade in animation -->
		{#if mutationLogin.isError}
			<div class="flex border-[1px] border-red-700">
				<span>{mutationLogin.error}</span>
			</div>
		{/if}
	</form>
</div>
