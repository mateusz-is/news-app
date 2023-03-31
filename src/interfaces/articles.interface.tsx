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
