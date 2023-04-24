import * as React from "react";
import Drawer, { DrawerProps } from "@mui/material/Drawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import axios from "axios";
import {
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
} from "@mui/material";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { API_ROUTE } from "../config/api.route";
import { Countries } from "../interfaces/countries.interface";
import { item } from "theme/general.theme";

export default function NavigationMenu({ ...other }: DrawerProps): JSX.Element {
	const [data, setData] = React.useState<Countries[]>([]);
	const [loading, setLoading] = React.useState<boolean>(true);
	const navigate: NavigateFunction = useNavigate();

	React.useEffect(() => {
		axios
			.get(API_ROUTE.COUNTRIES)
			.then((response) => {
				setData(response.data);
				setLoading(false);
			})
			.catch((error) => {
				console.error(error);
				setLoading(false);
			});
	}, []);

	return (
		<Drawer variant="permanent" {...other}>
			{loading && (
				<Typography sx={{ color: "#fff" }}>Wczytywanie...</Typography>
			)}
			<List disablePadding>
				{data.map(({ flags, name, cca2 }) => (
					<Box key={name.common} sx={{ bgcolor: "#101F33" }}>
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
