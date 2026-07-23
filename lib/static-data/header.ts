export type HeaderItem = {
	title: string;
	href: string;
	description?: string;
	subitems: HeaderItem[];
	isNew: boolean;
	comingSoon: boolean;
};

export const headerData = [
	{
		heading: "Russian",
		subitems: [
			{
				title: "Alphabet",
				href: "/russian/alphabet",
				description:
					"The chart of the Russian (cyrillic) alphabet with the corresponding letters and their sounds",
				subitems: [],
				isNew: false,
				comingSoon: false,
			},
			{
				title: "Vocabulary (Personalized)",
				href: "/russian/vocabulary",
				description: "Your personalized vocabulary list for Russian",
				subitems: [],
				isNew: false,
				comingSoon: false,
			},
			{
				title: "Common Phrases",
				href: "/russian/common-phrases",
				description:
					"Common Russian phrases, their translations and examples",
				subitems: [],
				isNew: false,
				comingSoon: false,
			},
			{
				title: "Grammar",
				href: "/russian/grammar",
				description: "Grammar rules and examples for Russian",
				subitems: [],
				isNew: false,
				comingSoon: true,
			},
		],
		isNew: false,
		comingSoon: false,
	},
	{
		heading: "Turkish",
		subitems: [
			{
				title: "Alphabet",
				href: "/turkish/alphabet",
				description:
					"The chart of the Turkish alphabet with the corresponding letters and their sounds",
				subitems: [],
				isNew: false,
				comingSoon: false,
			},
			{
				title: "Vocabulary (Personalized)",
				href: "/turkish/vocabulary",
				description: "Your personalized vocabulary list for Turkish",
				subitems: [],
				isNew: false,
				comingSoon: false,
			},
			{
				title: "Common Phrases",
				href: "/turkish/common-phrases",
				description:
					"Common Turkish phrases, their translations and examples",
				subitems: [],
				isNew: false,
				comingSoon: false,
			},
			{
				title: "Grammar",
				href: "/turkish/grammar",
				description: "Grammar rules and examples for Turkish",
				subitems: [],
				isNew: false,
				comingSoon: true,
			},
		],
		isNew: false,
		comingSoon: false,
	},
	{
		heading: "Games",
		subitems: [
			{
				title: "Flashcards",
				href: "/games/flashcards",
				description: "Learn vocabulary through flashcards",
				subitems: [],
				isNew: false,
				comingSoon: true,
			},
		],
		isNew: false,
		comingSoon: false,
	},
] as const;
