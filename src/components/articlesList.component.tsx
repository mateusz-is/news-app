import {
	Grid,
	CardActionArea,
	Card,
	CardContent,
	Typography,
	CardMedia,
} from "@mui/material";
import React from "react";
import Articles from "./articles.component";
import Popup from "./popup.component";

export default function ArticlesList({ articles }: any) {
	const [open, setOpen] = React.useState(false);
	const [data, setData] = React.useState<any>([]);
	const handleOpen = (data: any) => {
		setData(data);
		setOpen(true);
	};
	const handleClose = () => setOpen(false);
    console.log(open)
	return (
		<>
			{articles.map((data: any) => (
				<Grid
					item
					xs={12}
					key={data.title}
					sx={{ mb: 2 }}
					onClick={() => handleOpen(data)}
				>
					<CardActionArea component="a" href="#">
						<Card sx={{ display: "flex" }}>
							<CardContent sx={{ flex: 1 }}>
								<Typography component="h2" variant="h5">
									{data.title}
								</Typography>
								<Typography variant="subtitle1" color="text.secondary">
									{data.author}
								</Typography>
								<Typography variant="caption">{data.publishedAt}</Typography>
							</CardContent>
						</Card>
					</CardActionArea>
				</Grid>
			))}
			<Popup isOpen={open} onClose={handleClose} {...data} />
		</>
	);
}
