import React from "react";
import { render, screen } from "@testing-library/react";
import CountryList from "components/countryList.component";
import { MemoryRouter } from "react-router-dom";

describe("CountryMenu", () => {
	it("renders list of countries", () => {
		const countries = [
			{
				name: {
					common: "Poland",
					official: "Poland",
					nativeName: {},
				},
				cca2: "pl",
				flags: { alt: "", png: "string", svg: "string" },
			},
			{
				name: {
					common: "Germany",
					official: "Germany",
					nativeName: {},
				},
				cca2: "de",
				flags: { alt: "", png: "string", svg: "string" },
			},
			{
				name: {
					common: "France",
					official: "France",
					nativeName: {},
				},
				cca2: "fr",
				flags: { alt: "", png: "string", svg: "string" },
			},
		];

		render(
			<MemoryRouter initialEntries={["/"]}>
				<CountryList countries={countries} isLoading={true} />
			</MemoryRouter>
		);

		expect(screen.getByText("Poland")).toBeInTheDocument();
		expect(screen.getByText("Germany")).toBeInTheDocument();
		expect(screen.getByText("France")).toBeInTheDocument();
	});
});
