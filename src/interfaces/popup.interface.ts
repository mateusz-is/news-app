export interface PopupProps {
	isOpen: boolean;
	onClose: () => void;
	author?: string;
	title?: string;
	content?: string;
	description?: string;
	url?: string;
}

