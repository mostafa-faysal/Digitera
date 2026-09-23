import Link from "next/link";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-16 pb-8 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="mx-auto flex flex-col gap-12 lg:gap-16">
        
        {/* Top Section */}
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          
          {/* Brand Block */}
          <div className="flex flex-col gap-6 lg:w-[400px]">
            <Link href="/" className="text-2xl sm:text-3xl font-[family-name:var(--font-instrument-serif)] tracking-[0.15em] text-white">
              O D O R A T U S
            </Link>
            <p className="text-[13px] leading-[1.6] font-normal text-[#d9d3cb]">
              An independent olfactory house cultivating slow-luxury liquid narratives. Every bottle is hand-poured in small batches using sustainably sourced botanicals.
            </p>
            <div className="flex items-center gap-4 text-[#d9d3cb]">
              <a href="#" aria-label="Instagram" className="hover:text-white transition-colors">
                <InstagramIcon className="h-5 w-5" strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="X / Twitter" className="hover:text-white transition-colors">
                <TwitterIcon className="h-5 w-5" strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-white transition-colors">
                <FacebookIcon className="h-5 w-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Links Wrapper */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:gap-16">
            
            <div className="flex flex-col gap-4">
              <h3 className="text-[13px] font-bold uppercase tracking-wider text-white">
                Collections
              </h3>
              <div className="flex flex-col gap-3 text-[13px] font-normal text-[#d9d3cb]">
                <Link href="#" className="hover:text-white transition-colors">La Maison</Link>
                <Link href="#" className="hover:text-white transition-colors">Private Reserve</Link>
                <Link href="#" className="hover:text-white transition-colors">Scented Candles</Link>
                <Link href="#" className="hover:text-white transition-colors">Discovery Sets</Link>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-[13px] font-bold uppercase tracking-wider text-white">
                Customer Care
              </h3>
              <div className="flex flex-col gap-3 text-[13px] font-normal text-[#d9d3cb]">
                <Link href="#" className="hover:text-white transition-colors">Olfactory Consultation</Link>
                <Link href="#" className="hover:text-white transition-colors">Shipping & Returns</Link>
                <Link href="#" className="hover:text-white transition-colors">Atelier Appointments</Link>
                <Link href="#" className="hover:text-white transition-colors">Care Guide</Link>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-[13px] font-bold uppercase tracking-wider text-white">
                About Us
              </h3>
              <div className="flex flex-col gap-3 text-[13px] font-normal text-[#d9d3cb]">
                <Link href="#" className="hover:text-white transition-colors">Our Philosophy</Link>
                <Link href="#" className="hover:text-white transition-colors">Sourcing Standards</Link>
                <Link href="#" className="hover:text-white transition-colors">Sustainability Commitments</Link>
                <Link href="#" className="hover:text-white transition-colors">Journal</Link>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-6 pt-6 border-t border-[#333333] sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] font-normal text-[#d9d3cb]">
            © 2026 Odoratus. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[12px] font-normal text-[#d9d3cb] mr-1">Secured checkout via</span>
            <span className="flex items-center justify-center bg-white px-2 py-1 rounded text-[10px] font-bold text-black uppercase">Visa</span>
            <span className="flex items-center justify-center bg-white px-2 py-1 rounded text-[10px] font-bold text-black uppercase">Mastercard</span>
            <span className="flex items-center justify-center bg-white px-2 py-1 rounded text-[10px] font-bold text-black uppercase">Amex</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
