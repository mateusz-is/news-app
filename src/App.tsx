import React from "react";
import MainRoute from "./route/index.route";
import "style.css";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
	return (
		<Provider store={store}>
			<MainRoute />
		</Provider>
	);
}

export default App;
