import { PUBLIC_URL, PUBLIC_PROTOCOL, PUBLIC_PORT } from '$env/static/public';

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

	if (!res.ok) {
		const err = await res.json();
		throw new Error(err.error || 'Request failed');
	}

	return res.json();
}
