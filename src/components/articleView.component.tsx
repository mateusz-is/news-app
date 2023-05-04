import { Article } from "interfaces/articles.interface";
import React from "react";
import { fullDateToString } from "utils/displayDate";

interface ArticleProps {
	article: Article;
}

export default function ArticleView({ article }: ArticleProps) {
	return (
		<div>
			<div
				className="hero-baner"
				style={{ backgroundImage: `url(${article.urlToImage})` }}
			>
				<div className="overlay" />
				<div className="hero-baner--content">
					<div className="col-6">
						<div className="hero-baner--content-relative">
							<h1 className="hero-baner--content-h1">{article.title}</h1>
							<h5 className="hero-baner--content-h5">{article.description}</h5>
						</div>
					</div>
				</div>
			</div>
			<div className="content-box">
				<div>
					<p className="custom-subtitle">
						<b>Data publikacji:</b>{" "}
						{fullDateToString(new Date(article.publishedAt))}
					</p>
				</div>
				<div className="content">
					<h2>Treść</h2>
					{!article.content ? (
						<p>
							Brak treści dla tego artykułu 
						</p>
					) : (
						<p>{article.content}</p>
					)}
				</div>
			</div>
		</div>
	);
}
