import { Typography } from "@mui/material";
import React from "react";

export default function Footer(): JSX.Element {
	const now: Date = new Date();
	const hours: string = now.getHours().toString().padStart(2, "0");
	const minutes: string = now.getMinutes().toString().padStart(2, "0");
	const timeString = `${hours}:${minutes}`;
	return (
		<React.Fragment>
			<Typography variant="body2" color="text.secondary" align="center">
				Aktualna godzina: {timeString}
			</Typography>
			<Typography variant="body2" color="text.secondary" align="center">
				Obecnie wyświetlasz: {0} wpisów
			</Typography>
		</React.Fragment>
	);
}
