import Instagram from "@/public/icons/instagram"
import Mail from "@/public/icons/mail"
import Twitter from "@/public/icons/twitter"
import { ArrowUpRight, MailIcon, MailPlus, Phone, XIcon } from "lucide-react"
import Link from "next/link"
import { useMediaQuery } from "react-responsive"

export default function Footer() {
	const media_md = useMediaQuery({ query: "(min-width: 800px)" })

	return (
		<footer className="w-full text-[--pricol] bg-[--txtcol]">
			{media_md ? (
				<div className="w-full def-pdg py-8 fl-tl fl-c gap-4 def-p">
					<div className="w-full fl-tl fl-sb">
						<div className="fl-tl fl-c gap-4">
							<span className="text-sm text-pricol -mb-3">
								Sign up to our newsletter!!
							</span>
							<div
								onClick={() => {
									// open_nws()
								}}
								className="min-w-[300px] mt-2 w-[21vw] max-w-[500px] fl-cl fl-sb gap-2 bg-[hsla(0,0%,95%,1)] p-1 rounded-lg hover-fade"
							>
								<input
									type="text"
									placeholder="Email address"
									className="flex-grow w-2 bg-transparent outline-none text-base text-[--txtcol] p-2"
								/>
								<span className="fl-cc bg-[--seccol] rounded-md py-2 px-4">
									Submit
								</span>
							</div>
							<div className="text-sm fl-tl fl-c gap-3 opacity-80">
								<p className="fl-cl gap-1">
									<MailPlus className="w-4 h-4" />{" "}
									<span>hello@altrumus.org</span>
								</p>
							</div>
						</div>

						<div className="fl-tr gap-10">
							<div className="fl-tl fl-c gap-4">
								<h5 className="opacity-70 font-light text-sm uppercase">
									altrumus
								</h5>
								<div className="fl-tl fl-c gap-2 opacity-90 text-sm">
									<Link href={"/about-us"}>About Us</Link>
									<Link href={"/events"}>Events</Link>
								</div>
							</div>
							<div className="fl-tl fl-c gap-4">
								<h5 className="opacity-70 font-light text-sm uppercase">
									Services
								</h5>
								<div className="fl-tl fl-c gap-2 opacity-90 text-sm">
									<Link href={"/volunteer"}>Volunteer</Link>
								</div>
							</div>

							{/* <div className="fl-tl fl-c gap-4">
								<h5 className="opacity-70 font-light text-sm uppercase">
									Legal
								</h5>
								<div className="fl-tl fl-c gap-2 opacity-90 text-sm">
									<Link href={"/terms-of-service"}>Terms of Service</Link>
									<Link href={"/privacy-policy"}>Privacy Policy</Link>
								</div>
							</div> */}
						</div>
					</div>

					<div className="h-[1px] w-full bg-white opacity-[0.05]"></div>

					<div className="fl-cl fl-sb w-full">
						<small className="opacity-40 text-xs">© 2024 — Altrumus</small>

						<div className="fl-cr gap-2">
							<Link
								href={""}
								className="w-[2rem] h-[2rem] rounded-[50%] bg-white fl-cc"
							>
								<Mail className="text-pricol w-[1.25rem] h-[1.25rem]" />
							</Link>
							<Link
								href={""}
								className="w-[2rem] h-[2rem] rounded-[50%] bg-white fl-cc"
							>
								<Twitter className="text-pricol w-[1.25rem] h-[1.25rem]" />
							</Link>
							<Link
								href={""}
								className="w-[2rem] h-[2rem] rounded-[50%] bg-white fl-cc"
							>
								<Instagram className="text-pricol w-[1.25rem] h-[1.25rem]" />
							</Link>
						</div>
					</div>
				</div>
			) : (
				<div className="w-full bg-pricol p-4 pt-8 fl-tl fl-c gap-8">
					<div className="w-full fl-tl fl-c gap-2 mb-4">
						<Link href={"/"} className="w-[30vw]">
							<img
								src="/images/logo_lg.svg"
								alt="logo"
								className="w-full object-cover"
							/>
						</Link>
						<span className="text-sm text-pricol mt-4">
							Sign up to our newsletter!!
						</span>
						<div
							onClick={() => {
								// open_nws()
							}}
							className="min-w-[300px] mt-2 w-[21vw] max-w-[500px] fl-cl fl-sb gap-2 bg-[hsla(0,0%,95%,1)] p-1 rounded-lg hover-fade"
						>
							<input
								type="text"
								placeholder="Email address"
								className="flex-grow w-2 bg-transparent outline-none text-base text-[--txtcol] p-2"
							/>
							<span className="fl-cc bg-[--seccol] rounded-md py-2 px-4">
								Submit
							</span>
						</div>
					</div>

					<div className="fl-tl fl-c gap-3">
						<h5 className="opacity-70 font-light text-sm uppercase">Company</h5>
						<div className="fl-tl fl-c gap-2 opacity-90 text-sm">
							<Link href={"/about-us"}>About Us</Link>
							<Link href={"/events"}>Events</Link>
						</div>
					</div>

					<div className="fl-tl fl-c gap-3">
						<h5 className="opacity-70 font-light text-sm uppercase">
							Services
						</h5>
						<div className="fl-tl fl-c gap-2 opacity-90 text-sm">
							<Link href={"/volunteer"}>Volunteer</Link>
						</div>
					</div>

					<div className="fl-tl fl-c gap-4">
						<h5 className="opacity-70 font-light text-sm uppercase">Connect</h5>
						<div className="fl-cl gap-2">
							<Link
								// href={process.env.NEXT_PUBLIC_SOC_MAIL!}
								href={""}
								className="w-[2rem] h-[2rem] rounded-[50%] bg-white fl-cc"
							>
								<Mail className="text-pricol w-[1.25rem] h-[1.25rem]" />
							</Link>
							<Link
								href={""}
								target="_blank"
								className="w-[2rem] h-[2rem] rounded-[50%] bg-white fl-cc"
							>
								<Twitter className="text-pricol w-[1.25rem] h-[1.25rem]" />
							</Link>
							<Link
								href={""}
								target="_blank"
								className="w-[2rem] h-[2rem] rounded-[50%] bg-white fl-cc"
							>
								<Instagram className="text-pricol w-[1.25rem] h-[1.25rem]" />
							</Link>
						</div>
					</div>
					<div className="fl-tl fl-c gap-2">
						{/* <div className="fl-cl gap-2 text-xs opacity-60">
							<Link href={"/terms-of-service"}>Terms Of Service</Link>
							<span>•</span>
							<Link href={"/privacy-policy"}>Privacy Policy</Link>
						</div> */}
						<small className="opacity-40 text-[0.7rem]">
							© 2024 — Altrumus
						</small>
					</div>
				</div>
			)}
		</footer>
	)
}
