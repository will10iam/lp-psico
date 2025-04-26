import Image from "next/image";
import heroImg from "../../../public/hero-image.png";
import logo from "../../../public/logo.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
	return (
		<section className="bg-[#f6f2ea] text-white relative overflow-hidden md:h-screen">
			<div>
				<Image
					src={heroImg}
					alt="Hero Image"
					fill
					sizes="(max-width: 768px) 0vw, 50vw"
					priority
					className="opacity-60 lg:hidden"
				/>
				<div className="absolute inset-0 bg-black opacity-40 md:hidden"></div>
			</div>
			<div className=" md:flex gap-10 bg-[#a8c3a1] px-16 py-6 hidden">
				<p className="font-bold text-1xl underline underline-offset-8 ">
					Dr. Helena Ribeiro
				</p>
				<p className="text-sm">Psicóloga Clínica</p>
				<p className="text-sm">@drhelena.psico</p>
			</div>

			<div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative">
				<article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					<div className="space-y-6">
						<h1 className="text-3xl text-white md:text-4xl lg:text-5xl font-bold leading-10 md:text-[#4b4b4b]">
							Transforme sua saúde emocional com acolhimento e empatia
						</h1>
						<p className="lg:text-lg md:text-[#4b4b4b] font-serif text-white">
							Psicoterapia individual para adultos e adolescentes, com foco no
							seu bem-estar e autoconhecimento.
						</p>
						<div>
							<Button
								asChild
								variant="outline"
								className="bg-[#6c8c7d] border-none md:border-[#a8c3a1] md:text-[#6c8c7d] md:bg-transparent px-5 py-4 rounded-md font-semibold flex items-center justify-center w-fit gap-2 hover:bg-[#a8c3a1] hover:text-white transition-colors duration-300"
							>
								<Link
									href={`https://wa.me/5519996602839?text=Olá vim pelo site e gostaria de mais informações`}
									target="_blank"
								>
									Agende sua sessão
								</Link>
							</Button>
						</div>
					</div>

					<div className="hidden md:block relative w-[650px] h-[600px] ml-[100px] -mt-36 ">
						<Image
							src={heroImg}
							alt="Hero Image"
							className="onject-contain"
							fill
							sizes="(max-width: 768px) 0vw, 50vw"
							quality={100}
							priority
						/>
					</div>
				</article>
			</div>
		</section>
	);
}
