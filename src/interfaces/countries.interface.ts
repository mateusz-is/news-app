interface Flags {
	alt: string;
	png: string;
	svg: string;
}

interface Name {
	common: string;
	official: string;
	nativeName: {
		[key: string]: {
			[key: string]: string;
		};
	};
}

export interface Countries {
	flags: Flags;
	name: Name;
	cca2: string;
}


