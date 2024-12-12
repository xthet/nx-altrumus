import { useScroll } from "@/hooks/useScroll"
import { MenuIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { useMediaQuery } from "react-responsive"

export default function Navbar() {
	const media_md = useMediaQuery({ query: "(min-width: 800px)" })
	// const { scrollY } = useScroll()
	// const [_show_dropdown] = useState(false)
	// const url_path = usePathname()
	return (
		<nav className="fixed z-[500] left-0 right-0 top-0 p-2">
			{media_md ? (
				<div className="p-2 rounded-lg bg-[--txtcol] fl-cl fl-sb w-full">
					<Link href={"/"} className="fl-cc hover-fade px-1">
						<img src="/images/logo_lg.svg" alt="logo" className="h-[32px]" />
					</Link>
					<span className="fl-cl text-[--pricol] hover:[&>a]:opacity-80 gap-4 lg:gap-10 [&>a]:duration-300 bg-[hsla(0,0%,20%,1)] self-stretch rounded-md px-4">
						<Link href={""}>Events</Link>
						<Link href={""}>About Us</Link>
						<Link href={""}>Contact</Link>
					</span>
					<span className="cursor-pointer fl-cc py-2 px-8 rounded-md bg-[--seccol] text-[--pricol] font-bold hover:bg-[--pricol] hover:text-[--txt-col] duration-300">
						Donate Now
					</span>
				</div>
			) : (
				<div className="p-2 rounded-lg bg-[--txtcol] fl-cl fl-sb w-full">
					<Link href={"/"} className="fl-cc hover-fade self-stretch p-1">
						<img src="/images/logo.svg" alt="logo" className="h-[32px]" />
					</Link>
					<span className="self-stretch hover-fade fl-cc aspect-square w-10 rounded-md bg-[--pricol]">
						<MenuIcon className="w-8 h-8" />
					</span>
				</div>
			)}
		</nav>
	)
}
