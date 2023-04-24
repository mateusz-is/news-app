import { Theme, ToggleButton, createTheme, styled } from "@mui/material";

let theme: Theme = createTheme({
	palette: {
		primary: {
			light: "#9898ff",
			main: "#5d5dd1",
			dark: "#1e1e37",
		},
	},

	mixins: {
		toolbar: {
			minHeight: 48,
		},
	},
});

theme = {
	...theme,
	components: {
		MuiDrawer: {
			styleOverrides: {
				paper: {
					backgroundColor: "#081627",
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					backgroundColor: "#ffffff",
					color: "#000000",
					"&:hover": {
						backgroundColor: "#dddddd",
					},
				},
			},
		},
		MuiToggleButton: {
			styleOverrides: {
				root: {
					backgroundColor: "#ffffff",
					color: "#000000",
					"&:hover": {
						backgroundColor: "#dddddd",
					},
				},
			},
		},

		MuiIconButton: {
			styleOverrides: {
				root: {
					padding: theme.spacing(1),
				},
			},
		},
		MuiListItemText: {
			styleOverrides: {
				primary: {
					fontSize: 14,
					fontWeight: theme.typography.fontWeightMedium,
				},
			},
		},
	},
};

const ToggleButtonStyled = styled(ToggleButton)({
	"&.Mui-selected, &.Mui-selected:hover": {
		color: "#000",
		backgroundColor: "#fff",
	},
});

const item = {
	py: "2px",
	px: 3,
	cursor: "pointer",
	color: "rgba(255, 255, 255, 0.7)",
	"&:hover, &:focus": {
		bgcolor: "rgba(255, 255, 255, 0.08)",
	},
};

const popupStyle = {
	position: "absolute",
	width: 650,
	textAlign: "center",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	bgcolor: "background.paper",
	boxShadow: 8,
	p: 4,
	display: "flex",
};

export { theme, ToggleButtonStyled, item, popupStyle };
