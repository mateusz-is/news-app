import React from "react";
import { Grid, Card, CardContent, Typography, CardMedia } from "@mui/material";
import { Article, ArticlesGridProps } from "interfaces/articles.interface";
import { useNavigate } from "react-router-dom";

export default function ArticlesGrid({
	articles,
}: ArticlesGridProps): JSX.Element {
	const navigate = useNavigate();

	return (
		<Grid container spacing={4}>
			{articles.map((data: Article, index: number) => (
				<Grid
					item
					xs={12}
					sm={6}
					md={4}
					lg={3}
					key={data.title}
					sx={{ mb: 2 }}
					onClick={() => navigate(`news/${index}`)}
				>
					<Card
						sx={{
							height: "100%",
							display: "flex",
							flexDirection: "column",
							cursor: "pointer",
						}}
					>
						{data.urlToImage && (
							<CardMedia
								component="img"
								sx={{ maxHeight: 200 }}
								image={data.urlToImage}
								alt={data.title}
							/>
						)}
						<CardContent sx={{ flexGrow: 1 }}>
							<Typography component="h2" variant="h6">
								{data.title}
							</Typography>
							<Typography variant="body1" color="text.secondary">
								{data.description}
							</Typography>
							<Typography variant="subtitle1" color="text.secondary">
								{data.source.name}
							</Typography>
							<Typography variant="caption">{data.publishedAt}</Typography>
						</CardContent>
					</Card>
				</Grid>
			))}
		</Grid>
	);
}
