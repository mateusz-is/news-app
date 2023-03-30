import {
	AppBar,
	Toolbar,
	Grid,
	IconButton,
	Typography,
	Button,
	ToggleButton,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import Popup from "./popup.component";
import ReorderIcon from "@mui/icons-material/Reorder";
import { useDispatch } from "react-redux";
import { changeDisplayList } from "../features/articlesReducer.feature";
import WindowIcon from "@mui/icons-material/Window";

export default function Header({
	onDrawerChange,
}: {
	onDrawerChange: () => void;
}) {
	const [open, setOpen] = React.useState(false);
	const [selected, setSelected] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const description = `Największy kłopot przy tym projekcie to brak czasu 🙃 Największa
	frajda to zdecydowanie praca z Reactem 😁`;

	const handleChangeList = () => {
		setSelected(!selected);
		dispatch(changeDisplayList(!selected));
	};
	return (
		<React.Fragment>
			<AppBar color="primary" position="sticky" elevation={1}>
				<Toolbar>
					<Grid container spacing={1} alignItems="center">
						<Grid sx={{ display: { sm: "none", xs: "block" } }} item>
							<IconButton
								color="inherit"
								aria-label="open drawer"
								onClick={onDrawerChange}
								edge="start"
							>
								<MenuIcon />
							</IconButton>
						</Grid>
						<Grid item>
							<Typography
								onClick={() => navigate("/")}
								variant="h6"
								component="h1"
								sx={{ cursor: "pointer" }}
							>
								gnNews
							</Typography>
						</Grid>
						<Grid item xs />
						<Grid item>
							<ToggleButton
								value="check"
								selected={selected}
								size="small"
								onChange={handleChangeList}
							>
								{!selected ? <WindowIcon /> : <ReorderIcon />}
							</ToggleButton>
						</Grid>
						<Grid item>
							<Button onClick={handleOpen}>Otwórz popup 😎</Button>
							<Popup
								isOpen={open}
								onClose={handleClose}
								description={description}
							/>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</React.Fragment>
	);
}
