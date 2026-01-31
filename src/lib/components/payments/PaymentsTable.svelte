<script lang="ts">
	import {usePayments} from "$lib/state/payments/payments.state";

	const query = usePayments();

</script>

<h1>Payment table</h1>

<table class="table-striped table border-separate border-spacing-x-4 border-spacing-y-1">
	<thead>
	<tr class="space-x-4">
		<th scope="col">ID</th>
		<th scope="col">Amount</th>
		<th scope="col">Category ID</th>
		<th scope="col">Create At</th>
		<th scope="col">Update At</th>
	</tr>
	</thead>

	<tbody>
	{#each query.data as payment (payment.ID)}
		<tr class="space-x-4 space-y-1">
			<td>{payment.ID}</td>
			<td>{payment.Amount}</td>
			<td>{payment.CreateDate}</td>
			<td>{payment.CreateDate}</td>
			<td>{payment.UpdateDate}</td>
		</tr>
	{/each}
	</tbody>
</table>