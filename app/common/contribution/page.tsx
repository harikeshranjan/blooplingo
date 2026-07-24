import { BookMarked, MessageSquareText, TrendingUp, Plus } from "lucide-react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ContributionPage() {
	return (
		<div className="min-h-screen bg-linear-to-b from-background via-background to-muted/30">
			<div className="mx-auto px-6 py-4">
				<div className="flex justify-center items-center">
					<ContributionsSection />
				</div>
			</div>
		</div>
	);
}

type ContributionStat = {
	label: string;
	value: number;
	icon: React.ReactNode;
	language: string;
	color: string;
};

const contributionStats: ContributionStat[] = [
	{
		label: "Words Added",
		value: 142,
		icon: <BookMarked className="h-4 w-4" />,
		language: "Russian",
		color: "text-foreground",
	},
	{
		label: "Phrases Added",
		value: 58,
		icon: <MessageSquareText className="h-4 w-4" />,
		language: "Russian",
		color: "text-foreground",
	},
	{
		label: "Words Added",
		value: 34,
		icon: <BookMarked className="h-4 w-4" />,
		language: "Turkish",
		color: "text-muted-foreground",
	},
	{
		label: "Phrases Added",
		value: 12,
		icon: <MessageSquareText className="h-4 w-4" />,
		language: "Turkish",
		color: "text-muted-foreground",
	},
];

function StatCard({ stat }: { stat: ContributionStat }) {
	const percentage = Math.min(stat.value, 100);

	return (
		<Card
			className="
				group
				overflow-hidden
				rounded-3xl
				border-border/60
				transition-all
				duration-300
				hover:-translate-y-1
				hover:shadow-xl
			"
		>
			<CardContent className="p-6">
				{/* Header */}
				<div className="flex items-start justify-between">
					<div className="flex items-center gap-4">
						<div
							className="
								flex
								h-12
								w-12
								items-center
								justify-center
								rounded-2xl
								bg-primary/10
								text-primary
								transition-transform
								group-hover:scale-110
							"
						>
							{stat.icon}
						</div>

						<div>
							<p className="font-semibold">{stat.label}</p>

							<p className="text-sm text-muted-foreground">
								{stat.language}
							</p>
						</div>
					</div>

					<Badge variant="secondary" className="rounded-full">
						+12%
					</Badge>
				</div>

				{/* Value */}
				<div className="mt-8">
					<h2 className="text-5xl font-black tracking-tight">
						{stat.value}
					</h2>

					<p className="mt-1 text-sm text-muted-foreground">
						Total {stat.label.toLowerCase()}
					</p>
				</div>

				{/* Progress */}
				<div className="mt-8">
					<div className="mb-2 flex justify-between text-xs text-muted-foreground">
						<span>Progress</span>

						<span>{percentage}%</span>
					</div>

					<div className="h-2 overflow-hidden rounded-full bg-muted">
						<div
							className="h-full rounded-full bg-primary transition-all duration-700"
							style={{
								width: `${percentage}%`,
							}}
						/>
					</div>
				</div>

				{/* Footer */}
				<div className="mt-6 flex items-center justify-between border-t pt-4">
					<p className="text-xs text-muted-foreground">
						Last updated today
					</p>

					<div className="flex items-center gap-1 text-sm font-medium text-green-600 dark:text-green-400">
						<TrendingUp className="h-4 w-4" />
						Growing
					</div>
				</div>
			</CardContent>
		</Card>
	);
}

function ContributionsSection() {
	const languages = Array.from(
		new Set(contributionStats.map((s) => s.language)),
	);

	const totalContributions = contributionStats.reduce(
		(acc, stat) => acc + stat.value,
		0,
	);

	return (
		<div className="space-y-8">
			{/* Overview */}
			<Card className="rounded-3xl overflow-hidden">
				<CardContent className="p-8">
					<div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
						<div>
							<h2 className="text-2xl font-bold">
								Contribution Analytics
							</h2>

							<p className="mt-2 text-muted-foreground">
								Track your impact across every language.
							</p>
						</div>

						<div className="grid grid-cols-3 gap-4">
							<div className="rounded-2xl bg-muted/50 p-5 text-center">
								<p className="text-3xl font-bold">
									{totalContributions}
								</p>

								<p className="mt-1 text-xs text-muted-foreground uppercase tracking-wider">
									Total
								</p>
							</div>

							<div className="rounded-2xl bg-muted/50 p-5 text-center">
								<p className="text-3xl font-bold">
									{languages.length}
								</p>

								<p className="mt-1 text-xs text-muted-foreground uppercase tracking-wider">
									Languages
								</p>
							</div>

							<div className="rounded-2xl bg-primary text-primary-foreground p-5 text-center shadow">
								<p className="text-3xl font-bold">A+</p>

								<p className="mt-1 text-xs opacity-80 uppercase tracking-wider">
									Rank
								</p>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>

			{/* Languages */}
			{languages.map((language) => {
				const stats = contributionStats.filter(
					(stat) => stat.language === language,
				);

				const total = stats.reduce((acc, stat) => acc + stat.value, 0);

				return (
					<Card key={language} className="rounded-3xl">
						<CardHeader>
							<div className="flex items-center justify-between">
								<div>
									<CardTitle className="text-xl">
										{language}
									</CardTitle>

									<CardDescription>
										{total} total contributions
									</CardDescription>
								</div>

								<Badge
									variant="secondary"
									className="rounded-full px-4 py-1"
								>
									Active
								</Badge>
							</div>
						</CardHeader>

						<CardContent className="space-y-6">
							<div className="grid gap-5 md:grid-cols-2">
								{stats.map((stat, index) => (
									<StatCard key={index} stat={stat} />
								))}
							</div>

							<div>
								<div className="mb-2 flex justify-between text-sm">
									<span>Overall Progress</span>

									<span className="font-medium">
										{Math.min(total, 100)}%
									</span>
								</div>

								<div className="h-2 overflow-hidden rounded-full bg-muted">
									<div
										className="h-full rounded-full bg-primary transition-all"
										style={{
											width: `${Math.min(total, 100)}%`,
										}}
									/>
								</div>
							</div>
						</CardContent>
					</Card>
				);
			})}

			<Card className="rounded-3xl border-dashed">
				<CardContent className="flex flex-col items-center justify-center gap-4 py-12">
					<div className="rounded-full bg-muted p-4">
						<Plus className="h-6 w-6" />
					</div>

					<div className="text-center">
						<h3 className="font-semibold">
							Add another contribution type
						</h3>

						<p className="mt-1 text-sm text-muted-foreground">
							Expand your contribution tracking with a new
							category.
						</p>
					</div>

					<Button className="rounded-xl">Add Category</Button>
				</CardContent>
			</Card>
		</div>
	);
}
