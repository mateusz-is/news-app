const hoursToString = (date: Date) => {
	const hours: string = date.getHours().toString().padStart(2, "0");
	const minutes: string = date.getMinutes().toString().padStart(2, "0");
	return `${hours}:${minutes}`;
};

const fullDateToString = (date: Date) => {
	const day: string = date.getDay().toString().padStart(2, "0");
	const month: string = date.getMonth().toString().padStart(2, "0");
	const year: string = date.getFullYear().toString().padStart(2, "0");
	const hours: string = date.getHours().toString().padStart(2, "0");
	const minutes: string = date.getMinutes().toString().padStart(2, "0");
	return `${day}/${month}/${year} Godzina: ${hours}:${minutes}`;
};


export {
	hoursToString,
	fullDateToString
}