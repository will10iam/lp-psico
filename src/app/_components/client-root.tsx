// app/_components/client-root.tsx
"use client";

import { ReactNode } from "react";
import { AosInitDynamic } from "./AosInitDynamic";

export function ClientRoot({ children }: { children: ReactNode }) {
	return (
		<>
			<AosInitDynamic />
			{children}
		</>
	);
}
