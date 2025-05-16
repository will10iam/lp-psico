// app/_components/client-root.tsx
"use client";

import { ReactNode } from "react";
import { AosInit } from "./aos-init";

export function ClientRoot({ children }: { children: ReactNode }) {
	return (
		<>
			<AosInit />
			{children}
		</>
	);
}
