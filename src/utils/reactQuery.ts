import { api } from "./axios";
import { useQuery, UseQueryOptions } from "react-query";
// import { QueryFunctionContext } from "react-query/types/core/types";
type QueryKeyT = [string, object | undefined];



export const fetcher = <T>({ queryKey, pageParam }: any): Promise<T> => {
	const [url, params] = queryKey;
	return api
		.get<T>(url, { params: { ...params, pageParam } })
		.then((res) => res.data);
};

export const useFetch = <T>(
	url: string | null,
	params?: object,
	config?: UseQueryOptions<T, Error, T, QueryKeyT>
) => {
	const context = useQuery<T, Error, T, QueryKeyT>(
		[url!, params],
		({ queryKey }) => fetcher({ queryKey }),
		{
			enabled: !!url,
			...config,
		},
		
	);

	return context;
};
