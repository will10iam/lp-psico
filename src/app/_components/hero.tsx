import Image from "next/image";
import heroImg from "../../../public/hero-image.png";
import logo1 from "../../../public/logo1.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
	return (
		<section className="bg-[#f6f2ea] text-white relative overflow-hidden">
			<div>
				<Image
					src={logo1}
					alt="Hero Image"
					fill
					sizes="100vw"
					priority
					className="lg:hidden"
				/>
			</div>
			<div className=" flex justify-start items-center gap-4 bg-[#6c8c7d] px-4 py-4 md:gap-10 md:px-16 md:py-6 opacity-95">
				<p className="font-bold text-md underline underline-offset-8 ">
					Dra. Isabel Meireles
				</p>
				<p className="md:text-sm text-[10px] ml-6">Psicóloga Clínica</p>
				<p className="md:text-sm text-[10px]">@dra.isameireles</p>
			</div>

			<div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative">
				<article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					<div className="space-y-6">
						<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10 text-[#4b4b4b]">
							Transforme sua saúde emocional com acolhimento e empatia
						</h1>
						<p className="lg:text-lg text-[#4b4b4b] font-serif">
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
