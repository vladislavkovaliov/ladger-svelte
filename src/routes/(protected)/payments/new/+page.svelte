<script lang="ts">
	// Tanstack
	import { createForm } from '@tanstack/svelte-form';
	
	// Libs	
	import FieldInfo from '$lib/components/ui/FieldInfo.svelte'
	import Button from '$lib/components/ui/Button.svelte';

	// State
	import { useCategories } from '$lib/state/categories/categories.state';

	const categories = useCategories();

	const form = createForm(() => ({
		defaultValues: {
			amount: 0,
			categoryId: "",
			createdAt: "",
		},
		onSubmit: async ({ value }) => {
			// Do something with form data
			alert(JSON.stringify(value))
		},
	}));

	const validator = RegExp(/^\d+(\.\d{1,2})?$/);	
</script>

<div>Create Payment</div>
<form
	id="form"
	onsubmit={(e) => {
    e.preventDefault()
    e.stopPropagation()
    form.handleSubmit()
  }}
>
	<form.Field
		name="amount"
		validators={{
     	onChange: ({ value }) => {
			const isValid = validator.test(String(value));

			return isValid ? undefined : 'Must be a number and correct.';
		},
		onChangeAsyncDebounceMs: 500,
		onChangeAsync: async ({ value }) => {
			await new Promise((resolve) => setTimeout(resolve, 1000))

			return value < 0 && 'No "error" allowed amount.'
		},
    }}>
		{#snippet children(field)}
			<div>
				<label for={field.name}>Amount</label>

				<input
					id={field.name}
					type="text"
					placeholder="Amount"
					value={field.state.value}
					onblur={() => field.handleBlur()}
					oninput={(e: Event) => {
						const target = e.target as HTMLInputElement;

						const isValid = validator.test(target.value);
						
						if (isValid) {
							field.handleChange(Number(target.value));
						}		
					}}/>
				<FieldInfo {field} />
			</div>
		{/snippet}
	</form.Field>
	<form.Field
		name="createdAt"
		validators={{
     	onChange: ({ value }) => {
			return value ? undefined : 'Must be a correct date.';
		},
		onChangeAsyncDebounceMs: 500,
		onChangeAsync: async ({ value }) => {
			await new Promise((resolve) => setTimeout(resolve, 1000))
			
			return value === "" && 'No "error" allowed in created at.'
		},
    }}>
		{#snippet children(field)}
			<div>
				<label for={field.name}>Created At</label>

				<input
					id={field.name}
					type="date"
					placeholder="Created At"
					value={field.state.value}
					onblur={() => field.handleBlur()}
					oninput={(e: Event) => {
						const target = e.target as HTMLInputElement;

						field.handleChange(target.value);

					}}/>
				<FieldInfo {field} />
			</div>
		{/snippet}
	</form.Field>
	<form.Field
		name="categoryId"
		validators={{
     	onChange: () => {
			return undefined;
		},
		onChangeAsyncDebounceMs: 500,
		onChangeAsync: async () => {
			return false;
		},
    }}>
		{#snippet children(field)}
			<div>
				<label for={field.name}>Category</label>
				<select 
					name="categoryId" 
					id="categoryId"
					onblur={() => field.handleBlur()}
					onchange={(event: Event) => {					
						const target = event.target as HTMLSelectElement;

						if (categories.data) {
							const foundCategory = categories.data[target.value];
							
							field.handleChange(foundCategory.ID);
						}
					}}	
				>
					<option value="">{!categories.data ? "Loading" : "Select category"}</option>
					{#if categories.data}
						{#each Object.entries(categories.data) as [categoryId, category] (categoryId)}
							<option value={category.ID}>{category.CategoryName}</option>
						{/each}
					{/if}
				</select>
			</div>
		{/snippet}
	</form.Field>

	<div>
		<form.Subscribe
			selector={(state) => ({
			canSubmit: state.canSubmit,
			isSubmitting: state.isSubmitting,
		})}>
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
      		}}>
			Reset
		</button>
	</div>
</form>

