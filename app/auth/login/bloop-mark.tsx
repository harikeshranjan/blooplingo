type Props = {
	className?: string;
};

export function BloopMark({ className }: Props) {
	return (
		<svg viewBox="0 0 32 32" fill="none" className={className}>
			<circle
				cx="16"
				cy="14"
				r="11"
				fill="currentColor"
				fillOpacity="0.15"
			/>
			<circle
				cx="16"
				cy="14"
				r="11"
				stroke="currentColor"
				strokeWidth="1.5"
			/>
			<path
				d="M10 14c0-1.5 1.2-2.7 2.7-2.7s2.7 1.2 2.7 2.7-1.2 2.7-2.7 2.7"
				stroke="currentColor"
				strokeWidth="1.4"
				strokeLinecap="round"
			/>
			<circle cx="20" cy="14" r="1.4" fill="currentColor" />
			<path
				d="M12 22.5 8.5 27l1-5.5"
				fill="currentColor"
				fillOpacity="0.15"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
