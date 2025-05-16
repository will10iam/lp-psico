import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
	WhatsappLogo,
	FacebookLogo,
	InstagramLogo,
	TwitterLogo,
	MapPinSimple,
	Phone,
	EnvelopeSimple,
} from "@phosphor-icons/react/dist/ssr";

export function Footer() {
	return (
		<section className="bg-[#f6f2ea] py-16">
			<div className="container mx-auto px-4">
				<footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5">
					<div className="text-[#4b4b4b]">
						<h3 className="text-2xl font-semibold mb-2 ">
							Dra. Isabel Meireles
						</h3>
						<p className="mb-4 text-sm">
							Acompanhamento psicológico individual focado em autoconhecimento,
							equilíbrio emocional e qualidade de vida.
						</p>

						<div>
							<Button
								asChild
								className="bg-[#6c8c7d] px-5 py-4 rounded-md font-semibold flex items-center justify-center w-fit gap-2 hover:bg-[#a8c3a1]"
							>
								<Link
									href={`https://wa.me/5519996602839?text=Olá vim pelo site e gostaria de mais informações`}
									target="_blank"
								>
									<WhatsappLogo className="w-5 h-5" />
									Entre em contato
								</Link>
							</Button>
						</div>
					</div>

					<div className="text-[#4b4b4b]">
						<h3 className="text-2xl font-semibold mb-2">Contato </h3>
						<p className="text-sm flex gap-2 mb-2 items-center">
							<MapPinSimple className="w-5 h-5" />
							Atendimento online e em Limeira/SP
						</p>
						<p className="flex gap-2 text-sm items-center mb-2">
							<Phone className="w-5 h-5" /> (11) 1234-5678
						</p>
						<p className="flex gap-2 text-sm items-center mb-2">
							<EnvelopeSimple className="w-5 h-5" />
							contato@draisa.com
						</p>
					</div>

					<div className="text-[#4b4b4b]">
						<h3 className="text-2xl font-semibold mb-2">Redes Sociais </h3>
						<div className="flex gap-2">
							<a href="#">
								<FacebookLogo
									weight="fill"
									className="w-8 h-8"
									color="#6c8c7d"
								/>
							</a>
							<a href="#">
								<InstagramLogo
									weight="fill"
									className="w-8 h-8"
									color="#6c8c7d"
								/>
							</a>
							<a href="#">
								<TwitterLogo
									weight="fill"
									className="w-8 h-8"
									color="#6c8c7d"
								/>
							</a>
						</div>
					</div>
				</footer>
			</div>
		</section>
	);
}
