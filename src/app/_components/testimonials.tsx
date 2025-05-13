"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import pat1 from "../../../public/pat1.png";
import pat2 from "../../../public/pat2.png";
import pat3 from "../../../public/pat3.png";

const testimonials = [
	{
		content:
			"A Dra. Isabel foi essencial no meu processo de superação da ansiedade. Ela me ajudou a enxergar a vida com mais leveza.",
		author: "Camila, 29 anos",
		image: pat1,
	},
	{
		content:
			"Comecei as sessões sem saber exatamente o que esperar, mas hoje me sinto mais confiante e equilibrado emocionalmente.",
		author: "Rafael, 35 anos",
		image: pat2,
	},
	{
		content:
			"Excelente profissional. Atenciosa, humana e muito competente. Indico de olhos fechados.",
		author: "Juliana, 41 anos",
		image: pat3,
	},
];

export function Testimonials() {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: true,
	});

	function scrollPrev() {
		emblaApi?.scrollPrev();
	}

	function scrollNext() {
		emblaApi?.scrollNext();
	}

	return (
		<section className="bg-[#6c8c7d] py-16">
			<div
				className="container px-4 mx-auto"
				data-aos="fade-down"
				data-aos-delay="500"
			>
				<h2 className="text-4xl font-bold text-center mb-12 text-[#f6f2ea]">
					DEPOIMENTOS
				</h2>

				<div
					className="relative max-w-4xl mx-auto"
					data-aos="flip-left"
					data-aos-delay="500"
				>
					<div className="overflow-hidden" ref={emblaRef}>
						<div className="flex">
							{testimonials.map((item, index) => (
								<div className="flex-[0_0_100%] min-w-0 px-3" key={index}>
									<article className="bg-[#f6f2ea] text-[#4b4b4b] rounded-2xl p-6 space-y-4 h-full flex flex-col">
										<div className="flex flex-col items-center text-center space-y-4">
											<div className="relative w-24 h-24">
												<Image
													src={item.image}
													alt={item.author}
													className="rounded-full object-cover"
													fill
													sizes="96px"
												/>
											</div>

											<p className="text-[#4b4b4b]">{item.content}</p>

											<div>
												<p className="font-bold">{item.author}</p>
											</div>
										</div>
									</article>
								</div>
							))}
							;
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
