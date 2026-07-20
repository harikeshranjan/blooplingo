import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function Home() {
	const supabase = await createClient();

	const {
		data: { user },
	} = await supabase.auth.getUser();

	if (!user) {
		redirect("/login");
	}

	const { data: profile, error } = await supabase
		.from("profiles")
		.select("first_name")
		.eq("id", user.id)
		.single();

	if (error) {
		throw error;
	}

	return (
		<div>
			<h1>Welcome, {profile.first_name}!</h1>
		</div>
	);
}
