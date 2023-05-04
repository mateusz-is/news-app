import React from "react";
import GeneralLayout from "layouts/general.layout";
import { useParams } from "react-router-dom";
import { useGetArticles } from "api/articles";
import { ArticlesApi } from "interfaces/articles.interface";
import { ArticleView } from "components";

export default function ArticlePage(): JSX.Element {
	const { code, id } = useParams() as { code: string; id: string };
	const { data, isLoading } = useGetArticles(code) as {
		data: ArticlesApi;
		isLoading: boolean;
	};
	const articleId: number = +id;
	if (isLoading) return <>Wczytywanie...</>;
	return (
		<GeneralLayout>
			<ArticleView article={data?.articles[articleId]} />
		</GeneralLayout>
	);
}
