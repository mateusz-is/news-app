import { API_HOST, API_ROUTE } from "config/api.route";
import { API_KEY } from "config/config";
import { ArticlesApi } from "interfaces/articles.interface";
import { useFetch } from "utils/reactQuery";

export const useGetArticles = (country_code: string) =>
	useFetch<ArticlesApi>(
		`${API_HOST.ARTICLES}${API_ROUTE.ARTICLES}${new URLSearchParams({
			country: country_code,
			apiKey: API_KEY,
		})}`
	);
