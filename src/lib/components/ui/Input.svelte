
<script>
	const { class: className = '', ...rest } = $props();
	console.log(rest)

</script>

<input
	{...rest}
	class="h-input rounded-sm border-border-input bg-background placeholder:text-foreground-alt/50 hover:border-dark-40 focus:ring-foreground focus:ring-offset-background focus:outline-hidden inline-flex w-full items-center border px-4 text-base focus:ring-2 focus:ring-offset-2 sm:text-sm {className}"
/>
