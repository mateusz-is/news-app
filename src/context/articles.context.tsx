import React, { ReactNode, createContext, useReducer } from "react";
import {
	ArticlesType,
	Types,
	articleReducer,
	ArticleActions,
} from "./article.reducer";

const initialState = {
	articles: {
		grid: false,
		amount: 0,
	},
	// onChangeView: () => null,
};

type InitialStateType = {
	articles: ArticlesType;
};

type ReducerValues = {
	articles: ArticlesType;
	onChangeView: () => void;
	onChangeAmoutView: (amount: number) => void;
};

interface ArticleProviderProps {
	children: ReactNode;
}

export const ArticleContext = createContext<any>(initialState);

const mainReducer = (
	{ articles }: InitialStateType,
	action: ArticleActions
) => ({
	articles: articleReducer(articles, action),
});

export const ArticleProvider = ({ children }: ArticleProviderProps) => {
	const [state, dispatch] = useReducer(mainReducer, initialState);

	const handleChangeView = () => {
		dispatch({
			type: Types.ChangeView,
			payload: {
				grid: !state.articles.grid,
			},
		});
	};

	const handleChangeAmount = (amount: number) => {
		dispatch({
			type: Types.ArticleAmount,
			payload: {
				amount: amount,
			},
		});
	};

	const value: ReducerValues = {
		onChangeView: handleChangeView,
		onChangeAmoutView: handleChangeAmount,
		...state,
	};

	return (
		<ArticleContext.Provider value={value}>{children}</ArticleContext.Provider>
	);
};
