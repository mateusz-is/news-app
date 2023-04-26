import axios from "axios";

export const api = {
	get: <T>(url: string, params?: object) =>
		axios.get<T>(url, {
			...params,
		}),
	post: <T>(url: string, data: unknown) => axios.post<T>(url, data, {}),
	patch: <T>(url: string, data: unknown) => axios.patch<T>(url, data, {}),
	delete: <T>(url: string) => axios.delete<T>(url, {}),
};
