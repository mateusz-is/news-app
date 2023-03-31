import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "store";

export default function Footer(): JSX.Element {
	const totalResults = useSelector((state: RootState) => state.articlesData);
	const { qty } = totalResults;
	const now: Date = new Date();
	const hours: string = now.getHours().toString().padStart(2, "0");
	const minutes: string = now.getMinutes().toString().padStart(2, "0");
	const timeString: string = `${hours}:${minutes}`;
	return (
		<React.Fragment>
			<Typography variant="body2" color="text.secondary" align="center">
				Aktualna godzina: {timeString}
			</Typography>
			<Typography variant="body2" color="text.secondary" align="center">
				Obecnie wyświetlasz: {qty} wpisów
			</Typography>
		</React.Fragment>
	);
}
