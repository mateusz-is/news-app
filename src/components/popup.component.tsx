import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Divider } from "@mui/material";

interface PopupProps {
	isOpen: boolean;
	onClose: () => void;
	author?: string;
	title?: string;
	content?: string;
	description?: string;
	url?: string;
}

const style = {
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
				<Box sx={style}>
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
