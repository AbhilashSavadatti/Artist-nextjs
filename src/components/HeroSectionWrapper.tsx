"use client";

import { usePathname } from "next/navigation";
import HeroSection from "@/components/HeroSection"; 

export default function HeroSectionWrapper() {
  const pathname = usePathname();
  
  const pathsToShowHeroSection = ['/celebrity', '/concert']; 

  return pathsToShowHeroSection.includes(pathname) ? <HeroSection /> : null;
}
