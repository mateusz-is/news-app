import { API_HOST, API_ROUTE } from "config/api.route";
import { Countries } from "interfaces/countries.interface";
import { pathToUrl } from "utils/pathToUrl";
import { useFetch } from "utils/reactQuery";

export const useGetCountries = (region: string) =>
	useFetch<Countries[]>(
		`${API_HOST.COUNTRIES}${pathToUrl(API_ROUTE.COUNTRIES, { region })}`
	);
