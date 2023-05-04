import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { popupStyle } from "theme/general.theme";
import { PopupProps } from "../interfaces/popup.interface";
import { Button } from "@mui/material";

export default function Popup({
	isOpen,
	onClose,
	title,
	description,
	cta,
	cta_label,
}: PopupProps) {
	return (
		<Modal open={isOpen} onClose={onClose} aria-describedby="popup-description">
			<Box sx={popupStyle}>
				<Box sx={{ flex: 1 }}>
					{title && (
						<Typography component="h2" variant="h6">
							{title}
						</Typography>
					)}
					{description && (
						<Typography variant="body1" color="text.secondary">
							{description}
						</Typography>
					)}
					{cta && <Button href={cta}>{cta_label}</Button>}
				</Box>
			</Box>
		</Modal>
	);
}
