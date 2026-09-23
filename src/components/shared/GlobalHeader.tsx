"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/shared/Header";

export function GlobalHeader() {
  const pathname = usePathname();
  const isProductDetail = pathname.startsWith("/products/") && pathname !== "/products";

  if (isProductDetail) return null;
  return <Header />;
}
