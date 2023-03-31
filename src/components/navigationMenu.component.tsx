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

interface Flags {
	alt: string;
	png: string;
	svg: string;
}

interface Name {
	common: string;
	official: string;
	nativeName: {
		[key: string]: {
			[key: string]: string;
		};
	};
}

interface Countries {
	flags: Flags;
	name: Name;
	cca2: string;
}

const item = {
	py: "2px",
	px: 3,
	cursor: "pointer",
	color: "rgba(255, 255, 255, 0.7)",
	"&:hover, &:focus": {
		bgcolor: "rgba(255, 255, 255, 0.08)",
	},
};

export default function NavigationMenu({ ...other }: DrawerProps): JSX.Element {
	const [data, setData] = React.useState<Countries[]>([]);
	const [loading, setLoading] = React.useState<boolean>(true);
	const navigate: NavigateFunction = useNavigate();

	React.useEffect(() => {
		axios
			.get("https://restcountries.com/v3.1/region/europe")
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
