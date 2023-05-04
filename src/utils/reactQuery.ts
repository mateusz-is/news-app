import { api } from "./axios";
import { useQuery, UseQueryOptions } from "react-query";

type QueryKeyType = [string, Record<string, unknown> | undefined];

type FetcherProps = {
	queryKey: QueryKeyType;
	pageParam?: number;
};

export const fetcher = <T>({
	queryKey,
	pageParam,
}: FetcherProps): Promise<T> => {
	const [url, params] = queryKey;
	return api
		.get<T>(url, { params: { ...params, pageParam } })
		.then((res) => res.data);
};

export const useFetch = <T>(
	url: string | null,
	params?: Record<string, unknown>,
	config?: UseQueryOptions<T, Error, T, QueryKeyType>
) => {
	const context = useQuery<T, Error, T, QueryKeyType>(
		[url!, params],
		({ queryKey }) => fetcher({ queryKey }),
		{
			enabled: !!url,
			...config,
		}
	);

	return context;
};
