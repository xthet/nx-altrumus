export function get_base_url() {
	if (process.env.NODE_ENV === "production") {
		return "https://altrumus.vercel.app"
	} else {
		return "http://localhost:4404"
	}
}
