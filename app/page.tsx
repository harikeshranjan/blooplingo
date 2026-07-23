"use client";
import Link from "next/link";

const tickerWords = [
	{ word: "Привет", lang: "RU", meaning: "Hello" },
	{ word: "Merhaba", lang: "TR", meaning: "Hello" },
	{ word: "Спасибо", lang: "RU", meaning: "Thank you" },
	{ word: "Teşekkür", lang: "TR", meaning: "Thank you" },
	{ word: "Да", lang: "RU", meaning: "Yes" },
	{ word: "Evet", lang: "TR", meaning: "Yes" },
	{ word: "Красиво", lang: "RU", meaning: "Beautiful" },
	{ word: "Güzel", lang: "TR", meaning: "Beautiful" },
	{ word: "Понимаю", lang: "RU", meaning: "I understand" },
	{ word: "Anlıyorum", lang: "TR", meaning: "I understand" },
	{ word: "Сегодня", lang: "RU", meaning: "Today" },
	{ word: "Bugün", lang: "TR", meaning: "Today" },
];

const features = [
	{
		icon: (
			<svg
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				aria-hidden="true"
			>
				<path
					d="M4 5h12M4 10h8M4 15h10"
					stroke="currentColor"
					strokeWidth="1.6"
					strokeLinecap="round"
				/>
			</svg>
		),
		heading: "Alphabet foundations",
		body: "Start with the script. Each letter introduced with its sound, shape, and a word you already half-know.",
		langs: ["Cyrillic", "Latin"],
	},
	{
		icon: (
			<svg
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				aria-hidden="true"
			>
				<circle
					cx="10"
					cy="10"
					r="7"
					stroke="currentColor"
					strokeWidth="1.6"
				/>
				<path
					d="M10 7v3l2.5 2.5"
					stroke="currentColor"
					strokeWidth="1.6"
					strokeLinecap="round"
				/>
			</svg>
		),
		heading: "Your vocabulary list",
		body: "Words you look up, words you stumble on — they all land in one place, sorted the way you think.",
		langs: ["Russian", "Turkish"],
	},
	{
		icon: (
			<svg
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				aria-hidden="true"
			>
				<path
					d="M3 6h14M3 10h9M3 14h11"
					stroke="currentColor"
					strokeWidth="1.6"
					strokeLinecap="round"
				/>
				<circle
					cx="16"
					cy="14"
					r="2.5"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
			</svg>
		),
		heading: "Common phrases",
		body: "Real phrases people actually say, with context — not textbook sentences you'd never use at a café.",
		langs: ["Russian", "Turkish"],
	},
];

