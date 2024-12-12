"use client"
import {
	ChevronLeft,
	ChevronLeftCircle,
	ChevronRight,
	ChevronRightCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { RefObject, useRef } from "react"

export default function Home() {
	const upc_eve_ref = useRef<any>(null)
	const rec_eve_ref = useRef<any>(null)

	function scroll_left(ele: RefObject<HTMLElement | undefined>) {
		ele.current!.scrollBy(-50, 0)
	}

	function scroll_right(ele: RefObject<HTMLElement | undefined>) {
		ele.current!.scrollBy(50, 0)
	}

	return (
		<section className="w-full">
			<section className="w-full">
				<div className="px-4 md:px-0 fl-cl fl-c fl-sb gap-4 h-dvh max-h-[900px] pt-[5.5rem] pb-4 md:pt-[7rem]">
					<div className="fl-cl fl-c gap-8">
						<h1 className="text-4xl lg:text-5xl max-w-[900px] font-bold text-center lg:leading-[1.3]">
							Streamlining Care and Advocacy for the Sickle Cell Community
						</h1>
						<div className="w-full grid grid-cols-2 mx-auto max-w-[450px] gap-2">
							<button className="w-full py-2 md:py-3 border border-[--seccol] rounded-lg bg-[--seccol] text-[--pricol] font-medium text-sm md:text-base hover:bg-[--pricol] hover:border-[--pricol] hover:text-[--txtcol] duration-300 cursor-pointer">
								Donate now
							</button>
							<button className="w-full py-2 md:py-3 border border-[--seccol] rounded-lg font-medium text-sm md:text-base hover:bg-[--pricol] hover:border-[--pricol] hover:text-[--txtcol] duration-300 cursor-pointer">
								Volunteer
							</button>
						</div>
					</div>
					<div className="w-full fl-tl fl-c gap-2 md:fl-r md:pl-4">
						<div className="fl-tl fl-c gap-1 overflow-hidden max-w-[260px]">
							<h3 className="text-3xl font-bold md:text-5xl md:leading-[1.3]">
								Upcoming Events
							</h3>
							<p className="text-sm">Be a part of our upcoming events</p>
						</div>
						<div className="w-auto -mx-4 md:mx-0 md:flex-grow overflow-hidden relative">
							<ChevronLeftCircle
								className="absolute left-4 top-[40%] text-[--pricol] stroke-[2] hover-fade w-10 h-10 z-20"
								onClick={() => {
									scroll_left(upc_eve_ref)
								}}
							/>
							<ChevronRightCircle
								className="absolute right-4 top-[40%] text-[--pricol] stroke-[2] hover-fade w-10 h-10 z-20"
								onClick={() => {
									scroll_right(upc_eve_ref)
								}}
							/>
							<div
								className="w-screen md:w-full overflow-x-auto no-scroll grid grid-cols-[repeat(4,280px)] gap-2 pl-4 md:px-2"
								ref={upc_eve_ref}
							>
								{Array.from(new Array(4)).map((ele, idx) => (
									<div
										className="w-full rounded-lg overflow-hidden fl-tl fl-c gap-3 h-[280px] p-2 bg-[--txtcol]"
										key={idx}
									>
										<div className="rounded-md w-full overflow-hidden fl-cc flex-grow relative z-10">
											<Image
												src={"/images/alt_home_2.jpg"}
												alt="banner"
												fill
												className="w-full object-cover"
											/>
										</div>
										<div className="w-full fl-tl fl-c gap-2 text-[--pricol]">
											<h3 className="text-xl font-semibold">HEALTHIER YOU</h3>
											<p className="text-xs opacity-80 -mt-1">5 Jan 2025</p>
											<p className="text-sm">
												HEALTHIER YOU HEALTH HUB is an advocacy and education
												pro...
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="w-full py-12 px-4">
				<div className="w-full fl-tl fl-c gap-2 md:fl-r md:pl-4">
					<div className="fl-tl fl-c gap-1 overflow-hidden max-w-[260px]">
						<h3 className="text-3xl font-bold md:text-5xl md:leading-[1.3]">
							Recent Events
						</h3>
						<p className="text-sm">Check out our recent events</p>
					</div>
					<div className="w-auto -mx-4 md:mx-0 md:flex-grow overflow-hidden relative">
						<ChevronLeftCircle
							className="absolute left-4 top-[40%] text-[--pricol] stroke-[2] hover-fade w-10 h-10 z-20"
							onClick={() => {
								scroll_left(rec_eve_ref)
							}}
						/>
						<ChevronRightCircle
							className="absolute right-4 top-[40%] text-[--pricol] stroke-[2] hover-fade w-10 h-10 z-20"
							onClick={() => {
								scroll_right(rec_eve_ref)
							}}
						/>
						<div
							className="w-screen md:w-full overflow-x-auto no-scroll grid grid-cols-[repeat(4,280px)] gap-2 pl-4 md:px-2"
							ref={rec_eve_ref}
						>
							{Array.from(new Array(4)).map((ele, idx) => (
								<div
									className="w-full rounded-lg overflow-hidden fl-tl fl-c gap-3 h-[280px] p-2 bg-[--txtcol]"
									key={idx}
								>
									<div className="rounded-md w-full overflow-hidden fl-cc flex-grow relative z-10">
										<Image
											src={"/images/alt_home_2.jpg"}
											alt="banner"
											fill
											className="w-full object-cover"
										/>
									</div>
									<div className="w-full fl-tl fl-c gap-2 text-[--pricol]">
										<h3 className="text-xl font-semibold">HEALTHIER YOU</h3>
										<p className="text-xs opacity-80 -mt-1">5 Jan 2025</p>
										<p className="text-sm">
											HEALTHIER YOU HEALTH HUB is an advocacy and education
											pro...
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			<section className="w-auto na-pdg bg-[url('/images/alt_abg.jpg')] fl-cc bg-center bg-no-repeat bg-cover overflow-hidden">
				<div className="fl-tl fl-c gap-4 w-screen def-pdg bg-[hsla(211,32%,6%,0.65)] py-12 md:py-16">
					<h1 className="text-4xl lg:text-5xl lg:leading-[1.3] font-semibold text-white">
						Improving the lives of people with sickle cell disorder through
						advocacy
					</h1>
					<h4 className="text-xl font-normal text-white max-w-[800px]">
						Our vision is to have a society where sickle cell disorder is
						reduced, and people with sickle cell and their families can lead a
						healthy, positive, and productive life.
					</h4>
					<Link
						href={""}
						className="uppercase bg-[--seccol] rounded-lg px-8 py-2 font-semibold text-[--pricol] hover:bg-white duration-300"
					>
						learn more
					</Link>
				</div>
			</section>

			<section className="def-pdg w-full py-12 fl-tl fl-c gap-4 md:fl-r md:fl-sb md:gap-12">
				<div>
					<h2 className="text-4xl md:text-5xl font-semibold max-w-[300px]">
						Want to help save a life?
					</h2>
					<div className="h-2 w-16 my-6 bg-[--seccol]"></div>
					<p className="">Send us a message</p>
				</div>
				<form
					className="md:flex-grow md:max-w-[700px] md:w-[40%] w-full fl-tl fl-c gap-2"
					onSubmit={(e) => {
						e.preventDefault()
					}}
				>
					<input
						type="text"
						placeholder="Name"
						className="w-full p-2 border border-[--txtcol] bg-transparent ~text-sm/base rounded-md"
					/>
					<input
						type="email"
						placeholder="Email address"
						className="w-full p-2 border border-[--txtcol] bg-transparent ~text-sm/base rounded-md"
					/>
					<textarea
						placeholder="Message"
						rows={8}
						className="w-full p-2 border border-[--txtcol] bg-transparent ~text-sm/base rounded-md"
					></textarea>
					<button
						className="px-4 py-2 rounded-md bg-[--seccol] font-semibold uppercase text-base hover-fade text-[--pricol]"
						type="submit"
					>
						Send message
					</button>
				</form>
			</section>
		</section>
	)
}
