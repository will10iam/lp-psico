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
					Dra. Emilaine Lopes
				</p>
				<p className="md:text-sm text-[10px] ml-6 italic">Psicóloga Clínica</p>
				<p className="md:text-sm text-[10px] italic">@elapsico</p>
			</div>

			<div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative">
				<article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					<div className="space-y-6">
						<h1 className="text-3xl md:text-2xl lg:text-3xl font-semibold leading-6 text-[#4b4b4b] tracking-tighter">
							A vida é feita de alegrias e tristezas mas, fazer{" "}
							<span className="md:text-4xl font-bold italic">PSICOTERAPIA</span>{" "}
							é como ter um{" "}
							<span className="md:text-4xl font-bold italic">LAR</span> para
							onde voltar de forma simbólica, onde eu seguro a sua mão e você
							pode simplesmente{" "}
							<span className="md:text-4xl font-bold italic">SER!</span>
						</h1>
						<p className="lg:text-lg text-[#4b4b4b] italic">
							Psicoterapia individual, presencial e online.
						</p>
						<div>
							<Button
								asChild
								variant="outline"
								className="bg-[#6c8c7d] border-none px-5 py-4 rounded-md font-semibold flex items-center justify-center w-fit gap-2 hover:bg-[#a8c3a1] hover:text-white transition-colors duration-300"
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

					<div className="hidden md:block relative w-[650px] h-[600px] ml-[100px] -mt-36">
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
