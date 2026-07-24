"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Camera, Save } from "lucide-react";
import { cn } from "@/lib/utils";

function ProfileSection() {
	const [avatarHover, setAvatarHover] = useState(false);

	return (
		<div className="grid gap-6 xl:grid-cols-[1fr_320px]">
			{/* Left */}
			<div className="space-y-6">
				<Card className="rounded-3xl">
					<CardHeader>
						<CardTitle className="text-xl">
							Personal Information
						</CardTitle>

						<CardDescription>
							Manage your public profile and personal details.
						</CardDescription>
					</CardHeader>

					<CardContent className="space-y-6">
						<div className="grid gap-5 md:grid-cols-2">
							<div className="space-y-2">
								<Label htmlFor="firstName">First Name</Label>

								<Input
									id="firstName"
									defaultValue="Harikesh"
									className="h-11 rounded-xl"
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="lastName">Last Name</Label>

								<Input
									id="lastName"
									defaultValue="Ranjan Sinha"
									className="h-11 rounded-xl"
								/>
							</div>
						</div>

						<div className="space-y-2">
							<Label htmlFor="username">Username</Label>

							<div className="flex">
								<div className="flex h-11 items-center rounded-l-xl border border-r-0 bg-muted px-4 text-sm text-muted-foreground">
									@
								</div>

								<Input
									id="username"
									defaultValue="harikesh"
									className="h-11 rounded-l-none rounded-r-xl"
								/>
							</div>
						</div>

						<div className="space-y-2">
							<Label>Email</Label>

							<Input
								type="email"
								defaultValue="ranjansinhaharikesh@gmail.com"
								className="h-11 rounded-xl"
							/>
						</div>

						<div className="space-y-2">
							<Label>Bio</Label>

							<Textarea
								rows={5}
								className="rounded-xl resize-none"
								defaultValue="Learning Russian and Turkish through spaced repetition and curated content."
							/>
						</div>

						<div className="flex justify-end">
							<Button size="lg" className="rounded-xl px-6 gap-2">
								<Save className="h-4 w-4" />
								Save Changes
							</Button>
						</div>
					</CardContent>
				</Card>
			</div>

			{/* Right */}
			<div className="space-y-6">
				<Card className="rounded-3xl">
					<CardContent className="flex flex-col items-center p-8">
						<div
							className="group relative"
							onMouseEnter={() => setAvatarHover(true)}
							onMouseLeave={() => setAvatarHover(false)}
						>
							<Avatar className="h-32 w-32 border-4 border-background shadow-xl">
								<AvatarImage src="" />
								<AvatarFallback className="bg-primary text-3xl font-bold text-primary-foreground">
									HRS
								</AvatarFallback>
							</Avatar>

							<div
								className={cn(
									"absolute inset-0 flex items-center justify-center rounded-full bg-black/50 transition-opacity",
									avatarHover ? "opacity-100" : "opacity-0",
								)}
							>
								<Camera className="h-6 w-6 text-white" />
							</div>
						</div>

						<h3 className="mt-5 text-lg font-semibold">
							Harikesh Ranjan Sinha
						</h3>

						<p className="text-sm text-muted-foreground">
							@harikesh
						</p>

						<Button
							variant="outline"
							className="mt-6 w-full rounded-xl"
						>
							Upload New Photo
						</Button>
					</CardContent>
				</Card>

				<Card className="rounded-3xl">
					<CardHeader>
						<CardTitle>Profile Completion</CardTitle>
					</CardHeader>

					<CardContent>
						<div className="mb-3 flex justify-between text-sm">
							<span>Completed</span>
							<span className="font-semibold">85%</span>
						</div>

						<div className="h-2 overflow-hidden rounded-full bg-muted">
							<div className="h-full w-[85%] rounded-full bg-primary" />
						</div>

						<div className="mt-6 space-y-3 text-sm">
							<div className="flex items-center justify-between">
								<span>Photo</span>
								<Badge>Done</Badge>
							</div>

							<div className="flex items-center justify-between">
								<span>Bio</span>
								<Badge>Done</Badge>
							</div>

							<div className="flex items-center justify-between">
								<span>Social Links</span>
								<Badge variant="secondary">Missing</Badge>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}

export default function ProfilePage() {
	return (
		<div className="min-h-screen bg-linear-to-b from-background via-background to-muted/30">
			<div className="mx-auto px-6 py-4">
				<div className="flex justify-center items-center">
					<ProfileSection />
				</div>
			</div>
		</div>
	);
}
