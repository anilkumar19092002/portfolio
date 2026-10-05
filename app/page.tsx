import { Footer } from '@/components/footer';
import { InteractiveSpotlight } from '@/components/interactive-spotlight';
import { MagneticButton } from '@/components/magnetic-button';
import { MotionInView } from '@/components/motion-in-view';
import { Navbar } from '@/components/navbar';
import { ProjectCard } from '@/components/project-card';
import { ScrollProgress } from '@/components/scroll-progress';
import { ScrollTopButton } from '@/components/scroll-top-button';
import { SectionHeading } from '@/components/section-heading';
import { TeamCard } from '@/components/team-card';
import {
  capabilityGroups,
  differentiators,
  featuredProjects,
  marketingHighlights,
  marketingMetrics,
  process,
  services,
  site,
  stats,
  team,
  techMarquee,
  valuePoints,
} from '@/lib/data';
import {
  ArrowDownRight,
  ArrowRight,
  CheckCircle2,
  Layers3,
  LineChart,
  Mail,
  Megaphone,
  MoveUpRight,
  Phone,
  Search,
  Sparkles,
  Target,
} from 'lucide-react';

export default function HomePage() {
  const marquee = [...techMarquee, ...techMarquee];

  return (
    <>
      <InteractiveSpotlight />
      <ScrollProgress />
      <ScrollTopButton />
      <Navbar />

      <main className="relative z-[1]">
        <section id="home" className="relative overflow-hidden pt-28 md:pt-36">
          <div className="grid-surface pointer-events-none absolute inset-x-0 top-0 -z-10 h-[980px] opacity-35" />
          <div className="pointer-events-none absolute left-[-14rem] top-32 -z-10 h-[34rem] w-[34rem] rounded-full bg-[#b7ff6a]/10 blur-[130px]" />
          <div className="pointer-events-none absolute right-[-14rem] top-48 -z-10 h-[36rem] w-[36rem] rounded-full bg-[#73e8ff]/10 blur-[140px]" />

          <div className="section-shell pb-14 md:pb-20">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
              <MotionInView>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="eyebrow">Forward Deployed Engineers</span>
                  <span className="rounded-full border border-white/[0.10] bg-white/[0.045] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white/[0.45]">
                    India · Worldwide
                  </span>
                </div>

                <h1 className="display-title mt-6 max-w-[850px] text-[#f4f1e8]">
                  We build <span className="text-[#b7ff6a]">attractive digital products</span> and support the{' '}
                  <span className="text-[#73e8ff]">marketing that helps them grow</span>.
                </h1>

                <div className="mt-6 grid max-w-2xl gap-6 md:grid-cols-[1fr_auto] md:items-end">
                  <p className="text-base leading-7 text-white/[0.65] md:text-lg">
                    {site.description} From product engineering and AI to cloud delivery, UI design and digital marketing — we shape the full experience,
                    not just the code.
                  </p>
                  <ArrowDownRight className="hidden h-10 w-10 shrink-0 text-white/[0.28] md:block" strokeWidth={1.4} />
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <MagneticButton href="#projects">Explore our work</MagneticButton>
                  <MagneticButton href="#marketing" variant="secondary">
                    See digital marketing
                  </MagneticButton>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {valuePoints.map((point, index) => (
                    <MotionInView key={point} delay={0.06 * index} className="rounded-[20px] border border-white/[0.10] bg-white/[0.04] p-3.5 backdrop-blur-xl">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#b7ff6a]" />
                        <p className="text-xs font-semibold leading-5 text-white/[0.76] sm:text-sm">{point}</p>
                      </div>
                    </MotionInView>
                  ))}
                </div>
              </MotionInView>

              <MotionInView delay={0.12} className="relative mx-auto w-full max-w-[620px] lg:mx-0 lg:max-w-none">
                <div className="relative min-h-[580px] sm:min-h-[640px] xl:min-h-[660px]">
                  <div className="float-a absolute left-0 top-3 z-20 w-[86%] overflow-hidden rounded-[32px] border border-white/[0.14] bg-[#0b1211] shadow-[0_35px_100px_rgba(0,0,0,.45)] sm:w-[82%]">
                    <div className="relative h-[440px] sm:h-[490px] xl:h-[510px]">
                      <img
                        src="/projects/fde-studio-hero-ai.png"
                        alt="FDE team collaborating on product design, engineering and AI"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#07100f] via-[#07100f]/18 to-transparent" />
                      <div className="absolute left-5 top-5 rounded-full border border-white/[0.15] bg-black/[0.38] px-3.5 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-white/[0.88] backdrop-blur-md">
                        FDE studio / 01
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                        <p className="text-xs font-black uppercase tracking-[0.2em] text-[#b7ff6a]">Product + AI + Cloud + Growth</p>
                        <p className="mt-2.5 max-w-md text-xl font-black tracking-[-0.035em] text-white sm:text-2xl">
                          A compact team that owns the messy middle between idea, design, launch and growth.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="float-b absolute right-0 top-[280px] z-30 w-[54%] overflow-hidden rounded-[26px] border border-white/[0.15] bg-[#0c1312] shadow-[0_25px_80px_rgba(0,0,0,.42)] sm:top-[310px] sm:w-[50%]">
                    <div className="relative h-[250px] sm:h-[280px]">
                      <img src="/projects/digital-marketing-war-room-ai.png" alt="Digital marketing strategy room" className="h-full w-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                      <div className="absolute bottom-0 p-4 sm:p-5">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#73e8ff]">Growth team</p>
                        <p className="mt-1 text-base font-black text-white sm:text-lg">Digital Marketing</p>
                      </div>
                    </div>
                  </div>

                  <div className="float-c absolute bottom-6 left-[4%] z-40 w-[46%] rounded-[22px] border border-white/[0.12] bg-[#0a1110]/95 p-3.5 shadow-xl backdrop-blur-xl sm:left-[6%] sm:p-4">
                    <div className="flex items-center gap-2.5">
                      <span className="pulse-dot h-2 w-2 rounded-full bg-[#b7ff6a]" />
                      <span className="text-[11px] font-black uppercase tracking-[0.16em] text-white/[0.70]">Currently shipping</span>
                    </div>
                    <div className="mt-3 flex flex-wrap items-center gap-1.5 text-[10px] font-semibold text-white/[0.56] sm:text-[11px]">
                      <span>Strategy</span>
                      <ArrowRight className="h-3 w-3" />
                      <span>Design</span>
                      <ArrowRight className="h-3 w-3" />
                      <span>Build</span>
                      <ArrowRight className="h-3 w-3" />
                      <span>Market</span>
                    </div>
                  </div>
                </div>
              </MotionInView>
            </div>

            <div className="mt-12 grid gap-px overflow-hidden rounded-[28px] border border-white/[0.10] bg-white/[0.10] sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <MotionInView key={stat.label} delay={index * 0.05} className="bg-[#07100f]/90 px-6 py-6">
                  <p className="text-2xl font-black tracking-[-0.04em] text-[#f4f1e8]">{stat.value}</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/[0.35]">{stat.label}</p>
                </MotionInView>
              ))}
            </div>
          </div>

          <div className="marquee-mask overflow-hidden border-y border-white/[0.10] bg-white/[0.025] py-4">
            <div className="marquee-track flex gap-2 px-2">
              {marquee.map((item, index) => (
                <span key={`${item}-${index}`} className="flex items-center gap-3 rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-white/[0.42]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#b7ff6a]" /> {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell py-20 md:py-24">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <SectionHeading
              eyebrow="Why this version feels stronger"
              title="Built to impress faster and explain the team better."
              description="The portfolio now has a more professional opening, more realistic AI-generated visual support, clearer project framing and better content around what the team actually does."
            />
            <MotionInView className="lg:pb-2">
              <p className="max-w-md text-sm leading-6 text-white/[0.50] lg:ml-auto">
                This section helps the site feel more complete and client-facing: visual quality, service clarity, digital marketing visibility and stronger content hierarchy.
              </p>
            </MotionInView>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-[1.1fr_.9fr_.9fr]">
            {differentiators.map((item, index) => (
              <MotionInView
                key={item.title}
                delay={index * 0.05}
                className="metric-glow relative overflow-hidden rounded-[28px] border border-white/[0.10] bg-white/[0.045] p-6 sm:p-7"
              >
                <div className="relative z-10">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#b7ff6a]">0{index + 1}</p>
                  <h3 className="mt-5 text-2xl font-black tracking-[-0.04em] text-[#f4f1e8]">{item.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-white/[0.58]">{item.description}</p>
                </div>
              </MotionInView>
            ))}
          </div>
        </section>

        <section id="services" className="section-shell py-20 md:py-24">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <SectionHeading
              eyebrow="What we deliver"
              title="More than a portfolio. A full digital delivery partner."
              description="We do not stop at design mockups. We help teams shape the product, build the system, launch the experience and support growth after release."
            />
            <MotionInView className="lg:pb-2">
              <p className="max-w-md text-sm leading-6 text-white/[0.50] lg:ml-auto">
                Product engineering, AI, cloud, creative and digital marketing now sit together instead of looking like separate disconnected services.
              </p>
            </MotionInView>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <MotionInView
                  key={service.title}
                  delay={index * 0.05}
                  className="group relative overflow-hidden rounded-[28px] border border-white/[0.10] bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/[0.16] hover:bg-white/[0.06]"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/[0.08] text-[#b7ff6a]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-7 text-2xl font-black tracking-[-0.04em] text-[#f4f1e8]">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/[0.56]">{service.description}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-white/[0.34]">
                    Included in delivery <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </MotionInView>
              );
            })}
          </div>
        </section>

        <section id="projects" className="section-shell py-24 md:py-32">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <SectionHeading
              eyebrow="Selected work"
              title="Proof before promises."
              description="A mix of live products and ongoing builds across technology, service operations, commerce, hospitality, fashion and AI-assisted travel."
            />
            <MotionInView className="lg:pb-2">
              <p className="max-w-md text-sm leading-6 text-white/[0.50] lg:ml-auto">
                Each project is presented as a product story — the business problem, the experience we built and the systems that make it useful in the real world.
              </p>
            </MotionInView>
          </div>

          <div className="mt-14 space-y-7 md:mt-20 md:space-y-9">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} />
            ))}
          </div>
        </section>

        <section id="marketing" className="relative overflow-hidden border-y border-white/[0.10] bg-[#080f0e] py-24 md:py-32">
          <div className="pointer-events-none absolute left-[-10rem] top-10 h-72 w-72 rounded-full bg-[#b7ff6a]/10 blur-[120px]" />
          <div className="pointer-events-none absolute right-[-10rem] bottom-0 h-72 w-72 rounded-full bg-[#73e8ff]/10 blur-[120px]" />
          <div className="section-shell relative">
            <div className="grid gap-10 xl:grid-cols-[.95fr_1.05fr] xl:items-center">
              <MotionInView className="relative overflow-hidden rounded-[34px] border border-white/[0.10] bg-white/[0.04]">
                <div className="relative h-[430px] sm:h-[520px]">
                  <img src="/projects/digital-marketing-war-room-ai.png" alt="Digital marketing analytics and content strategy war room" className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060909] via-[#060909]/15 to-transparent" />
                  <div className="absolute left-5 top-5 rounded-full border border-white/[0.14] bg-black/[0.30] px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-white/[0.80] backdrop-blur-md">
                    Digital marketing / growth
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 rounded-[24px] border border-white/[0.10] bg-[#07100f]/75 p-5 backdrop-blur-xl sm:bottom-7 sm:left-7 sm:right-7">
                    <div className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.16em] text-[#b7ff6a]">
                      <Megaphone className="h-4 w-4" /> Included in our portfolio offer
                    </div>
                    <p className="mt-3 text-xl font-bold leading-8 tracking-[-0.03em] text-white/[0.90]">
                      Campaign strategy, social content, paid growth, SEO structure and analytics are now clearly part of the portfolio.
                    </p>
                  </div>
                </div>
              </MotionInView>

              <div>
                <SectionHeading
                  eyebrow="Digital marketing"
                  title="Not only development. We also help products get seen."
                  description="You asked to include digital marketing clearly, so this version makes it a visible service line. We position marketing as part of the delivery stack: brand storytelling, campaign planning, SEO, paid media and reporting."
                />

                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  {marketingHighlights.map((item, index) => (
                    <MotionInView key={item.title} delay={index * 0.05} className="rounded-[24px] border border-white/[0.10] bg-white/[0.04] p-5">
                      <p className="text-sm font-black uppercase tracking-[0.16em] text-[#b7ff6a]">0{index + 1}</p>
                      <h3 className="mt-4 text-xl font-black tracking-[-0.03em] text-[#f4f1e8]">{item.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-white/[0.56]">{item.description}</p>
                    </MotionInView>
                  ))}
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {marketingMetrics.map((item, index) => (
                    <MotionInView key={item.label} delay={index * 0.05} className="rounded-[24px] border border-white/[0.10] bg-black/[0.16] p-5">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-white/[0.36]">{item.label}</p>
                      <p className="mt-3 text-sm font-semibold leading-6 text-white/[0.82]">{item.value}</p>
                    </MotionInView>
                  ))}
                </div>

                <MotionInView className="mt-8 rounded-[28px] border border-white/[0.10] bg-gradient-to-r from-[#b7ff6a]/10 via-white/[0.03] to-[#73e8ff]/10 p-6 sm:p-7">
                  <p className="text-sm leading-7 text-white/[0.76]">
                    The aim is simple: the portfolio should look more complete and more premium, while also showing that your team can support visibility and growth after building the product.
                  </p>
                </MotionInView>
              </div>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-4">
              <MotionInView className="rounded-[26px] border border-white/[0.10] bg-white/[0.045] p-6">
                <Search className="h-5 w-5 text-[#b7ff6a]" />
                <h3 className="mt-5 text-lg font-black tracking-[-0.03em] text-[#f4f1e8]">SEO-ready pages</h3>
                <p className="mt-3 text-sm leading-6 text-white/[0.56]">Landing page structure, keywords, metadata, content sections and discoverability support.</p>
              </MotionInView>
              <MotionInView delay={0.05} className="rounded-[26px] border border-white/[0.10] bg-white/[0.045] p-6">
                <Target className="h-5 w-5 text-[#73e8ff]" />
                <h3 className="mt-5 text-lg font-black tracking-[-0.03em] text-[#f4f1e8]">Paid campaign support</h3>
                <p className="mt-3 text-sm leading-6 text-white/[0.56]">Ad angles, creative direction, campaign-ready landing sections and audience-oriented messaging.</p>
              </MotionInView>
              <MotionInView delay={0.1} className="rounded-[26px] border border-white/[0.10] bg-white/[0.045] p-6">
                <Sparkles className="h-5 w-5 text-[#ff89bf]" />
                <h3 className="mt-5 text-lg font-black tracking-[-0.03em] text-[#f4f1e8]">Content systems</h3>
                <p className="mt-3 text-sm leading-6 text-white/[0.56]">Social content direction, brand voice support, visuals and campaign storytelling.</p>
              </MotionInView>
              <MotionInView delay={0.15} className="rounded-[26px] border border-white/[0.10] bg-white/[0.045] p-6">
                <LineChart className="h-5 w-5 text-[#ffb270]" />
                <h3 className="mt-5 text-lg font-black tracking-[-0.03em] text-[#f4f1e8]">Reporting mindset</h3>
                <p className="mt-3 text-sm leading-6 text-white/[0.56]">Clear metrics, improvement loops and decisions tied to visibility, engagement and conversion intent.</p>
              </MotionInView>
            </div>
          </div>
        </section>

        <section id="capabilities" className="relative border-y border-white/[0.10] bg-[#f1efe7] py-24 text-[#0a0d0c] md:py-32">
          <div className="pointer-events-none absolute inset-0 opacity-[0.055] [background-image:radial-gradient(#07100f_1px,transparent_1px)] [background-size:22px_22px]" />
          <div className="section-shell relative">
            <div className="grid gap-10 lg:grid-cols-[1fr_.7fr] lg:items-end">
              <div>
                <p className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-black/[0.46]">
                  <span className="h-2 w-2 rounded-full bg-[#5f9d25]" /> Capabilities
                </p>
                <h2 className="section-title mt-6 max-w-4xl text-[#0a0d0c]">One delivery unit. Fewer handoffs.</h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-black/[0.58] lg:ml-auto">
                We connect product thinking, engineering, AI, infrastructure, creative execution and digital marketing so the experience and the underlying system move together.
              </p>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {capabilityGroups.map((group, index) => {
                const Icon = group.icon;
                return (
                  <MotionInView
                    key={group.title}
                    delay={index * 0.045}
                    className={`group rounded-[28px] border border-black/[0.10] bg-white/[0.58] p-7 shadow-[0_20px_60px_rgba(32,45,34,.06)] transition duration-300 hover:-translate-y-1 hover:bg-white ${group.size === 'wide' ? 'xl:col-span-2' : ''}`}
                  >
                    <div className="flex items-start justify-between gap-5">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#0a0d0c] text-[#b7ff6a]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="text-xs font-black tracking-[0.14em] text-black/[0.25]">0{index + 1}</span>
                    </div>
                    <h3 className="mt-8 text-2xl font-black tracking-[-0.04em]">{group.title}</h3>
                    <p className="mt-4 max-w-2xl text-sm leading-6 text-black/[0.57]">{group.description}</p>
                    <div className="mt-7 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span key={item} className="rounded-full border border-black/[0.10] px-3 py-1.5 text-xs font-bold text-black/[0.52]">
                          {item}
                        </span>
                      ))}
                    </div>
                  </MotionInView>
                );
              })}
            </div>
          </div>
        </section>

        <section id="process" className="section-shell py-24 md:py-32">
          <SectionHeading
            eyebrow="How we work"
            title="Close to the problem. Close to production."
            description="Forward deployed engineering works best when discovery, implementation and real-world feedback stay connected instead of moving through long handoff chains."
          />

          <div className="relative mt-16 grid gap-4 lg:grid-cols-4">
            <div className="flow-line absolute left-[12%] right-[12%] top-7 hidden h-px lg:block" />
            {process.map((item, index) => (
              <MotionInView key={item.step} delay={index * 0.07} className="relative rounded-[28px] border border-white/[0.10] bg-white/[0.035] p-6 sm:p-7">
                <div className="relative z-10 grid h-14 w-14 place-items-center rounded-full border border-white/[0.12] bg-[#07100f] text-xs font-black text-[#b7ff6a]">
                  {item.step}
                </div>
                <h3 className="mt-8 text-xl font-black tracking-[-0.035em] text-[#f4f1e8]">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-white/[0.48]">{item.description}</p>
              </MotionInView>
            ))}
          </div>

          <MotionInView className="mt-6 overflow-hidden rounded-[30px] border border-white/[0.10] bg-gradient-to-r from-[#b7ff6a]/10 via-white/[0.03] to-[#73e8ff]/10 p-7 md:p-9">
            <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="flex items-start gap-4">
                <Layers3 className="mt-1 h-6 w-6 shrink-0 text-[#b7ff6a]" />
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.19em] text-white/[0.36]">The FDE advantage</p>
                  <p className="mt-3 max-w-3xl text-xl font-bold leading-8 tracking-[-0.02em] text-white/[0.86]">
                    The people discussing the problem are the same people designing the flow, building the system, supporting the launch and thinking about growth after go-live.
                  </p>
                </div>
              </div>
              <MagneticButton href="#contact" variant="secondary">
                Discuss your use case
              </MagneticButton>
            </div>
          </MotionInView>
        </section>

        <section id="team" className="section-shell pb-24 md:pb-32">
          <div className="grid gap-12 xl:grid-cols-[.6fr_1.4fr] xl:items-start">
            <div className="xl:sticky xl:top-32">
              <SectionHeading
                eyebrow="The team"
                title="Three perspectives. One delivery rhythm."
                description="AI, full-stack product engineering, cloud delivery and creative execution — coordinated as one small team instead of separate vendors."
              />
              <MotionInView className="mt-8 flex items-center gap-3 text-sm font-semibold text-white/[0.47]">
                <CheckCircle2 className="h-5 w-5 text-[#b7ff6a]" /> Direct collaboration with the engineers doing the work.
              </MotionInView>
            </div>
            <div className="grid gap-5 lg:grid-cols-3 xl:grid-cols-1 2xl:grid-cols-3">
              {team.map((member, index) => (
                <TeamCard key={member.name} member={member} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section-shell pb-20 md:pb-28">
          <div className="relative overflow-hidden rounded-[38px] border border-white/[0.10] bg-[#b7ff6a] p-7 text-[#07100f] shadow-[0_30px_100px_rgba(183,255,106,.12)] sm:p-10 md:p-14 lg:p-16">
            <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full border-[45px] border-black/[0.055]" />
            <div className="pointer-events-none absolute -bottom-20 right-[22%] h-52 w-52 rounded-full border-[34px] border-black/[0.04]" />
            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-black/[0.48]">
                  <Sparkles className="h-4 w-4" /> Have something to build?
                </p>
                <h2 className="mt-6 max-w-5xl text-5xl font-black leading-[.92] tracking-[-0.06em] sm:text-6xl md:text-7xl">
                  Bring us the messy version. We’ll turn it into a better product story.
                </h2>
                <p className="mt-7 max-w-2xl text-base leading-7 text-black/[0.60]">
                  Share the goal, the workflow or even the rough idea. We can help shape scope, architecture, visuals, content, digital marketing direction and the path to production.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
                <a
                  href={`mailto:${site.email}`}
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#07100f] px-6 py-4 text-sm font-black text-[#f4f1e8] shadow-xl transition hover:-translate-y-1 hover:bg-black"
                >
                  <Mail className="h-4 w-4 text-[#b7ff6a]" /> Email: {site.email} <MoveUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href={`tel:${site.phoneRaw}`}
                  className="group inline-flex items-center justify-center gap-3 rounded-full border-2 border-[#07100f] bg-transparent px-6 py-4 text-sm font-black text-[#07100f] shadow-sm transition hover:-translate-y-1 hover:bg-[#07100f] hover:text-[#f4f1e8]"
                >
                  <Phone className="h-4 w-4" /> Call: {site.phone}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
