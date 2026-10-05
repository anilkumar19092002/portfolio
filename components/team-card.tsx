'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function TeamCard({
  member,
  index,
}: {
  member: {
    name: string;
    role: string;
    image: string;
    bio: string;
    skills: string[];
    code: string;
  };
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.58, delay: index * 0.07 }}
      whileHover={{ y: -7 }}
      className="group overflow-hidden rounded-[30px] border border-white/[0.10] bg-white/[0.045]"
    >
      <div className="relative h-[360px] overflow-hidden bg-[#0d1513]">
        <Image src={member.image} alt={member.name} fill className="object-cover object-center grayscale-[15%] transition duration-700 group-hover:scale-[1.035] group-hover:grayscale-0" sizes="(min-width: 1024px) 33vw, 100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07100f] via-transparent to-transparent" />
        <span className="absolute left-5 top-5 rounded-full border border-white/[0.14] bg-black/[0.25] px-3 py-1.5 text-[10px] font-black tracking-[0.18em] text-white/[0.75] backdrop-blur-md">{member.code}</span>
      </div>
      <div className="p-6 sm:p-7">
        <h3 className="text-2xl font-black tracking-[-0.035em] text-[#f4f1e8]">{member.name}</h3>
        <p className="mt-2 text-sm font-semibold text-[#b7ff6a]">{member.role}</p>
        <p className="mt-5 text-sm leading-6 text-white/[0.56]">{member.bio}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {member.skills.map((skill) => (
            <span key={skill} className="rounded-full border border-white/[0.10] bg-black/[0.20] px-3 py-1.5 text-[11px] font-semibold text-white/[0.58]">{skill}</span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
