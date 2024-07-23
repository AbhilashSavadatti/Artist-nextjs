"use client";

import { usePathname } from "next/navigation";
import HeroSection from "@/components/herosection";

export default function HeroSectionWrapper() {
  const pathname = usePathname();
  return pathname === '/celebrity' ? <HeroSection /> : null;
}
