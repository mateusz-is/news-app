import { ArticlesType, ArticleActions, Types } from "interfaces";

export const articleReducer = (state: ArticlesType, action: ArticleActions) => {
	switch (action.type) {
		case Types.ChangeView:
			return { ...state, grid: action.payload.grid };
		case Types.ArticleAmount:
			return { ...state, amount: action.payload.amount };
		default:
			return state;
	}
};
