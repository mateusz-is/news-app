import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Article {
	qty: number;
	show: boolean;
}

const articles = createSlice({
	name: "articles",
	initialState: {
		qty: 0,
		show: false,
	} as Article,
	reducers: {
		addTotalResults: (state, action: PayloadAction<number>) => {
			state.qty = action.payload;
		},
		changeDisplayList: (state, action: PayloadAction<boolean>) => {
			state.show = action.payload;
		},
	},
});

export const { addTotalResults, changeDisplayList } = articles.actions;
export default articles.reducer;
