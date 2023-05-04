export interface PopupProps {
	isOpen: boolean;
	onClose: () => void;
	title?: string;
	description?: string;
	cta?: string;
	cta_label?: string;
}
