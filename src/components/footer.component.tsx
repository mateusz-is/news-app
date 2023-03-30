import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

export default function Footer() {
	const totalResults = useSelector((state: any) => state.articlesData);
	const { qty } = totalResults;

	return (
		<>
			<Typography variant="body2" color="text.secondary" align="center">
				Aktualna godzina:{" "}
				{`${new Date().getHours()}:${new Date().getMinutes()}`}
			</Typography>
			<Typography variant="body2" color="text.secondary" align="center">
				Obecnie wyświetlasz: {qty} wpisów
			</Typography>
		</>
	);
}
