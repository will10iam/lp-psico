"use client";

import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const services = [
	{
		title: "Terapia para Adultos",
		description:
			"Atendimento individual com foco em questões emocionais, relacionamentos, autoestima, ansiedade e depressão.",
		duration: "",
		price: "",
		icon: "",
		linkText: "Olá, gostaria de mais informações sobre terapia para adultos",
	},
	{
		title: "Terapia para Adolescentes",
		description:
			"Apoio psicológico durante a fase de transição da adolescência, com escuta ativa e acolhimento.",
		duration: "",
		price: "",
		icon: "",
		linkText:
			"Olá, gostaria de mais informações sobre terapia para adolescentes",
	},
	{
		title: "Orientação para Pais",
		description:
			"Aconselhamento para responsáveis que buscam compreender melhor o comportamento e as emoções dos filhos.",
		duration: "",
		price: "",
		icon: "",
		linkText: "Olá, gostaria de mais informações sobre orientação para pais",
	},
	{
		title: "Atendimento Online",
		description:
			"Sessões à distância com a mesma qualidade e acolhimento do presencial, para quem precisa de flexibilidade.",
		duration: "",
		price: "",
		icon: "",
		linkText: "Olá, gostaria de mais informações sobre atendimento online",
	},
];

export function Services() {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: false,
		align: "start",
		slidesToScroll: 1,
		breakpoints: {
			"(min-width: 768px)": { slidesToScroll: 3 },
		},
	});

	function scrollPrev() {
		emblaApi?.scrollPrev();
	}

	function scrollNext() {
		emblaApi?.scrollNext();
	}

	return (
		<section className="bg-[#f6f2ea] py-16">
			<div className="container mx-auto px-4">
				<h2 className="text-4xl font-bold text-[#4b4b4b]">
					COMO PODEMOS TE AJUDAR?
				</h2>
				<h3 className="italic mb-12">serviços oferecidos</h3>

				<div className="relative">
					<div className="overflow-hidden" ref={emblaRef}>
						<div className="flex">
							{services.map((item, index) => (
								<div
									className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3"
									key={index}
								>
									<article className="bg-[#6c8c7d] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
										<div className="flex-1 flex items-start justify-between">
											<div className="flex gap-3">
												<span className="text-2xl">{item.icon}</span>
												<div>
													<h3 className="font-bold text-2xl my-1 text-white">
														{item.title}
													</h3>
													<p className="text-[#d9e7d6] text-sm select-none">
														{item.description}
													</p>
												</div>
											</div>
										</div>

										<div className="border-t border-[#93afa2] gray-700 pt-4 flex items-center justify-between">
											<div className="flex items-center gap-2 text-sm">
												<span>{item.duration}</span>
											</div>

											<Button
												asChild
												className="bg-transparent hover:bg-green-400"
											>
												<Link
													href={`https://wa.me/5519996602839?text=${item.linkText}`}
													target="_blank"
												>
													<WhatsappLogo className="w-5 h-5" />
													Entrar em contato
												</Link>
											</Button>
										</div>
									</article>
								</div>
							))}
						</div>
					</div>

					<button
						onClick={scrollPrev}
						className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
					>
						<ChevronLeft className="w-6 h-6 text-gray-600" />
					</button>

					<button
						onClick={scrollNext}
						className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
					>
						<ChevronRight className="w-6 h-6 text-gray-600" />
					</button>
				</div>
			</div>
		</section>
	);
}
