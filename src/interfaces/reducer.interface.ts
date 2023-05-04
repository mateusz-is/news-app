import { ReactNode } from "react";

export type ActionMap<M extends { [index: string]: unknown }> = {
	[Key in keyof M]: M[Key] extends undefined
		? { type: Key }
		: { type: Key; payload: M[Key] };
};

export enum Types {
	ChangeView = "CHANGE_VIEW",
	ArticleAmount = "ARTICLE_AMOUNT",
}

export type ArticlesType = {
	amount: number;
	grid: boolean;
};

export type ArticlePayload = {
	[Types.ChangeView]: {
		grid: boolean;
	};
	[Types.ArticleAmount]: {
		amount: number;
	};
};
export type ArticleActions =
	ActionMap<ArticlePayload>[keyof ActionMap<ArticlePayload>];

export type InitialStateType = {
	articles: ArticlesType;
};

export type ReducerValues = {
	articles: ArticlesType;
	onChangeView: () => void;
	onChangeAmountView: (amount: number) => void;
};

export interface ArticleProviderProps {
	children: ReactNode;
}
