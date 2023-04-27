type ActionMap<M extends { [index: string]: any }> = {
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
