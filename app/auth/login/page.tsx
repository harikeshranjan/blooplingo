import { createClient } from "@/lib/supabase/server";
import LoginForm from "./login-form";
import { redirect } from "next/navigation";

export default async function LoginPage() {
	const supabase = await createClient();

	const {
		data: { user },
	} = await supabase.auth.getUser();

	if (user) {
		redirect("/");
	}

	return (
		<main className="relative flex min-h-svh w-full bg-background">
			<LoginForm />
		</main>
	);
}
