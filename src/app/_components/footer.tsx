import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
	WhatsappLogo,
	FacebookLogo,
	InstagramLogo,
	TwitterLogo,
	MapPinSimple,
} from "@phosphor-icons/react/dist/ssr";
import { Pin } from "lucide-react";

export function Footer() {
	return (
		<section className="bg-[#f6f2ea] py-16">
			<div className="container mx-auto px-4">
				<footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5">
					<div>
						<h3 className="text-2xl font-semibold mb-2">
							Dra. Isabel Meireles
						</h3>
						<p className="mb-4">
							Acompanhamento psicológico individual focado em autoconhecimento,
							equilíbrio emocional e qualidade de vida.
						</p>

						<div>
							<Button
								asChild
								className="bg-green-500 px-5 py-4 rounded-md font-semibold flex items-center justify-center w-fit gap-2 hover:bg-green-600"
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

					<div>
						<h3 className="text-2xl font-semibold mb-2">Contato </h3>
						<p>
							<MapPinSimple className="w-8 h-8" />
							Atendimento online e em Limeira/SP
						</p>
						<p>Telefone: (11) 1234-5678</p>
						<p>Email: contato@draisa.com</p>
					</div>

					<div>
						<h3 className="text-2xl font-semibold mb-2">Redes Sociais </h3>
						<div className="flex gap-2">
							<a href="#">
								<FacebookLogo className="w-8 h-8" />
							</a>
							<a href="#">
								<InstagramLogo className="w-8 h-8" />
							</a>
							<a href="#">
								<TwitterLogo className="w-8 h-8" />
							</a>
						</div>
					</div>
				</footer>
			</div>
		</section>
	);
}
