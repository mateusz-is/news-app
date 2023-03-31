import { Theme, createTheme } from "@mui/material";

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

export { theme };
