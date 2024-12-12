import type { Metadata } from "next"
import "./globals.css"
import "./colors.css"
import Layout from "@/components/layouts/root_layout"
import { get_base_url } from "@/utils/get_base_url"
import { Manrope } from "next/font/google"

export const metadata: Metadata = {
	title: "Altrumus — Sickle Cell Care Initiative",
	description: "Streamlining Care and Advocacy for the Sickle Cell Community.",
	openGraph: {
		title: "The Altrumus Initiative",
		description:
			"Streamlining Care and Advocacy for the Sickle Cell Community.",
		url: `${get_base_url()}`,
		images: ["/images/alt_home_2.jpg"],
		siteName: "altrumus",
		type: "website",
	},
	metadataBase: new URL(`${get_base_url()}`),
}

const manrope = Manrope({
	display: "swap",
	subsets: ["latin"],
	variable: "--prifont",
	weight: ["200", "300", "400", "500", "600", "700", "800"],
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${manrope.variable} antialiased`}>
				<Layout>{children}</Layout>
			</body>
		</html>
	)
}
