import { PUBLIC_URL, PUBLIC_PROTOCOL, PUBLIC_PORT } from '$env/static/public';
import { auth } from '$lib/stores/auth.store';

export async function apiProtectedFetch<T>(url: string, options: RequestInit = {}): Promise<T> {
	const token = localStorage.getItem('ladger-jwt-token');

	const res = await fetch(`${PUBLIC_PROTOCOL}://${PUBLIC_URL}:${PUBLIC_PORT}${url}`, {
		...options,
		headers: {
			'Content-Type': 'application/json',
			...(token && { Authorization: `Bearer ${token}` }),
			...options.headers
		}
	});

	// Token expired/invalid → API answers 401.
	// Log the user out so the protected layout redirects to /login.
	if (res.status === 401) {
		auth.logout();
	}

	if (!res.ok) {
		const err = await res.json();
		throw new Error(err.error || 'Request failed');
	}

	return res.json();
}
