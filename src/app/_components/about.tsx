import Image from "next/image";
import about1 from "../../../public/about1.png";
import about2 from "../../../public/about2.png";
import { Button } from "@/components/ui/button";
import { CheckCheck, MapPin } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export function About() {
	return (
		<section className="bg-[#6c8c7d] py-16 ">
			<div className="container px-4 mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<div className="relative">
						<div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
							<Image
								src={about1}
								alt="Foto Psico"
								fill
								sizes="100vw"
								quality={100}
								priority
								className="object-cover hover:scale-110 duration-300"
							/>
						</div>
						<div className="absolute w-40 h-40 right-4 -bottom-8 rounded-lg border-4 overflow-hidden border-white">
							<Image
								src={about2}
								alt="Foto Psico"
								fill
								quality={100}
								priority
							/>
						</div>
					</div>

					<div className="space-y-6 mt-8">
						<h2 className="text-4xl font-bold text-white">SOBRE MIM</h2>
						<h3 className="text-[#d9e7d6] italic">
							Quem é a Dra Isabel Meireles?
						</h3>
						<p className="text-[#d9e7d6]">
							Sou psicóloga clínica com mais de 10 anos de experiência em
							atendimento a adolescentes e adultos. Minha missão é acolher com
							empatia, escutar com atenção e ajudar meus pacientes a lidarem com
							seus desafios emocionais e existenciais. Formada pela Universidade
							Federal de Minas Gerais (UFMG), sou especialista em Terapia
							Cognitivo-Comportamental e apaixonada por ajudar pessoas a
							encontrarem sentido, equilíbrio e bem-estar em suas vidas.
						</p>
						<ul className="space-y-4">
							<li className="flex items-center gap-2 text-[#d9e7d6]">
								<CheckCheck className="text-[#54e933]" /> CRP: 00/00000
							</li>
							<li className="flex items-center gap-2 text-[#d9e7d6]">
								<CheckCheck className="text-[#54e933]" /> Mais de 10 anos de
								experiência
							</li>
							<li className="flex items-center gap-2 text-[#d9e7d6]">
								<CheckCheck className="text-[#54e933]" /> Atendimentos
								presenciais e online
							</li>
							<li className="flex items-center gap-2 text-[#d9e7d6]">
								<CheckCheck className="text-[#54e933]" /> Especialista em
								ansiedade, depressão e autoconhecimento
							</li>
						</ul>

						<div className="flex gap-2">
							<Button
								asChild
								className=" bg-[#f6f2ea] hover:bg-[#e4e0d9] text-[#4b4b4b] px-5 py-4 rounded-md font-semibold flex items-center justify-center w-fit gap-2  hover:text-[#4b4b4b] transition-colors duration-300"
							>
								<Link
									href={`https://wa.me/5519996602839?text=Olá vim pelo site e gostaria de mais informações`}
									target="_blank"
								>
									<WhatsappLogo className="w-5 h-5" />
									Agende sua sessão
								</Link>
							</Button>

							<Button
								asChild
								className="bg-[#f6f2ea] hover:bg-[#e4e0d9] text-[#4b4b4b] px-5 py-4 rounded-md font-semibold flex items-center justify-center w-fit gap-2 hover:text-[#4b4b4b] transition-colors duration-300"
							>
								<Link
									href={`https://wa.me/5519996602839?text=Olá vim pelo site e gostaria de mais informações`}
									target="_blank"
								>
									<MapPin className="w-5 h-5" />
									Endereço da Loja
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
