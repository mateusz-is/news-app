import {
	Grid,
	CardActionArea,
	Card,
	CardContent,
	Typography,
	CardMedia,
} from "@mui/material";
import React from "react";
import Popup from "./popup.component";

export default function ArticlesGrid({ articles }: any) {
	const [open, setOpen] = React.useState(false);
	const [data, setData] = React.useState<any>([]);
	const handleOpen = (data: any) => {
		setData(data);
		setOpen(true);
	};
	const handleClose = () => setOpen(false);

	return (
		<Grid container spacing={4}>
			{articles.map((data: any) => (
				<Grid
					item
					xs={12}
					sm={6}
					md={4}
					lg={3}
					key={data.title}
					sx={{ mb: 2 }}
					onClick={() => handleOpen(data)}
				>
					
						<Card
							sx={{ height: "100%", display: "flex", flexDirection: "column", cursor: "pointer" }}
						>
							{data.urlToImage && (
								<CardMedia
									component="img"
									sx={{maxHeight: 200}}
									image={data.urlToImage}
									alt={data.title}
								/>
							)}
							<CardContent sx={{ flexGrow: 1 }}>
								<Typography component="h2" variant="h6">
									{data.title}
								</Typography>
								<Typography variant="subtitle1" color="text.secondary">
									{data.author}
								</Typography>
								<Typography variant="caption">{data.publishedAt}</Typography>
							</CardContent>
						</Card>
					
				</Grid>
			))}
			<Popup isOpen={open} onClose={handleClose} {...data} />
		</Grid>
	);
}
