import Link from "next/link";
import { Search, User } from "lucide-react";
import { CartNavLink } from "@/features/cart";
import { productPaths } from "@/features/products";

export function Header() {
  return (
    <header className="border-b border-[#ebe6de] bg-transparent">
      <div className="mx-auto flex h-20 w-full relative items-center justify-between px-4 sm:px-6 md:px-10 lg:px-20">
        
        {/* Left: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-[12px] font-medium tracking-[0.1em] uppercase text-[#1a1a1a]">
          <Link href="/" className="hover:text-zinc-600 transition-colors">Home</Link>
          <Link href={productPaths.list} className="hover:text-zinc-600 transition-colors">Shop</Link>
          <Link href="/categories" className="hover:text-zinc-600 transition-colors">Categories</Link>
          <Link href="/atelier" className="hover:text-zinc-600 transition-colors">The Atelier</Link>
        </nav>
        
        {/* Center: Logo */}
        <div className="lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
          <Link href="/" className="text-2xl sm:text-3xl font-[family-name:var(--font-instrument-serif)] tracking-[0.15em] text-[#1a1a1a]">
            O D O R A T U S
          </Link>
        </div>

        {/* Right: Utilities */}
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-2 border-b border-[#1a1a1a] pb-1 mr-4">
            <Search className="h-4 w-4 text-[#1a1a1a]" strokeWidth={1.5} />
            <input 
              type="text" 
              placeholder="Search fragrances..." 
              className="bg-transparent text-[13px] text-[#1a1a1a] placeholder:text-[#605a54] focus:outline-none w-[150px]" 
            />
          </div>
          <button aria-label="User account" className="text-[#1a1a1a] hover:text-zinc-600 transition-colors">
            <User className="h-5 w-5" strokeWidth={1.5} />
          </button>
          <CartNavLink />
        </div>

      </div>
    </header>
  );
}
