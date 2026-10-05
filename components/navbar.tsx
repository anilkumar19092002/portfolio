'use client';

import { navItems, site } from '@/lib/data';
import clsx from 'clsx';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-5">
      <div
        className={clsx(
          'mx-auto flex max-w-[1360px] items-center justify-between rounded-full border px-3.5 py-2.5 transition-all duration-300 md:px-5',
          scrolled
            ? 'border-white/[0.12] bg-[#07100f]/82 shadow-[0_12px_45px_rgba(0,0,0,.32)] backdrop-blur-2xl'
            : 'border-white/[0.10] bg-black/[0.20] backdrop-blur-lg'
        )}
      >
        <Link href="#home" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-full bg-[#b7ff6a] text-[13px] font-black tracking-[-0.08em] text-[#07100f]">
            {site.shortName}
            <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-[#73e8ff] blur-[1px]" />
          </span>
          <span className="hidden sm:block">
            <span className="block text-sm font-extrabold tracking-[-0.02em] text-[#f4f1e8]">{site.name}</span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.19em] text-white/[0.38]">Build · Deploy · Grow</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-full px-3.5 py-2 text-sm font-semibold text-white/[0.62] transition hover:bg-white/[0.06] hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="#contact" className="hidden rounded-full bg-[#f4f1e8] px-4 py-2.5 text-xs font-black text-[#07100f] transition hover:bg-[#b7ff6a] sm:inline-flex">
            Start a project
          </Link>
          <button
            onClick={() => setOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/[0.10] bg-white/[0.05] text-white md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-auto mt-2 max-w-[1360px] rounded-[28px] border border-white/[0.10] bg-[#08100f]/95 p-4 shadow-2xl backdrop-blur-2xl md:hidden">
          <nav className="grid gap-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-base font-semibold text-white/[0.74] transition hover:bg-white/[0.06] hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
