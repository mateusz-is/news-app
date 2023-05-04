import React from "react";
import { ArticlesList, ArticlesGrid } from "./";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import { useGetArticles } from "api/articles";
import { ArticlesApi } from "interfaces/articles.interface";
import { useArticles } from "../hooks/articles/useArticles.hook";

export default function ArticlesIndex(): JSX.Element {
	const { articles, onChangeAmountView } = useArticles();
	const { code } = useParams() as { code: string };
	const { data, isLoading } = useGetArticles(code) as {
		data: ArticlesApi;
		isLoading: boolean;
	};

	React.useEffect(() => {
		if (!isLoading) onChangeAmountView(data.totalResults);
	}, [isLoading]);

	if (isLoading) return <Typography>Wczytywanie...</Typography>;
	if (data?.articles?.length === 0)
		return <Typography>Nie znaleziono newsów dla tego kraju</Typography>;

	if (articles.grid) return <ArticlesGrid articles={data?.articles} />;
	return <ArticlesList articles={data?.articles} />;
}
