import * as React from "react";
import Drawer, { DrawerProps } from "@mui/material/Drawer";
import { useGetCountries } from "api/countries";
import CountryList from "./countryList.component";

export default function NavigationMenu({ ...other }: DrawerProps): JSX.Element {
	const { data: countries, isLoading } = useGetCountries("europe");

	return (
		<Drawer variant="permanent" {...other}>
			<CountryList countries={countries} isLoading={isLoading} />
		</Drawer>
	);
}
