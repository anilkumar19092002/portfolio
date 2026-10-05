import { navItems, site } from '@/lib/data';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-white/[0.10] bg-[#050807]">
      <div className="section-shell py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_.6fr] md:items-end">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#b7ff6a]">{site.name}</p>
            <h3 className="mt-4 max-w-3xl text-3xl font-black tracking-[-0.045em] text-[#f4f1e8] md:text-5xl">Small team. Senior ownership. Products that feel finished and get seen.</h3>
          </div>
          <div className="space-y-2 md:text-right">
            <div>
              <a href={`mailto:${site.email}`} className="group inline-flex items-center gap-2 text-sm font-bold text-white/[0.85] transition hover:text-[#b7ff6a]">
                {site.email} <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
            <div>
              <a href={`tel:${site.phoneRaw}`} className="group inline-flex items-center gap-2 text-sm font-bold text-white/[0.70] transition hover:text-[#b7ff6a]">
                {site.phone} <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
            <p className="pt-1 text-xs text-white/[0.35]">{site.location}</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-white/[0.10] pt-7 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-xs font-semibold text-white/[0.42] transition hover:text-white">{item.label}</Link>
            ))}
          </div>
          <p className="text-xs text-white/[0.30]">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
