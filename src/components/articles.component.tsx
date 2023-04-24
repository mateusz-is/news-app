import React from "react";
import axios from "axios";
import { API_KEY } from "config/config";
import { useDispatch } from "react-redux";
import { addTotalResults } from "features/articlesReducer.feature";
import { ArticlesList, ArticlesGrid } from "./";
import { Article } from "../interfaces/articles.interface";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "store";

export default function ArticlesIndex(): JSX.Element {
	const [data, setData] = React.useState<Article[]>([]);
	const [loading, setLoading] = React.useState<boolean>(true);
	const totalResults = useSelector((state: RootState) => state.articlesData);
	const { show } = totalResults;
	let { code } = useParams();
	const dispatch = useDispatch();

	React.useEffect(() => {
		axios
			.get(
				`https://newsapi.org/v2/top-headlines?country=${
					code || `pl`
				}&apiKey=${API_KEY}`
			)
			.then((response) => {
				setData(response.data.articles);
				dispatch(addTotalResults(response.data.totalResults));
				setLoading(false);
			})
			.catch((error) => {
				console.error(error);
				setLoading(false);
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [code]);

	if (loading) return <Typography>Wczytywanie...</Typography>;
	if (data.length === 0)
		return <Typography>Nie znaleziono newsów dla tego kraju</Typography>;

	if (show) return <ArticlesGrid articles={data} />;
	return <ArticlesList articles={data} />;
}
