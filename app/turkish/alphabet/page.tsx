"use client";

import { useState, useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import {
	alphabet,
	Letter,
	LetterType,
	stats,
	typeBadgeVariant,
	typeLabel,
} from "@/lib/static-data/turkish/alphabet";

function LetterCard({ letter, index }: { letter: Letter; index: number }) {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger>
					<div
						className="group relative flex flex-col rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-sm transition-all duration-150 cursor-default overflow-hidden"
						style={{ animationDelay: `${index * 18}ms` }}
					>
						{/* Letter display */}
						<div className="flex items-center justify-center gap-3 pt-7 pb-4 px-4">
							<span
								className="font-serif font-bold leading-none text-foreground select-none"
								style={{ fontSize: "3.6rem", lineHeight: 1 }}
							>
								{letter.upper}
							</span>
							<span
								className="font-serif text-muted-foreground leading-none select-none"
								style={{ fontSize: "2.4rem", lineHeight: 1 }}
							>
								{letter.lower}
							</span>
						</div>

						{/* Divider */}
						<div className="h-px bg-border mx-4" />

						{/* Info */}
						<div className="flex flex-col gap-2 px-4 py-4 flex-1">
							{/* Sound */}
							<div className="flex items-baseline justify-between gap-2">
								<span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">
									Sound
								</span>
								<span className="font-mono text-sm font-semibold text-foreground">
									/{letter.sound}/
								</span>
							</div>

							{/* Romanized */}
							<div className="flex items-baseline justify-between gap-2">
								<span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">
									Romanized
								</span>
								<span className="font-mono text-sm text-foreground">
									{letter.romanized}
								</span>
							</div>

							{/* Divider */}
							<div className="h-px bg-border my-1" />

							{/* Example word */}
							<div>
								<div className="flex items-baseline justify-between gap-1">
									<span
										className="font-serif font-semibold text-foreground"
										style={{ fontSize: "1.05rem" }}
									>
										{letter.exampleWord}
									</span>
									<span className="text-[11px] text-muted-foreground font-mono shrink-0">
										{letter.examplePronounced}
									</span>
								</div>
								<p className="text-xs text-muted-foreground mt-0.5">
									{letter.exampleMeaning}
								</p>
							</div>
						</div>

						{/* Badge footer */}
						<div className="px-4 pb-4">
							<Badge
								variant={typeBadgeVariant[letter.type]}
								className="text-[10px] px-2 py-0.5"
							>
								{typeLabel[letter.type]}
							</Badge>
						</div>
					</div>
				</TooltipTrigger>
				{letter.tip && (
					<TooltipContent
						side="bottom"
						className="max-w-50 text-center text-xs"
					>
						{letter.tip}
					</TooltipContent>
				)}
			</Tooltip>
		</TooltipProvider>
	);
}

function LetterGrid({ letters }: { letters: Letter[] }) {
	if (letters.length === 0) {
		return (
			<div className="py-24 text-center text-muted-foreground text-sm">
				No letters match your search.
			</div>
		);
	}
	return (
		<div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
			{letters.map((letter, i) => (
				<LetterCard key={letter.upper} letter={letter} index={i} />
			))}
		</div>
	);
}

