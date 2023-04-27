import { Typography } from "@mui/material";
import { useArticles } from "hooks/articles/useArticles.hook";
import React from "react";

export default function Footer(): JSX.Element {
	const now: Date = new Date();
	const hours: string = now.getHours().toString().padStart(2, "0");
	const minutes: string = now.getMinutes().toString().padStart(2, "0");
	const timeString = `${hours}:${minutes}`;
	const { articles } = useArticles();

	return (
		<React.Fragment>
			<Typography variant="body2" color="text.secondary" align="center">
				Aktualna godzina: {timeString}
			</Typography>
			<Typography variant="body2" color="text.secondary" align="center">
				Obecnie wyświetlasz: {articles.amount} wpisów
			</Typography>
		</React.Fragment>
	);
}
