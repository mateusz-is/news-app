import React, { createContext, useReducer } from "react";
import { articleReducer } from "./article.reducer";
import {
	ArticleActions,
	ArticleProviderProps,
	InitialStateType,
	ReducerValues,
	Types,
} from "interfaces";

const initialState = {
	articles: {
		grid: false,
		amount: 0,
	},
	onChangeView: () => null,
	onChangeAmountView: () => null,
};

export const ArticleContext = createContext<ReducerValues>(initialState);

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
		...state,
		onChangeView: handleChangeView,
		onChangeAmountView: handleChangeAmount,
	};

	return (
		<ArticleContext.Provider value={value}>{children}</ArticleContext.Provider>
	);
};
