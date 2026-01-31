<script lang="ts">
	import { useUsers } from '$lib/state/users/users.state';

	const query = useUsers();

</script>

<h1>User table</h1>

<table class="table-striped table border-separate border-spacing-x-4 border-spacing-y-1">
	<thead>
		<tr class="space-x-4">
			<th scope="col">ID</th>
			<th scope="col">Email</th>
			<th scope="col">Created At</th>
		</tr>
	</thead>

	<tbody>
		{#each query.data as user (user.ID)}
			<tr class="space-x-4 space-y-1">
				<td>{user.ID}</td>
				<td>{user.Email}</td>
				<td>{user.CreatedAt}</td>
			</tr>
		{/each}
	</tbody>
</table>
