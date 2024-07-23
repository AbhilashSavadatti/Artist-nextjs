"use client";

import { usePathname } from "next/navigation";
import HeroSection from "./herosection";

export default function HeroSectionWrapper() {
  const pathname = usePathname();
  return pathname === '/celebrity' ? <HeroSection /> : null;
}
