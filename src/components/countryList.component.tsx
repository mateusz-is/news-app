import * as React from "react";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import {
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
} from "@mui/material";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { item } from "theme/general.theme";
import { Countries } from "interfaces/countries.interface";

interface CountriesProps {
	countries: Countries[] | undefined;
	isLoading: boolean;
}

export default function CountryList({ countries, isLoading }: CountriesProps) {
	const navigate: NavigateFunction = useNavigate();

	return (
		<>
			{isLoading && (
				<Typography sx={{ color: "#fff", p: 2 }}>Wczytywanie...</Typography>
			)}
			<List disablePadding>
				{countries?.map(({ flags, name, cca2 }, index) => (
					<Box key={index} sx={{ bgcolor: "#101F33" }}>
						<ListItemIcon></ListItemIcon>
						<ListItem sx={{ ...item }}>
							<ListItemText
								sx={{ color: "#fff" }}
								onClick={() => navigate(`/country/${cca2}`)}
							>
								<img alt={flags.alt} src={flags.svg} height={10} width={10} />{" "}
								{name.common}
							</ListItemText>
						</ListItem>
					</Box>
				))}
			</List>
		</>
	);
}
