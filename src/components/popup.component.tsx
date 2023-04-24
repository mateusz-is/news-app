import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Divider } from "@mui/material";
import { popupStyle } from "theme/general.theme";
import { PopupProps } from "../interfaces/popup.interface";

export default function Popup({
	isOpen,
	onClose,
	author,
	title,
	content,
	description,
	url,
}: PopupProps): JSX.Element {
	return (
		<div>
			<Modal
				open={isOpen}
				onClose={onClose}
				aria-describedby="popup-description"
			>
				<Box sx={popupStyle}>
					<Box sx={{ flex: 1 }}>
						{title && (
							<Typography component="h2" variant="h6">
								{title}
							</Typography>
						)}
						{content && (
							<Typography variant="body1" color="text.secondary">
								{content}
							</Typography>
						)}
						{description && (
							<Typography variant="body1" color="text.secondary">
								{description}
							</Typography>
						)}
						{author && <Typography variant="caption">{author}</Typography>}
						{url && (
							<>
								<Divider sx={{ mb: 2, mt: 4 }} />
								<Button href={url} target="_blank">
									Przjedź do artykułu
								</Button>
							</>
						)}
					</Box>
				</Box>
			</Modal>
		</div>
	);
}
