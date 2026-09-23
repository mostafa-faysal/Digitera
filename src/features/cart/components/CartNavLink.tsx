"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/features/cart/hooks/useCart";
import { cartPaths } from "@/features/cart/paths";

export function CartNavLink() {
  const { quantity } = useCart();

  return (
    <Link href={cartPaths.cart} className="relative flex items-center justify-center text-[#1a1a1a] hover:text-zinc-600">
      <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
      {quantity > 0 && (
        <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[10px] font-bold text-white">
          {quantity}
        </span>
      )}
    </Link>
  );
}
