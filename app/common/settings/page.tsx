"use client";

import { useState } from "react";
import { Sun, Moon, Monitor, Bell, Globe, Trash2, Check } from "lucide-react";
import { cn } from "@/lib/utils";

function SectionLabel({ children }: { children: React.ReactNode }) {
	return (
		<p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-600 mb-3 px-1">
			{children}
		</p>
	);
}

function SettingsCard({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<div
			className={cn(
				"rounded-2xl border border-white/6 bg-white/3 divide-y divide-white/5 overflow-hidden",
				className,
			)}
		>
			{children}
		</div>
	);
}

function Row({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<div
			className={cn(
				"flex items-center justify-between gap-4 px-5 py-4",
				className,
			)}
		>
			{children}
		</div>
	);
}

function RowLabel({
	icon,
	title,
	description,
}: {
	icon: React.ReactNode;
	title: string;
	description?: string;
}) {
	return (
		<div className="flex items-center gap-3 min-w-0">
			<div className="h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 shrink-0">
				{icon}
			</div>
			<div className="min-w-0">
				<p className="text-sm font-medium text-slate-200 leading-tight">
					{title}
				</p>
				{description && (
					<p className="text-xs text-slate-600 mt-0.5 leading-tight">
						{description}
					</p>
				)}
			</div>
		</div>
	);
}

// ─── Toggle ───────────────────────────────────────────────────────────────────

function Toggle({
	checked,
	onChange,
}: {
	checked: boolean;
	onChange: (v: boolean) => void;
}) {
	return (
		<button
			role="switch"
			aria-checked={checked}
			onClick={() => onChange(!checked)}
			className={cn(
				"relative h-5 w-9 rounded-full transition-colors duration-200 shrink-0 focus-visible:outline-2 focus-visible:outline-emerald-500/60",
				checked ? "bg-emerald-600" : "bg-white/10",
			)}
		>
			<span
				className={cn(
					"absolute top-0.5 left-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-transform duration-200",
					checked ? "translate-x-4" : "translate-x-0",
				)}
			/>
		</button>
	);
}

// ─── Theme Picker ─────────────────────────────────────────────────────────────

type Theme = "light" | "dark" | "system";

const THEMES: { value: Theme; label: string; icon: React.ReactNode }[] = [
	{ value: "light", label: "Light", icon: <Sun className="h-3.5 w-3.5" /> },
	{ value: "dark", label: "Dark", icon: <Moon className="h-3.5 w-3.5" /> },
	{
		value: "system",
		label: "System",
		icon: <Monitor className="h-3.5 w-3.5" />,
	},
];

function ThemePicker({
	value,
	onChange,
}: {
	value: Theme;
	onChange: (v: Theme) => void;
}) {
	return (
		<div className="flex gap-1.5 bg-white/4 rounded-xl p-1 border border-white/6">
			{THEMES.map((t) => (
				<button
					key={t.value}
					onClick={() => onChange(t.value)}
					className={cn(
						"flex items-center gap-1.5 px-3 py-1.5 rounded-[9px] text-xs font-medium transition-all duration-150",
						value === t.value
							? "bg-emerald-600 text-white shadow shadow-emerald-900/50"
							: "text-slate-500 hover:text-slate-300",
					)}
				>
					{t.icon}
					{t.label}
				</button>
			))}
		</div>
	);
}

// ─── Select ───────────────────────────────────────────────────────────────────

function Select({
	value,
	onChange,
	options,
}: {
	value: string;
	onChange: (v: string) => void;
	options: { value: string; label: string }[];
}) {
	return (
		<select
			value={value}
			onChange={(e) => onChange(e.target.value)}
			className="h-8 rounded-lg bg-white/5 border border-white/6 text-xs text-slate-300 px-2.5 pr-7 appearance-none cursor-pointer focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/40 transition-colors"
			style={{
				backgroundImage:
					"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%23475569'/%3E%3C/svg%3E\")",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "right 8px center",
			}}
		>
			{options.map((o) => (
				<option key={o.value} value={o.value} className="bg-[#0f1623]">
					{o.label}
				</option>
			))}
		</select>
	);
}

// ─── Danger Button ────────────────────────────────────────────────────────────

function DangerButton({
	children,
	onClick,
}: {
	children: React.ReactNode;
	onClick?: () => void;
}) {
	return (
		<button
			onClick={onClick}
			className="h-8 px-3.5 rounded-lg text-xs font-medium text-red-400 border border-red-500/20 hover:bg-red-500/10 hover:border-red-500/40 transition-all duration-150"
		>
			{children}
		</button>
	);
}

// ─── Save Toast ───────────────────────────────────────────────────────────────

