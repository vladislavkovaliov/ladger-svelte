import { writable } from 'svelte/store';
import { browser } from '$app/environment';


interface IUsersState {
	users: unknown[];
}

function createUsers() {
	const { subscribe, set } = writable<IUsersState>({
		users: []
	});

	return {
		subscribe,

		init() {
			set({ users: [] });
		},
	};
}

export const users = createUsers();
