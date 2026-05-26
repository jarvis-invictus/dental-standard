"use client";

import { ReactLenis } from "@studio-freight/lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (<ReactLenis root options={{ duration: 1.2, smoothWheel: true }}>{children}</ReactLenis>);
}
