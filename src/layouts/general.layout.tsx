import React from "react";
import { Box, ThemeProvider, useMediaQuery } from "@mui/material";
import { theme } from "theme/general.theme";
import Header from "components/header.component";
import NavigationMenu from "components/navigationMenu.component";
import Footer from "components/footer.component";

export default function GeneralLayout({ children }: any): JSX.Element {
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));

	const handleChangeDrawer = () => {
		setMobileOpen(!mobileOpen);
	};
	const widthDrawer: number = 200;

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
							sx={{ flex: 1, py: 6, px: 4, bgcolor: "#eaeff1" }}
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
