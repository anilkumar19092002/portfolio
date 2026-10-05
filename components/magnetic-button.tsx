'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { ReactNode } from 'react';

export function MagneticButton({
  href,
  children,
  variant = 'primary',
  target,
}: {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  target?: string;
}) {
  return (
    <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 350, damping: 22 }}>
      <Link
        href={href}
        target={target}
        className={clsx(
          'group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-extrabold transition-all duration-300',
          variant === 'primary'
            ? 'bg-[#b7ff6a] text-[#07100f] shadow-[0_12px_40px_rgba(183,255,106,.15)] hover:shadow-[0_16px_55px_rgba(183,255,106,.24)]'
            : 'border border-white/[0.15] bg-white/[0.055] text-[#f4f1e8] hover:border-white/[0.25] hover:bg-white/[0.09]'
        )}
      >
        <span>{children}</span>
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </Link>
    </motion.div>
  );
}
