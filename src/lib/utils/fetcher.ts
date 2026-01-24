const API_URL = 'http://192.168.1.111:8080';

export async function apiFetch<T>(url: string, options: RequestInit = {}): Promise<T> {
	const token = localStorage.getItem('token');

	const res = await fetch(`${API_URL}${url}`, {
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
