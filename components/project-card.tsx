'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Check, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const toneMap: Record<string, { dot: string; glow: string; label: string }> = {
  lime: { dot: 'bg-[#b7ff6a]', glow: 'from-[#b7ff6a]/25', label: 'text-[#c9ff92]' },
  cyan: { dot: 'bg-[#73e8ff]', glow: 'from-[#73e8ff]/25', label: 'text-[#a9f1ff]' },
  blue: { dot: 'bg-[#77a9ff]', glow: 'from-[#77a9ff]/25', label: 'text-[#a7c6ff]' },
  orange: { dot: 'bg-[#ff9a63]', glow: 'from-[#ff9a63]/25', label: 'text-[#ffbb94]' },
  pink: { dot: 'bg-[#ff89bf]', glow: 'from-[#ff89bf]/25', label: 'text-[#ffb3d5]' },
  violet: { dot: 'bg-[#a58cff]', glow: 'from-[#a58cff]/25', label: 'text-[#c3b4ff]' },
};

type Project = {
  name: string;
  url: string;
  category: string;
  kicker: string;
  description: string;
  highlights: string[];
  stack: string[];
  image: string;
  imageAlt: string;
  tone: string;
  result: string;
};

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const tone = toneMap[project.tone] ?? toneMap.lime;
  const reverse = index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.72, delay: 0.04 }}
      className="project-card relative overflow-hidden rounded-[34px] border border-white/[0.10] bg-white/[0.045] shadow-[0_30px_100px_rgba(0,0,0,.26)]"
    >
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${tone.glow} via-transparent to-transparent opacity-50`} />
      <div className={`relative grid min-h-[560px] lg:grid-cols-[1.08fr_.92fr] ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
        <div className="relative min-h-[340px] overflow-hidden bg-black/[0.30] lg:min-h-full">
          <img src={project.image} alt={project.imageAlt} className="project-image absolute inset-0 h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060909]/78 via-transparent to-black/10" />
          <div className="absolute inset-x-4 top-4 flex items-center justify-between gap-3 sm:inset-x-6 sm:top-6">
            <div className="flex items-center gap-2 rounded-full border border-white/[0.15] bg-black/[0.35] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/[0.80] backdrop-blur-md">
              <span className={`pulse-dot h-2 w-2 rounded-full ${tone.dot}`} />
              Live work
            </div>
            <Link href={project.url} target="_blank" className="grid h-11 w-11 place-items-center rounded-full border border-white/[0.15] bg-black/[0.35] text-white backdrop-blur-md transition hover:scale-105 hover:bg-white hover:text-black" aria-label={`Open ${project.name}`}>
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
          <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7">
            <div className="max-w-md rounded-[24px] border border-white/[0.12] bg-[#07100f]/72 p-4 backdrop-blur-xl sm:p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/[0.45]">Outcome</p>
              <p className="mt-2 text-base font-semibold leading-6 text-white/[0.90]">{project.result}</p>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col p-7 sm:p-9 lg:p-11">
          <div className="flex items-start justify-between gap-5">
            <p className={`text-xs font-black uppercase tracking-[0.2em] ${tone.label}`}>{String(index + 1).padStart(2, '0')} / {project.category}</p>
            <span className="text-xs font-semibold text-white/[0.26]">CASE STUDY</span>
          </div>
          <h3 className="mt-10 text-4xl font-black tracking-[-0.055em] text-[#f4f1e8] sm:text-5xl">{project.name}</h3>
          <p className="mt-3 text-sm font-bold uppercase tracking-[0.16em] text-white/[0.38]">{project.kicker}</p>
          <p className="mt-7 text-[15px] leading-7 text-white/[0.62] sm:text-base">{project.description}</p>

          <div className="mt-8 space-y-3">
            {project.highlights.map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm font-semibold text-white/[0.78]">
                <span className={`grid h-5 w-5 place-items-center rounded-full ${tone.dot} text-[#07100f]`}><Check className="h-3 w-3" strokeWidth={3} /></span>
                {item}
              </div>
            ))}
          </div>

          <div className="mt-auto pt-10">
            <div className="mb-6 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span key={item} className="rounded-full border border-white/[0.10] bg-black/[0.20] px-3 py-1.5 text-xs font-semibold text-white/[0.55]">{item}</span>
              ))}
            </div>
            <Link href={project.url} target="_blank" className="group inline-flex items-center gap-2 text-sm font-black text-[#f4f1e8]">
              Visit live project
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
