import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { ArticleProvider } from "context/articles.context";
const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
const queryClient = new QueryClient();
root.render(
	<React.StrictMode>
		<ArticleProvider>
			<QueryClientProvider client={queryClient}>
				<App />
			</QueryClientProvider>
		</ArticleProvider>
	</React.StrictMode>
);
