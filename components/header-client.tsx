"use client";

import Link from "next/link";
import { useState } from "react";
import { BloopMark } from "./bloop-mark";
import ModeToggle from "./mode-toggle";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
	Menu,
	X,
	ChevronDown,
	User,
	Settings,
	LogOut,
	Languages,
} from "lucide-react";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { headerData } from "@/lib/static-data/header";
import { signOut } from "@/app/actions/auth";
import { useRouter } from "next/navigation";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface User {
	id: string;
	email: string;
}

interface Profile {
	id: string;
	first_name: string;
	last_name: string;
	role: string;
	phone_number: string;
	created_at: string;
}

interface HeaderProp {
	user: User | null;
	profile: Profile;
}

export default function HeaderClient({ user, profile }: HeaderProp) {
	const [mobileOpen, setMobileOpen] = useState(false);
	const [openSection, setOpenSection] = useState<number | null>(null);
	const router = useRouter();

	return (
		<header className="sticky top-0 z-50 w-full flex items-center justify-center border-b border-white/10 bg-background/60 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
			{/* Glass bar */}
			<div className="w-full lg:w-2/3 flex items-center justify-between px-5 py-2">
				{/* Logo */}
				<Link
					href="/"
					className="flex items-center gap-2 font-semibold shrink-0"
				>
					<BloopMark className="w-8 h-8" />
					<span className="hidden sm:inline">Blooplingo</span>
				</Link>

				{/* Desktop nav — lg and up */}
				<NavigationMenu className="hidden lg:flex">
					<NavigationMenuList>
						{headerData.map((element, index) => (
							<NavigationMenuItem
								key={index}
								className="px-1 py-2"
							>
								<NavigationMenuTrigger className="rounded bg-transparent hover:bg-white/10 data-[state=open]:bg-white/10">
									{element.heading}
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="min-w-55">
										{element.subitems.map(
											(subitem, subindex) => (
												<ListItem
													key={subindex}
													title={subitem.title}
													href={subitem.href}
													isNew={subitem.isNew}
													comingSoon={
														subitem.comingSoon
													}
												>
													{subitem.description}
												</ListItem>
											),
										)}
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
						))}
					</NavigationMenuList>
				</NavigationMenu>

				{/* Right side */}
				<div className="flex items-center gap-3">
					<ModeToggle />
					{user ? (
						<DropdownMenu>
							<DropdownMenuTrigger>
								<Button
									variant="ghost"
									className="h-10 px-2 rounded-full hover:bg-accent"
								>
									<Avatar className="h-8 w-8">
										<AvatarImage
											src={
												"https://github.com/shadcn.png"
											}
										/>
										<AvatarFallback>
											{profile?.first_name.charAt(0) +
												profile?.last_name.charAt(0)}
										</AvatarFallback>
									</Avatar>

									<ChevronDown className="ml-2 h-4 w-4 opacity-60" />
								</Button>
							</DropdownMenuTrigger>

							<DropdownMenuContent
								align="end"
								className="w-72 rounded-xl p-2"
							>
								{/* User */}
								<div className="flex items-center gap-3 rounded-lg px-2 py-2">
									<Avatar className="h-10 w-10">
										<AvatarImage
											src={
												"https://github.com/shadcn.png"
											}
										/>
										<AvatarFallback>
											{profile?.first_name.charAt(0) +
												profile?.last_name.charAt(0)}
										</AvatarFallback>
									</Avatar>

									<div className="flex flex-col">
										<span className="font-medium">
											{profile?.first_name ?? "John Doe"}
										</span>

										<span className="text-xs text-muted-foreground">
											{user?.email}
										</span>
									</div>
								</div>

								<DropdownMenuSeparator />

								<DropdownMenuItem className="cursor-pointer">
									<User className="mr-2 h-4 w-4" />
									Profile
								</DropdownMenuItem>

								<DropdownMenuItem className="cursor-pointer">
									<Settings className="mr-2 h-4 w-4" />
									Settings
								</DropdownMenuItem>

								<DropdownMenuSeparator />

								{profile.role !== "USER" && (
									<>
										<DropdownMenuGroup>
											<DropdownMenuLabel className="flex items-center gap-2">
												<Languages className="h-4 w-4" />
												Contributors
											</DropdownMenuLabel>

											{profile.role !==
												"TURKISH_CONTRIBUTER" && (
												<DropdownMenuItem>
													🇷🇺 Russian
												</DropdownMenuItem>
											)}

											{profile.role !==
												"RUSSIAN_CONTRIBUTER" && (
												<DropdownMenuItem>
													🇹🇷 Turkish
												</DropdownMenuItem>
											)}
										</DropdownMenuGroup>

										<DropdownMenuSeparator />
									</>
								)}

								<DropdownMenuItem
									onClick={signOut}
									className="cursor-pointer text-red-500 focus:text-red-500"
								>
									<LogOut className="mr-2 h-4 w-4" />
									Sign Out
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					) : (
						<Button
							variant="default"
							size="default"
							className="hidden sm:inline-flex"
							onClick={() => router.push("/auth/login")}
						>
							Sign In
						</Button>
					)}

					{/* Hamburger — below lg */}
					<button
						className="lg:hidden p-1.5 rounded-md hover:bg-white/10 transition-colors"
						onClick={() => setMobileOpen((v) => !v)}
						aria-label="Toggle menu"
					>
						{mobileOpen ? (
							<X className="w-5 h-5" />
						) : (
							<Menu className="w-5 h-5" />
						)}
					</button>
				</div>
			</div>

			{/* Mobile drawer */}
			{mobileOpen && (
				<div className="absolute top-full left-0 right-0 bg-background/80 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] lg:hidden max-h-[80vh] overflow-y-auto">
					<nav className="px-4 py-3 space-y-1">
						{headerData.map((element, index) => (
							<div key={index}>
								<button
									className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors"
									onClick={() =>
										setOpenSection(
											openSection === index
												? null
												: index,
										)
									}
								>
									{element.heading}
									<ChevronDown
										className={`w-4 h-4 transition-transform ${
											openSection === index
												? "rotate-180"
												: ""
										}`}
									/>
								</button>

								{openSection === index && (
									<div className="mt-1 ml-2 space-y-0.5 border-l border-white/10 pl-3">
										{element.subitems.map(
											(subitem, subindex) => (
												<Link
													key={subindex}
													href={subitem.href}
													className="block px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
													onClick={() =>
														setMobileOpen(false)
													}
												>
													<div className="flex items-center gap-2 text-sm font-medium">
														{subitem.title}
														{subitem.isNew && (
															<Badge className="bg-red-500 rounded text-xs">
																New
															</Badge>
														)}
														{subitem.comingSoon && (
															<Badge className="bg-red-500 rounded text-xs">
																Coming Soon
															</Badge>
														)}
													</div>
													{subitem.description && (
														<p className="mt-0.5 text-xs text-muted-foreground line-clamp-2">
															{
																subitem.description
															}
														</p>
													)}
												</Link>
											),
										)}
									</div>
								)}
							</div>
						))}

						{/* Sign in on mobile */}
						<div className="pt-2 pb-1">
							<Button
								variant="default"
								className="w-full sm:hidden"
							>
								Sign In
							</Button>
						</div>
					</nav>
				</div>
			)}
		</header>
	);
}

function ListItem({
	title,
	children,
	href,
	isNew,
	comingSoon,
	className,
	...props
}: React.ComponentPropsWithoutRef<"li"> & {
	href: string;
	isNew?: boolean;
	comingSoon?: boolean;
}) {
	return (
		<li {...props}>
			<NavigationMenuLink>
				<Link
					href={href}
					className={`group block rounded-lg px-3 py-2 no-underline outline-none transition-all duration-200 hover:bg-white/10 focus:bg-white/10 focus-visible:ring-2 focus-visible:ring-ring ${className ?? ""}`}
				>
					<div className="space-y-1">
						<h4 className="flex items-center gap-2 text-sm font-semibold leading-none transition-colors group-hover:text-primary">
							{title}
							{isNew && (
								<Badge className="bg-red-500 rounded text-xs">
									New
								</Badge>
							)}
							{comingSoon && (
								<Badge className="bg-red-500 rounded text-xs">
									Coming Soon
								</Badge>
							)}
						</h4>
						<p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
							{children}
						</p>
					</div>
				</Link>
			</NavigationMenuLink>
		</li>
	);
}
