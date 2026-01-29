import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const STORAGE_JWT_TOKEN_KEY = 'ladger-jwt-token';

interface IAuthState {
	token: string | null;
	isAuthenticated: boolean;
	initialized: boolean;
}

function createAuth() {
	const { subscribe, set } = writable<IAuthState>({
		token: null,
		isAuthenticated: false,
		initialized: false
	});

	return {
		subscribe,

		init() {
			if (!browser) {
				return;
			}

			const token = localStorage.getItem(STORAGE_JWT_TOKEN_KEY);
			console.log(token)
			set({ token, isAuthenticated: !!token, initialized: true });
		},

		login(token: string) {
			localStorage.setItem(STORAGE_JWT_TOKEN_KEY, token);

			set({ token, isAuthenticated: true, initialized: true });
		},

		logout() {
			localStorage.removeItem(STORAGE_JWT_TOKEN_KEY);

			set({ token: null, isAuthenticated: false, initialized: true });
		}
	};
}

export const auth = createAuth();
