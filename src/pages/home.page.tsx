import axios from "axios";
import Articles from "components/articles.component";
import { API_KEY } from "const/config";
import GeneralLayout from "layouts/general.layout";
import React from "react";

export default function HomePage() {
	return (
		<GeneralLayout>
			<Articles />
		</GeneralLayout>
	);
}
