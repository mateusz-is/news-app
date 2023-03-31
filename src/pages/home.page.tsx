import { ArticlesIndex } from "../components";
import GeneralLayout from "layouts/general.layout";

export default function HomePage(): JSX.Element {
	return (
		<GeneralLayout>
			<ArticlesIndex />
		</GeneralLayout>
	);
}
