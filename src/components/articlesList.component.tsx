import {
	Grid,
	CardActionArea,
	Card,
	CardContent,
	Typography,
} from "@mui/material";
import React from "react";
import { Popup } from "./";
import { Article } from "interfaces/articles.interface";

interface ArticlesGridProps {
	articles: Article[];
}

export default function ArticlesList({
	articles,
}: ArticlesGridProps): JSX.Element {
	const [open, setOpen] = React.useState<boolean>(false);
	const [data, setData] = React.useState<any>([]);
	const handleOpen = React.useCallback((data: Article) => {
		setData(data);
		setOpen(true);
	}, []);
	const handleClose = React.useCallback(() => setOpen(false), []);

	return (
		<>
			{articles.map((data: any) => (
				<Grid
					item
					xs={12}
					key={data.title}
					sx={{ mb: 2 }}
					onClick={() => handleOpen(data)}
				>
					<CardActionArea component="a" href="#">
						<Card sx={{ display: "flex" }}>
							<CardContent sx={{ flex: 1 }}>
								<Typography component="h2" variant="h5">
									{data.title}
								</Typography>
								<Typography variant="subtitle1" color="text.secondary">
									{data.source.name}
								</Typography>
								<Typography variant="caption">{data.publishedAt}</Typography>
							</CardContent>
						</Card>
					</CardActionArea>
				</Grid>
			))}
			<Popup isOpen={open} onClose={handleClose} {...data} />
		</>
	);
}
