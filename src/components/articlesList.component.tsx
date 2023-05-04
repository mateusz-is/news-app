import React from "react";
import {
	Grid,
	CardActionArea,
	Card,
	CardContent,
	Typography,
} from "@mui/material";
import { Article, ArticlesGridProps } from "interfaces/articles.interface";
import { useNavigate } from "react-router-dom";

export default function ArticlesList({
	articles,
}: ArticlesGridProps): JSX.Element {
	const navigate = useNavigate();
	return (
		<React.Fragment>
			{articles?.map((data: Article, index: number) => (
				<Grid item xs={12} key={data.title} sx={{ mb: 2 }}>
					<CardActionArea
						component="a"
						onClick={() => navigate(`news/${index}`)}
					>
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
		</React.Fragment>
	);
}
