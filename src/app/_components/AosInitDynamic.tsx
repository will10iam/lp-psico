// app/_components/AosInitDynamic.tsx
"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";

// Carrega o AOS dinamicamente apenas no lado do cliente
const AOS = dynamic(() => import("aos"), { ssr: false });

import "aos/dist/aos.css";

export function AosInitDynamic() {
	useEffect(() => {
		AOS.then((AOSInstance) => {
			AOSInstance.init({
				duration: 800,
				once: true,
			});
		});
	}, []);

	return null;
}
