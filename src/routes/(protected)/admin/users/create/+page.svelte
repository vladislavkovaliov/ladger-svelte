<script lang="ts">
	import { createForm } from '@tanstack/svelte-form';
	import FieldInfo from '$lib/components/ui/FieldInfo.svelte'
	import Button from '$lib/components/ui/Button.svelte';

	const form = createForm(() => ({
		defaultValues: {
			email: '',
		},
		onSubmit: async ({ value }) => {
			// Do something with form data
			alert(JSON.stringify(value))
		},
	}))
</script>

<div>create</div>
<form
	id="form"
	onsubmit={(e) => {
    e.preventDefault()
    e.stopPropagation()
    form.handleSubmit()
  }}
>
	<form.Field
		name="email"
		validators={{
      onChange: ({ value }) =>
        value.length < 3 ? 'Not long enough' : undefined,
      onChangeAsyncDebounceMs: 500,
      onChangeAsync: async ({ value }) => {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        return value.includes('error') && 'No "error" allowed in email address.'
      },
    }}
	>
		{#snippet children(field)}
			<div>
				<label for={field.name}>Email</label>

				<input
					id={field.name}
					type="text"
					placeholder="Email"
					value={field.state.value}
					onblur={() => field.handleBlur()}
					oninput={(e: Event) => {
            const target = e.target as HTMLInputElement;

            field.handleChange(target.value)
          }}
				/>
				<FieldInfo {field} />
			</div>
		{/snippet}
	</form.Field>
	<div>
		<form.Subscribe
			selector={(state) => ({
        canSubmit: state.canSubmit,
        isSubmitting: state.isSubmitting,
      })}
		>
			{#snippet children({ canSubmit, isSubmitting })}
				<Button type="submit" disabled={!canSubmit}>
					{isSubmitting ? 'Submitting' : 'Submit'}
				</Button>
			{/snippet}
		</form.Subscribe>
		<button
			type="button"
			id="reset"
			onclick={() => {
        form.reset()
      }}
		>
			Reset
		</button>
	</div>
</form>

