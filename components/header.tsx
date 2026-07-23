import { createClient } from "@/lib/supabase/server";
import HeaderClient from "./header-client";

export default async function Header() {
	const supabase = await createClient();

	const {
		data: { user },
	} = await supabase.auth.getUser();

	let profile = null;

	if (user) {
		const { data } = await supabase
			.from("profiles")
			.select("*")
			.eq("id", user.id)
			.single();

		profile = data;
	}

	return <HeaderClient user={user} profile={profile} />;
}
