import {
	AppBar,
	Toolbar,
	Grid,
	IconButton,
	Typography,
	Button,
	ToggleButton,
	styled,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { Popup } from "./";
import ReorderIcon from "@mui/icons-material/Reorder";
import { useDispatch } from "react-redux";
import { changeDisplayList } from "../features/articlesReducer.feature";
import WindowIcon from "@mui/icons-material/Window";
import { AppDispatch } from "store";

const ToggleButtonStyled = styled(ToggleButton)({
	"&.Mui-selected, &.Mui-selected:hover": {
		color: "#000",
		backgroundColor: "#fff",
	},
});

export default function Header({
	onDrawerChange,
}: {
	onDrawerChange: () => void;
}): JSX.Element {
	const [open, setOpen] = React.useState<boolean>(false);
	const [selected, setSelected] = React.useState<boolean>(false);
	const handleOpen = React.useCallback(() => setOpen(true), []);
	const handleClose = React.useCallback(() => setOpen(false), []);
	const navigate: NavigateFunction = useNavigate();
	const dispatch: AppDispatch = useDispatch();

	const description: string = `Popup`;
	const handleChangeList = React.useCallback(() => {
		setSelected(!selected);
		dispatch(changeDisplayList(!selected));
	}, [dispatch, selected]);

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
								News App
							</Typography>
						</Grid>
						<Grid item xs />
						<Grid item>
							<ToggleButtonStyled
								value="check"
								selected={selected}
								size="small"
								onChange={handleChangeList}
							>
								{!selected ? <WindowIcon /> : <ReorderIcon />}
							</ToggleButtonStyled>
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
