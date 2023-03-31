import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "../features/articlesReducer.feature";

export const store = configureStore({
	reducer: {
		articlesData: articlesReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
