"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function AosInit() {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);
	// Initialize AOS only on the client side

	useEffect(() => {
		if (isClient) {
			AOS.init({
				duration: 800,
				once: true,
			});
		}
	}, [isClient]);

	return null;
}
