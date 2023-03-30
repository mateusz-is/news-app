import { createSlice } from "@reduxjs/toolkit";

export const articles = createSlice({
	name: "articles",
	initialState: [],
	reducers: {
		addTotalResults: (state: any, action): any => {
			const qty = action.payload;
			return { ...state, qty };
		},
		changeDisplayList: (state: any, action) => {
			const show = action.payload;
			return { ...state, show };
		},
	},
});
// this is for dispatch
export const { addTotalResults, changeDisplayList } = articles.actions;

// this is for configureStore
export default articles.reducer;