export default function Home() {
	return (
		<main className="min-h-screen bg-background text-foreground">
			{/* ── Hero ─────────────────────────────────────────────── */}
			<section className="flex flex-col items-center justify-center text-center px-5 pt-24 pb-20 sm:pt-32 sm:pb-28">
				{/* Eyebrow */}
				<span className="inline-flex items-center gap-1.5 border border-border rounded-full px-3 py-1 text-xs font-medium text-muted-foreground mb-8 tracking-wide">
					<span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
					Russian · Turkish
				</span>

				{/* Headline */}
				<h1
					className="font-bold tracking-tight text-foreground leading-[1.08]"
					style={{
						fontSize: "clamp(2.6rem, 7vw, 5.5rem)",
						maxWidth: "14ch",
					}}
				>
					Speak before{" "}
					<em
						className="not-italic"
						style={{
							fontStyle: "normal",
							borderBottom: "3px solid hsl(var(--primary))",
							paddingBottom: "0.04em",
						}}
					>
						you&apos;re ready
					</em>
				</h1>

				{/* Subheading */}
				<p
					className="mt-6 text-muted-foreground leading-relaxed"
					style={{
						fontSize: "clamp(1rem, 2.2vw, 1.2rem)",
						maxWidth: "42ch",
					}}
				>
					Blooplingo gives you the alphabet, the words, and the
					phrases — in the order that actually makes sense. No
					subscription. No streak anxiety.
				</p>

				{/* CTAs */}
				<div className="mt-10 flex flex-wrap items-center justify-center gap-3">
					<Link
						href="/russian/alphabet"
						className="h-11 px-6 rounded-full bg-primary text-primary-foreground text-sm font-semibold inline-flex items-center hover:opacity-90 transition-opacity"
					>
						Start with Russian
					</Link>
					<Link
						href="/turkish/alphabet"
						className="h-11 px-6 rounded-full border border-border text-sm font-medium inline-flex items-center text-foreground hover:bg-muted transition-colors"
					>
						Start with Turkish
					</Link>
				</div>

				{/* Social proof strip */}
				<p className="mt-8 text-xs text-muted-foreground">
					Free to use · No account required to browse
				</p>
			</section>

			{/* ── Ticker ───────────────────────────────────────────── */}
			<div className="border-y border-border py-4 overflow-hidden select-none">
				<div className="flex gap-10 animate-[ticker_28s_linear_infinite] whitespace-nowrap w-max">
					{[...tickerWords, ...tickerWords].map((item, i) => (
						<span
							key={i}
							className="inline-flex items-baseline gap-2"
						>
							<span className="text-base font-semibold text-foreground">
								{item.word}
							</span>
							<span className="text-xs text-muted-foreground font-mono">
								{item.lang}
							</span>
							<span className="text-sm text-muted-foreground">
								— {item.meaning}
							</span>
							<span className="text-muted-foreground/30 ml-4">
								·
							</span>
						</span>
					))}
				</div>
			</div>

			{/* ── Features ─────────────────────────────────────────── */}
			<section className="px-5 py-20 sm:py-28 max-w-5xl mx-auto">
				<p className="text-xs font-semibold text-muted-foreground tracking-widest uppercase mb-12 text-center">
					What&apos;s inside
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
					{features.map((f) => (
						<div
							key={f.heading}
							className="bg-background p-8 flex flex-col gap-4"
						>
							<div className="w-9 h-9 rounded-xl border border-border flex items-center justify-center text-foreground">
								{f.icon}
							</div>
							<div>
								<h3 className="font-semibold text-base text-foreground mb-1">
									{f.heading}
								</h3>
								<p className="text-sm text-muted-foreground leading-relaxed">
									{f.body}
								</p>
							</div>
							<div className="flex gap-1.5 mt-auto pt-2">
								{f.langs.map((l) => (
									<span
										key={l}
										className="text-[11px] font-medium px-2 py-0.5 rounded border border-border text-muted-foreground"
									>
										{l}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</section>

			{/* ── Word spotlight ───────────────────────────────────── */}
			<section className="px-5 py-16 sm:py-20 max-w-5xl mx-auto">
				<div className="rounded-2xl border border-border overflow-hidden grid grid-cols-1 sm:grid-cols-2">
					{/* Left — Russian */}
					<div className="p-10 sm:p-12 border-b sm:border-b-0 sm:border-r border-border flex flex-col justify-between gap-8">
						<div>
							<span className="text-[11px] font-semibold tracking-widest text-muted-foreground uppercase">
								Russian
							</span>
							<p
								className="mt-4 font-bold text-foreground leading-none"
								style={{
									fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
									letterSpacing: "-0.02em",
								}}
							>
								Красиво
							</p>
							<p className="mt-3 text-muted-foreground text-sm italic">
								kra-SEE-va
							</p>
							<p className="mt-2 text-foreground text-base font-medium">
								Beautiful
							</p>
							<p className="mt-3 text-muted-foreground text-sm leading-relaxed">
								&quot;Какой красивый закат&quot; — What a
								beautiful sunset.
							</p>
						</div>
						<Link
							href="/russian/vocabulary"
							className="text-sm font-medium text-foreground inline-flex items-center gap-1 group"
						>
							Browse Russian vocabulary
							<span className="translate-x-0 group-hover:translate-x-1 transition-transform inline-block">
								→
							</span>
						</Link>
					</div>

					{/* Right — Turkish */}
					<div className="p-10 sm:p-12 flex flex-col justify-between gap-8">
						<div>
							<span className="text-[11px] font-semibold tracking-widest text-muted-foreground uppercase">
								Turkish
							</span>
							<p
								className="mt-4 font-bold text-foreground leading-none"
								style={{
									fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
									letterSpacing: "-0.02em",
								}}
							>
								Güzel
							</p>
							<p className="mt-3 text-muted-foreground text-sm italic">
								gü-ZEL
							</p>
							<p className="mt-2 text-foreground text-base font-medium">
								Beautiful
							</p>
							<p className="mt-3 text-muted-foreground text-sm leading-relaxed">
								&quot;Ne güzel bir gün&quot; — What a beautiful
								day.
							</p>
						</div>
						<Link
							href="/turkish/vocabulary"
							className="text-sm font-medium text-foreground inline-flex items-center gap-1 group"
						>
							Browse Turkish vocabulary
							<span className="translate-x-0 group-hover:translate-x-1 transition-transform inline-block">
								→
							</span>
						</Link>
					</div>
				</div>
			</section>

			{/* ── CTA ──────────────────────────────────────────────── */}
			<section className="px-5 py-20 sm:py-28 text-center">
				<h2
					className="font-bold text-foreground tracking-tight leading-tight"
					style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
				>
					Pick a language. Start now.
				</h2>
				<p className="mt-4 text-muted-foreground text-base max-w-sm mx-auto leading-relaxed">
					Alphabet to phrases in one place — no account needed to
					explore.
				</p>
				<div className="mt-10 flex flex-wrap justify-center gap-3">
					<Link
						href="/russian/alphabet"
						className="h-12 px-7 rounded-full bg-primary text-primary-foreground font-semibold text-sm inline-flex items-center hover:opacity-90 transition-opacity"
					>
						Russian alphabet
					</Link>
					<Link
						href="/turkish/alphabet"
						className="h-12 px-7 rounded-full border border-border text-foreground font-medium text-sm inline-flex items-center hover:bg-muted transition-colors"
					>
						Turkish alphabet
					</Link>
				</div>
			</section>
		</main>
	);
}
