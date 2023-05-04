import {
	AppBar,
	Toolbar,
	Grid,
	IconButton,
	Typography,
	Button,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { Popup } from "./";
import ReorderIcon from "@mui/icons-material/Reorder";
import WindowIcon from "@mui/icons-material/Window";
import { ToggleButtonStyled } from "../theme/general.theme";
import { useArticles } from "hooks/articles/useArticles.hook";
import { popupConfig } from "../config/popup.config";

export default function Header({
	onDrawerChange,
}: {
	onDrawerChange: () => void;
}): JSX.Element {
	const [open, setOpen] = React.useState<boolean>(false);
	const handleOpen = React.useCallback(() => setOpen(true), []);
	const handleClose = React.useCallback(() => setOpen(false), []);
	const navigate: NavigateFunction = useNavigate();
	const { onChangeView, articles } = useArticles();
	const handleChangeList = React.useCallback(() => {
		onChangeView();
	}, [articles]);

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
								selected={articles.grid}
								size="small"
								onChange={handleChangeList}
							>
								{!articles.grid ? <WindowIcon /> : <ReorderIcon />}
							</ToggleButtonStyled>
						</Grid>
						<Grid item>
							<Button onClick={handleOpen} sx={{ p: 1 }}>
								Kontakt
							</Button>
							<Popup isOpen={open} onClose={handleClose} {...popupConfig} />
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</React.Fragment>
	);
}
