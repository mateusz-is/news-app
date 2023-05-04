import { Typography } from "@mui/material";
import { useArticles } from "hooks/articles/useArticles.hook";
import React from "react";
import { hoursToString } from "utils/displayDate";

export default function Footer(): JSX.Element {
	const now: Date = new Date();
	const { articles } = useArticles();

	return (
		<React.Fragment>
			<Typography variant="body2" color="text.secondary" align="center">
				Aktualna godzina: {hoursToString(now)}
			</Typography>
			<Typography variant="body2" color="text.secondary" align="center">
				Obecnie wyświetlasz: {articles.amount} wpisów
			</Typography>
		</React.Fragment>
	);
}
