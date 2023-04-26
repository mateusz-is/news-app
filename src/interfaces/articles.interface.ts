export interface Article {
	author: string;
	content: string;
	description: string;
	source: { id: string; name: string };
	title: string;
	url: string;
	publishedAt: string;
	urlToImage: string;
}

export interface ArticlesGridProps {
	articles: Article[];
}

export interface ArticlesApi {
	status: string;
	totalResults: number;
	articles: Article[];
}
