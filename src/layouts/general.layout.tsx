import React from "react";
import { Box, ThemeProvider, useMediaQuery } from "@mui/material";
import { theme } from "theme/general.theme";
import { NavigationMenu, Header, Footer } from "components";

type GeneralLayoutProps = {
	children: React.ReactNode;
};

export default function GeneralLayout({
	children,
}: GeneralLayoutProps): JSX.Element {
	const [mobileOpen, setMobileOpen] = React.useState<boolean>(false);
	const isSmUp: boolean = useMediaQuery(theme.breakpoints.up("sm"));

	const handleChangeDrawer = React.useCallback(() => {
		setMobileOpen(!mobileOpen);
	}, [mobileOpen]);

	const widthDrawer = 200;

	return (
		<React.Fragment>
			<ThemeProvider theme={theme}>
				<Box sx={{ display: "flex", minHeight: "100vh" }}>
					<Box
						component="nav"
						sx={{ width: { sm: 200 }, flexShrink: { sm: 0 } }}
					>
						{isSmUp ? null : (
							<NavigationMenu
								PaperProps={{ style: { width: widthDrawer } }}
								variant="temporary"
								open={mobileOpen}
								onClose={handleChangeDrawer}
							/>
						)}
						<NavigationMenu
							PaperProps={{ style: { width: widthDrawer } }}
							sx={{ display: { sm: "block", xs: "none" } }}
						/>
					</Box>
					<Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
						<Header onDrawerChange={handleChangeDrawer} />
						<Box
							component="main"
							sx={{ flex: 1, py: 2, px: 2, bgcolor: "#eaeff1" }}
						>
							{children}
						</Box>
						<Box component="footer" sx={{ p: 2, bgcolor: "#eaeff1" }}>
							<Footer />
						</Box>
					</Box>
				</Box>
			</ThemeProvider>
		</React.Fragment>
	);
}
