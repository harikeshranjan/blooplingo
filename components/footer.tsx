import Link from "next/link";

export default function Footer() {
	return (
		<footer className="w-full border-t border-border px-5 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-5xl mx-auto">
			<span className="text-sm text-muted-foreground">Blooplingo</span>
			<div className="flex gap-6 text-sm text-muted-foreground">
				<Link
					href="/russian/alphabet"
					className="hover:text-foreground transition-colors"
				>
					Russian
				</Link>
				<Link
					href="/turkish/alphabet"
					className="hover:text-foreground transition-colors"
				>
					Turkish
				</Link>
				<Link
					href="/games"
					className="hover:text-foreground transition-colors"
				>
					Games
				</Link>
			</div>
		</footer>
	);
}