export default function TurkishAlphabetPage() {
	const [search, setSearch] = useState("");

	const filtered = useMemo(() => {
		const q = search.toLowerCase().trim();
		if (!q) return alphabet;

		return alphabet.filter(
			(l) =>
				l.upper.toLowerCase().includes(q) ||
				l.lower.toLowerCase().includes(q) ||
				l.sound.toLowerCase().includes(q) ||
				l.romanized.toLowerCase().includes(q) ||
				l.exampleWord.toLowerCase().includes(q) ||
				l.exampleMeaning.toLowerCase().includes(q),
		);
	}, [search]);

	const byType = (type: LetterType | "all") =>
		type === "all" ? filtered : filtered.filter((l) => l.type === type);

	return (
		<main className="min-h-screen bg-background text-foreground">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
				{/* Header */}
				<div className="mb-10">
					<div className="flex items-center gap-2 mb-4">
						<Badge
							variant="outline"
							className="text-xs tracking-wide"
						>
							Turkish
						</Badge>
						<span className="text-muted-foreground text-xs">/</span>
						<span className="text-xs text-muted-foreground">
							Alphabet
						</span>
					</div>

					<h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-3">
						The Turkish alphabet
					</h1>

					<p className="text-muted-foreground text-base max-w-xl leading-relaxed">
						29 letters. Each one shown with its capital, lowercase,
						pronunciation, and a real Turkish word to help anchor it
						in memory. Hover any card for a learner tip.
					</p>
				</div>

				{/* Stats */}
				<div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
					{stats.map((s) => (
						<div
							key={s.label}
							className="rounded-xl border border-border bg-card px-5 py-4 flex flex-col gap-1"
						>
							<span className="text-2xl font-bold">
								{s.value}
							</span>
							<span className="text-xs text-muted-foreground">
								{s.label}
							</span>
						</div>
					))}
				</div>

				{/* Search */}
				<div className="mb-6 relative max-w-sm">
					<svg
						className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
						width="15"
						height="15"
						viewBox="0 0 15 15"
						fill="none"
					>
						<circle
							cx="6.5"
							cy="6.5"
							r="4.5"
							stroke="currentColor"
							strokeWidth="1.4"
						/>
						<line
							x1="10"
							y1="10"
							x2="13.5"
							y2="13.5"
							stroke="currentColor"
							strokeWidth="1.4"
							strokeLinecap="round"
						/>
					</svg>

					<Input
						placeholder="Search letters, sounds, or words..."
						className="pl-9"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
				</div>

				{/* Tabs */}
				<Tabs defaultValue="all">
					<TabsList className="mb-6">
						<TabsTrigger value="all">
							All
							<span className="ml-1.5 text-[11px] text-muted-foreground">
								{byType("all").length}
							</span>
						</TabsTrigger>

						<TabsTrigger value="vowel">
							Vowels
							<span className="ml-1.5 text-[11px] text-muted-foreground">
								{byType("vowel").length}
							</span>
						</TabsTrigger>

						<TabsTrigger value="consonant">
							Consonants
							<span className="ml-1.5 text-[11px] text-muted-foreground">
								{byType("consonant").length}
							</span>
						</TabsTrigger>
					</TabsList>

					<TabsContent value="all">
						<LetterGrid letters={byType("all")} />
					</TabsContent>

					<TabsContent value="vowel">
						<div className="mb-5 p-4 rounded-xl border border-border bg-muted/40 text-sm text-muted-foreground max-w-2xl leading-relaxed">
							Turkish has{" "}
							<strong className="text-foreground font-semibold">
								8 vowels
							</strong>
							. Vowel harmony is one of the defining features of
							Turkish, helping words flow naturally and making
							pronunciation very consistent.
						</div>

						<LetterGrid letters={byType("vowel")} />
					</TabsContent>

					<TabsContent value="consonant">
						<div className="mb-5 p-4 rounded-xl border border-border bg-muted/40 text-sm text-muted-foreground max-w-2xl leading-relaxed">
							Turkish has{" "}
							<strong className="text-foreground font-semibold">
								21 consonants
							</strong>
							. Most letters always represent the same sound,
							making Turkish one of the most phonetic languages to
							read and pronounce.
						</div>

						<LetterGrid letters={byType("consonant")} />
					</TabsContent>
				</Tabs>

				<p className="mt-14 text-xs text-muted-foreground text-center max-w-lg mx-auto leading-relaxed">
					Pronunciations shown are approximate English equivalents.
					Turkish spelling is highly phonetic, so once you learn the
					alphabet, most words can be pronounced exactly as they are
					written.
				</p>
			</div>
		</main>
	);
}
