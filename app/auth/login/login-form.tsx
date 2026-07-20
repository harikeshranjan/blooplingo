"use client";

import { useState } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from "@/components/ui/input-group";

import { Mail, Lock, Eye, EyeOff, Loader2 } from "lucide-react";

import { GREETINGS } from "./greetings";
import { BloopMark } from "./bloop-mark";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function LoginForm() {
	const [showPassword, setShowPassword] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const router = useRouter();

	function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
		setEmail(e.target.value);
	}

	function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
		setPassword(e.target.value);
	}

	function toggleShowPassword() {
		setShowPassword(!showPassword);
	}

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		setIsSubmitting(true);

		try {
			const supabase = createClient();

			const { error } = await supabase.auth.signInWithPassword({
				email,
				password,
			});

			if (error) {
				console.log("Error signing in the app: ", error.message);
				setIsSubmitting(false);
				return;
			}

			router.push("/");
		} catch (error) {
			console.log("Error signing in the app: ", error);
		} finally {
			setIsSubmitting(false);
		}
	}

	return (
		<>
			{/* Brand panel — desktop only */}
			<div className="relative hidden w-[45%] overflow-hidden bg-primary lg:flex lg:flex-col lg:justify-between lg:p-12">
				<div className="absolute inset-0 bg-linear-to-br from-primary via-primary to-primary/80" />

				{/* Greeting bubbles */}
				<div className="absolute inset-0">
					{GREETINGS.map((g) => (
						<span
							key={g.text}
							className={`absolute rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-3 py-1.5 font-medium text-primary-foreground/90 backdrop-blur-sm ${g.size}`}
							style={{
								top: g.top,
								left: g.left,
								animation:
									"bubble-float 6s ease-in-out infinite",
								animationDelay: g.delay,
							}}
						>
							{g.text}
						</span>
					))}
				</div>

				<div className="relative flex items-center gap-2 text-primary-foreground">
					<BloopMark className="h-8 w-8" />
					<span className="text-xl font-semibold tracking-tight">
						BloopLingo
					</span>
				</div>

				<div className="relative space-y-2 text-primary-foreground">
					<p className="text-2xl font-medium leading-snug text-balance">
						Practice out loud. Get better one conversation at a
						time.
					</p>

					<p className="text-sm text-primary-foreground/70">
						A private space for your language practice — no noise,
						just you and the language.
					</p>
				</div>
			</div>

			{/* Form panel */}
			<div className="flex flex-1 flex-col justify-center px-6 py-12 sm:px-10 lg:px-16">
				<div className="mx-auto w-full max-w-sm">
					{/* Mobile logo */}
					<div className="mb-10 flex items-center gap-2 lg:hidden">
						<BloopMark className="h-7 w-7 text-primary" />
						<span className="text-lg font-semibold tracking-tight text-foreground">
							BloopLingo
						</span>
					</div>

					<div className="mb-8 space-y-1.5">
						<h1 className="text-2xl font-semibold tracking-tight text-foreground">
							Welcome back
						</h1>

						<p className="text-sm text-muted-foreground">
							Sign in to continue your practice.
						</p>
					</div>

					<form onSubmit={handleSubmit} className="space-y-5">
						<div className="space-y-2">
							<Label htmlFor="email">Email</Label>

							<InputGroup>
								<InputGroupInput
									id="email"
									type="email"
									autoComplete="email"
									placeholder="you@example.com"
									value={email}
									onChange={handleEmailChange}
									required
								/>

								<InputGroupAddon>
									<Mail className="h-4 w-4" />
								</InputGroupAddon>
							</InputGroup>
						</div>

						<div className="space-y-2">
							<div className="flex items-center justify-between">
								<Label htmlFor="password">Password</Label>

								<Link
									href="/forgot-password"
									className="text-xs font-medium text-primary hover:underline"
								>
									Forgot password?
								</Link>
							</div>

							<InputGroup>
								<InputGroupInput
									id="password"
									type={showPassword ? "text" : "password"}
									value={password}
									onChange={handlePasswordChange}
									placeholder="••••••••"
									required
								/>

								<InputGroupAddon>
									<Lock className="h-4 w-4" />
								</InputGroupAddon>

								<InputGroupAddon align="inline-end">
									<button
										type="button"
										onClick={toggleShowPassword}
										className="text-muted-foreground transition-colors hover:text-foreground"
										aria-label={
											showPassword
												? "Hide password"
												: "Show password"
										}
									>
										{showPassword ? (
											<EyeOff className="h-4 w-4" />
										) : (
											<Eye className="h-4 w-4" />
										)}
									</button>
								</InputGroupAddon>
							</InputGroup>
						</div>

						<Button
							type="submit"
							className="w-full"
							disabled={isSubmitting}
						>
							{isSubmitting ? (
								<>
									<Loader2 className="h-4 w-4 animate-spin" />
									Signing in...
								</>
							) : (
								"Sign in"
							)}
						</Button>
					</form>

					<p className="mt-8 text-center text-xs text-muted-foreground">
						New to BloopLingo? Accounts are created by your admin —
						reach out to get access.
					</p>
				</div>
			</div>
		</>
	);
}
