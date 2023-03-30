import React from "react";
import axios from "axios";
import { API_KEY } from "const/config";
import { useDispatch } from "react-redux";
import { addTotalResults } from "features/articlesReducer.feature";
import ArticlesList from "./articlesList.component";
import { Articles as IArticles } from "../interfaces/article.interface";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import ArticlesGrid from "./articlesGrid.component";
import { useSelector } from "react-redux";

export default function Articles() {
	const [data, setData] = React.useState<IArticles[]>([]);
	const [loading, setLoading] = React.useState<boolean>(true);
	const totalResults = useSelector((state: any) => state.articlesData);
	const { show } = totalResults;
	let { code } = useParams();
	const dispatch = useDispatch();
	console.log(totalResults);
	React.useEffect(() => {
		axios
			.get(
				`https://newsapi.org/v2/top-headlines?country=${code}&apiKey=${API_KEY}`
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
	}, [code]);

	if (!data) return null;
	if (loading) return <Typography>Wczytywanie...</Typography>;
	if (data.length === 0)
		return <Typography>Nie znaleziono newsów dla tego kraju</Typography>;
	return show ? (
		<ArticlesGrid articles={data} />
	) : (
		<ArticlesList articles={data} />
	);
}
