import {
	Grid,
	CardActionArea,
	Card,
	CardContent,
	Typography,
} from "@mui/material";
import { Article, ArticlesGridProps } from "interfaces/articles.interface";

export default function ArticlesList({
	articles,
}: ArticlesGridProps): JSX.Element {
	return (
		<>
			{articles.map((data: Article) => (
				<Grid item xs={12} key={data.title} sx={{ mb: 2 }}>
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
		</>
	);
}