function SaveBar({ onSave }: { onSave: () => void }) {
	return (
		<div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 rounded-2xl border border-white/[0.1] bg-[#0d1220]/90 backdrop-blur-xl px-5 py-3 shadow-2xl shadow-black/40">
			<span className="text-sm text-slate-400">
				You have unsaved changes
			</span>
			<button
				onClick={onSave}
				className="h-8 px-4 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
			>
				Save
			</button>
		</div>
	);
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SettingsPage() {
	const [theme, setTheme] = useState<Theme>("dark");
	const [emailDigest, setEmailDigest] = useState(true);
	const [newsAlerts, setNewsAlerts] = useState(false);
	const [language, setLanguage] = useState("en");
	const [timezone, setTimezone] = useState("Asia/Kolkata");
	const [saved, setSaved] = useState(false);
	const [dirty, setDirty] = useState(false);

	// track any change
	function change<T>(setter: (v: T) => void) {
		return (v: T) => {
			setter(v);
			setDirty(true);
			setSaved(false);
		};
	}

	function handleSave() {
		setDirty(false);
		setSaved(true);
		setTimeout(() => setSaved(false), 2500);
	}

	return (
		<div className="min-h-screen text-white">
			{/* Ambient glow */}
			<div
				className="pointer-events-none fixed inset-0 z-0"
				style={{
					background:
						"radial-gradient(ellipse 80% 50% at 50% -10%, rgba(79,110,247,0.1) 0%, transparent 70%)",
				}}
			/>

			<div className="relative z-10 mx-auto max-w-2xl px-4 py-10 sm:px-6 lg:px-8">
				{/* ── Header ── */}
				<div className="mb-10">
					<p className="text-[10px] font-medium text-emerald-400 uppercase tracking-[0.2em] mb-2">
						Account
					</p>
					<div className="flex items-center justify-between">
						<div>
							<h1 className="text-3xl font-bold text-white tracking-tight">
								Settings
							</h1>
							<p className="text-slate-500 text-sm mt-1">
								Manage your preferences.
							</p>
						</div>

						{/* Saved indicator */}
						{saved && (
							<span className="flex items-center gap-1.5 text-xs font-medium text-emerald-400 bg-emerald-400/10 px-3 py-1.5 rounded-full animate-in fade-in duration-200">
								<Check className="h-3 w-3" />
								Saved
							</span>
						)}
					</div>
				</div>

				<div className="space-y-8">
					{/* ── Appearance ── */}
					<section>
						<SectionLabel>Appearance</SectionLabel>
						<SettingsCard>
							<Row>
								<RowLabel
									icon={<Sun className="h-3.5 w-3.5" />}
									title="Theme"
									description="Choose how RakshaIntel looks to you"
								/>
								<ThemePicker
									value={theme}
									onChange={change(setTheme)}
								/>
							</Row>
						</SettingsCard>
					</section>

					{/* ── Notifications ── */}
					<section>
						<SectionLabel>Notifications</SectionLabel>
						<SettingsCard>
							<Row>
								<RowLabel
									icon={<Bell className="h-3.5 w-3.5" />}
									title="Weekly digest"
									description="A summary of top defence news every Monday"
								/>
								<Toggle
									checked={emailDigest}
									onChange={change(setEmailDigest)}
								/>
							</Row>
							<Row>
								<RowLabel
									icon={<Bell className="h-3.5 w-3.5" />}
									title="Breaking alerts"
									description="Notified when a major conflict update is published"
								/>
								<Toggle
									checked={newsAlerts}
									onChange={change(setNewsAlerts)}
								/>
							</Row>
						</SettingsCard>
					</section>

					{/* ── Language & Region ── */}
					<section>
						<SectionLabel>Language & Region</SectionLabel>
						<SettingsCard>
							<Row>
								<RowLabel
									icon={<Globe className="h-3.5 w-3.5" />}
									title="Interface language"
								/>
								<Select
									value={language}
									onChange={change(setLanguage)}
									options={[
										{ value: "en", label: "English" },
										{ value: "hi", label: "Hindi" },
										{ value: "ru", label: "Russian" },
										{ value: "tr", label: "Turkish" },
									]}
								/>
							</Row>
							<Row>
								<RowLabel
									icon={<Globe className="h-3.5 w-3.5" />}
									title="Timezone"
								/>
								<Select
									value={timezone}
									onChange={change(setTimezone)}
									options={[
										{
											value: "Asia/Kolkata",
											label: "IST — India",
										},
										{
											value: "Europe/Moscow",
											label: "MSK — Moscow",
										},
										{
											value: "Europe/Istanbul",
											label: "TRT — Istanbul",
										},
										{ value: "UTC", label: "UTC" },
										{
											value: "America/New_York",
											label: "EST — New York",
										},
									]}
								/>
							</Row>
						</SettingsCard>
					</section>

					{/* ── Danger zone ── */}
					<section>
						<SectionLabel>Danger zone</SectionLabel>
						<SettingsCard>
							<Row>
								<RowLabel
									icon={<Trash2 className="h-3.5 w-3.5" />}
									title="Clear reading history"
									description="Remove all articles and entries you've viewed"
								/>
								<DangerButton>Clear</DangerButton>
							</Row>
							<Row>
								<RowLabel
									icon={<Trash2 className="h-3.5 w-3.5" />}
									title="Delete account"
									description="Permanently remove your account and all data"
								/>
								<DangerButton>Delete</DangerButton>
							</Row>
						</SettingsCard>
					</section>
				</div>
			</div>

			{/* Floating save bar */}
			{dirty && <SaveBar onSave={handleSave} />}
		</div>
	);
}
