import * as React from "react";
import Drawer, { DrawerProps } from "@mui/material/Drawer";
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
import { useGetCountries } from "api/countries";

export default function NavigationMenu({ ...other }: DrawerProps): JSX.Element {
	const navigate: NavigateFunction = useNavigate();
	const { data: countries, isLoading } = useGetCountries("europe");

	return (
		<Drawer variant="permanent" {...other}>
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
		</Drawer>
	);
}
