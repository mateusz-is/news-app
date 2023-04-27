import React from "react";
import { ArticleContext } from "../../context/articles.context";

export const useArticles = () => {
	return React.useContext(ArticleContext);
};
