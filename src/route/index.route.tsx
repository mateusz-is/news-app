import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/home.page";

export default function MainRoute() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/country/:code" element={<HomePage />} />
				<Route path="*" element={<h2>Nic nie znaleziono: 404!</h2>} />
			</Routes>
		</BrowserRouter>
	);
}
