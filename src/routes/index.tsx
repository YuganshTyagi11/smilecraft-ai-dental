import { createFileRoute } from "@tanstack/react-router";

import heroTooth from "@/assets/hero-tooth-v2.jpg";
import techGlow from "@/assets/tech-glow.jpg";
import smileMacro from "@/assets/smile-macro.jpg";
import beforeWhitening from "@/assets/before-whitening.jpg";
import afterWhitening from "@/assets/after-whitening.jpg";
import beforeAligner from "@/assets/before-aligner.jpg";
import afterAligner from "@/assets/after-aligner.jpg";
import dentist1 from "@/assets/dentist-1.jpg";
import dentist2 from "@/assets/dentist-2.jpg";
import dentist3 from "@/assets/dentist-3.jpg";

import { AIChat } from "@/components/AIChat";
import { BookingForm } from "@/components/BookingForm";
import { CostEstimator } from "@/components/CostEstimator";

const WHATSAPP_NUMBER = "919999999999";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SmileCraft Dental — Future-Forward Dentistry with AI" },
      {
        name: "description",
        content:
          "Premium dental care powered by AI. Instant symptom guidance, transparent pricing, 3D smile previews, and effortless WhatsApp booking.",
      },
      { property: "og:title", content: "SmileCraft Dental — Future-Forward Dentistry with AI" },
      {
        property: "og:description",
        content:
          "AI-powered dental triage, transparent INR pricing and WhatsApp booking in a cinematic clinical experience.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-night text-white font-sans selection:bg-brand/30 selection:text-white">
      <Nav />
      <Hero />
      <LogoMarquee />
      <BentoFeatures />
      <AIAssistantSection />
      <Treatments />
      <SmileGallery />
      <Dentists />
      <PricingEstimator />
      <BookingSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

/* ---------- Nav ---------- */
function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/5 bg-night/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2.5">
          <span className="relative grid size-9 place-items-center rounded-xl bg-gradient-to-br from-brand to-brand-glow shadow-[0_0_24px_rgba(59,130,246,0.5)]">
            <span className="size-3 rounded-full bg-white" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight">
            Smile<span className="text-gradient">Craft</span>
          </span>
        </a>
        <div className="hidden items-center gap-8 text-sm font-medium text-white/70 md:flex">
          <a href="#features" className="transition-colors hover:text-white">Features</a>
          <a href="#treatments" className="transition-colors hover:text-white">Treatments</a>
          <a href="#gallery" className="transition-colors hover:text-white">Gallery</a>
          <a href="#dentists" className="transition-colors hover:text-white">Doctors</a>
          <a href="#pricing" className="transition-colors hover:text-white">Pricing</a>
        </div>
        <a
          href="#book"
          className="group relative inline-flex items-center overflow-hidden rounded-full bg-gradient-to-r from-brand to-brand-glow px-5 py-2 text-sm font-semibold text-white shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-transform active:scale-95"
        >
          Book Visit →
        </a>
      </div>
    </nav>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 size-[900px] rounded-full radial-spot blur-3xl animate-aurora bg-[linear-gradient(120deg,#1e3a8a_0%,#0ea5e9_50%,#7c3aed_100%)] opacity-40" />
      <div className="pointer-events-none absolute -bottom-20 right-0 size-[500px] rounded-full bg-gradient-to-br from-cyan-glow/20 to-brand/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-28 lg:pt-28 lg:pb-36">
        <div className="grid gap-16 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div className="animate-fade-up">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/80 backdrop-blur">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-cyan-400" />
              </span>
              AI Dental Assistant · Live 24/7
            </div>
            <h1 className="text-balance font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              The future of your <span className="text-gradient">smile</span>
              <br />
              starts <em className="not-italic text-gradient">today.</em>
            </h1>
            <p className="mt-7 max-w-[58ch] text-lg leading-relaxed text-white/65">
              Cinematic dentistry powered by AI. Describe a symptom, get an instant
              explanation, see your treatment cost, and book on WhatsApp — all in under
              a minute.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#book"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-brand to-brand-glow px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_40px_-10px_rgba(59,130,246,0.7)] transition-transform hover:scale-[1.02] active:scale-95"
              >
                <span className="relative z-10">Book Appointment</span>
                <span className="relative z-10 transition-transform group-hover:translate-x-1">→</span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </a>
              <a
                href="#ai"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/10"
              >
                <span className="size-1.5 rounded-full bg-cyan-glow animate-glow-pulse" />
                Try AI Assistant
              </a>
            </div>

            <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-8">
              <Stat value="15+" label="Years" />
              <Stat value="12K+" label="Smiles" />
              <Stat value="4.9★" label="Rating" />
            </dl>
          </div>

          {/* Hero image */}
          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="absolute -inset-10 animate-glow-pulse rounded-full bg-brand/30 blur-3xl" />
            <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-white/10" />
            <div className="relative">
              <img
                src={heroTooth}
                alt="Crystalline 3D tooth glowing with electric blue light"
                width={1024}
                height={1024}
                className="animate-float relative z-10 mx-auto w-full max-w-[440px] [filter:drop-shadow(0_30px_60px_rgba(34,211,238,0.35))]"
              />
            </div>
            {/* Floating chips */}
            <div className="absolute left-2 top-12 hidden rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl sm:block animate-fade-up">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-cyan-glow">AI Triage</p>
              <p className="mt-1 text-sm font-medium">Instant diagnosis</p>
            </div>
            <div className="absolute -bottom-4 right-0 hidden rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl sm:block animate-fade-up">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-cyan-glow">98% comfort</p>
              <p className="mt-1 text-sm font-medium">Painless protocol</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dt className="font-display text-3xl font-bold text-gradient">{value}</dt>
      <dd className="mt-1 text-xs uppercase tracking-wider text-white/50">{label}</dd>
    </div>
  );
}

/* ---------- Trust strip ---------- */
function LogoMarquee() {
  const items = [
    "Invisalign Diamond",
    "ISO 9001 Certified",
    "Cone Beam 3D Imaging",
    "Digital Smile Design",
    "Sterilization Class B",
    "0% EMI Available",
    "WhatsApp Booking",
    "Cashless Insurance",
  ];
  return (
    <div className="relative border-y border-white/5 bg-white/[0.02] py-6">
      <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
        <div className="flex shrink-0 animate-marquee gap-12 pr-12">
          {[...items, ...items].map((i, idx) => (
            <span key={idx} className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/40">
              <span className="size-1.5 rounded-full bg-brand" />
              {i}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- Bento features ---------- */
function BentoFeatures() {
  return (
    <section id="features" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-glow">Why SmileCraft</span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight lg:text-5xl">
            Built for the <span className="text-gradient">modern patient</span>.
          </h2>
        </div>

        <div className="grid auto-rows-[180px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Large: AI */}
          <BentoCard className="sm:col-span-2 lg:col-span-2 lg:row-span-2 overflow-hidden">
            <div className="absolute inset-0">
              <img src={techGlow} alt="" loading="lazy" className="h-full w-full object-cover opacity-30" />
              <div className="absolute inset-0 bg-gradient-to-tr from-night via-night/80 to-transparent" />
            </div>
            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cyan-glow">
                <span className="size-1.5 rounded-full bg-cyan-glow animate-glow-pulse" />
                Signature feature
              </div>
              <div>
                <h3 className="font-display text-3xl font-bold leading-tight lg:text-4xl">
                  AI Dental Assistant
                </h3>
                <p className="mt-3 max-w-md text-sm text-white/60">
                  Tell it your symptom in plain words. Get explanations, next steps and urgency
                  flags — instantly.
                </p>
                <a href="#ai" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-glow">
                  Try it now <span>→</span>
                </a>
              </div>
            </div>
          </BentoCard>

          <BentoCard>
            <Icon>📅</Icon>
            <h3 className="mt-3 font-display text-lg font-semibold">Online Booking</h3>
            <p className="mt-1 text-sm text-white/55">Pick a slot in 30 seconds. Confirmed on WhatsApp.</p>
          </BentoCard>

          <BentoCard>
            <Icon>💎</Icon>
            <h3 className="mt-3 font-display text-lg font-semibold">Smile Gallery</h3>
            <p className="mt-1 text-sm text-white/55">Real before/after stories from our chairs.</p>
          </BentoCard>

          <BentoCard>
            <Icon>🦷</Icon>
            <h3 className="mt-3 font-display text-lg font-semibold">12+ Treatments</h3>
            <p className="mt-1 text-sm text-white/55">From whitening to implants, fully digital.</p>
          </BentoCard>

          <BentoCard>
            <Icon>💰</Icon>
            <h3 className="mt-3 font-display text-lg font-semibold">Cost Estimator</h3>
            <p className="mt-1 text-sm text-white/55">Transparent INR pricing before you arrive.</p>
          </BentoCard>

          <BentoCard className="sm:col-span-2 overflow-hidden">
            <div className="absolute inset-0">
              <img src={smileMacro} alt="" loading="lazy" className="h-full w-full object-cover opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-r from-night via-night/60 to-transparent" />
            </div>
            <div className="relative flex h-full items-end">
              <div>
                <h3 className="font-display text-2xl font-bold">Premium 3D imaging</h3>
                <p className="mt-1 text-sm text-white/60">Cone-beam CT for millimetre-perfect treatment planning.</p>
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}

function BentoCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:bg-white/[0.06] hover:shadow-[0_20px_60px_-20px_rgba(59,130,246,0.5)] ${className}`}
    >
      {children}
    </div>
  );
}

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-grid size-11 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-brand/20 to-brand-glow/10 text-xl">
      {children}
    </div>
  );
}

/* ---------- AI section ---------- */
function AIAssistantSection() {
  return (
    <section id="ai" className="relative py-28">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
      <div className="absolute left-1/2 top-0 -translate-x-1/2 size-[600px] rounded-full bg-brand/15 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-2 backdrop-blur-xl">
          <div className="grid lg:grid-cols-[1fr_1.05fr]">
            <div className="p-8 lg:p-14">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-glow/30 bg-cyan-glow/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-glow">
                AI Dental Assistant
              </div>
              <h2 className="mt-6 font-display text-4xl font-bold leading-tight lg:text-5xl">
                Got a <span className="text-gradient">toothache?</span>
                <br />Ask away.
              </h2>
              <p className="mt-5 max-w-[44ch] text-white/65">
                Describe what you feel — "sharp pain when drinking cold water" — and our AI explains
                possible causes in plain language and recommends what to do next.
              </p>
              <ul className="mt-8 space-y-3 text-sm">
                {[
                  "Plain-English explanations of symptoms",
                  "Urgency assessment & next-step guidance",
                  "Completely free, instant, available 24/7",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-white/75">
                    <span className="mt-0.5 grid size-5 place-items-center rounded-full bg-gradient-to-br from-brand to-brand-glow text-[10px] font-bold text-white">✓</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-3 lg:p-6">
              <div className="rounded-2xl bg-white p-1 text-ink shadow-[0_20px_80px_-20px_rgba(0,0,0,0.6)]">
                <AIChat />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Treatments ---------- */
const TREATMENTS = [
  { n: "01", title: "Cosmetic Veneers", desc: "Hand-crafted porcelain restorations to perfect alignment and shade.", icon: "✨" },
  { n: "02", title: "Dental Implants", desc: "Titanium permanent solutions for missing teeth — lifetime durability.", icon: "🦷" },
  { n: "03", title: "Invisible Aligners", desc: "Clear aligners for discreet straightening without metal friction.", icon: "🧊" },
  { n: "04", title: "Root Canal Therapy", desc: "Modern, near-painless endodontic care that saves natural structure.", icon: "🩺" },
  { n: "05", title: "Pro Whitening", desc: "Clinic-grade whitening — lift 6–8 shades in a single session.", icon: "⚡" },
  { n: "06", title: "Pediatric Care", desc: "Gentle, anxiety-free dentistry designed for little smiles.", icon: "🧸" },
];

function Treatments() {
  return (
    <section id="treatments" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 pb-12 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-glow">Treatments</span>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight lg:text-5xl">
              Comprehensive <span className="text-gradient">oral care</span>.
            </h2>
            <p className="mt-4 text-white/60">
              Specialized treatments engineered for longevity and aesthetic precision.
            </p>
          </div>
          <a href="#pricing" className="text-sm font-semibold text-cyan-glow">View price estimator →</a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TREATMENTS.map((t) => (
            <article
              key={t.n}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-[0_20px_60px_-20px_rgba(59,130,246,0.5)]"
            >
              <div className="pointer-events-none absolute -right-12 -top-12 size-40 rounded-full bg-brand/20 blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="flex items-start justify-between">
                <div className="grid size-12 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-brand/20 to-brand-glow/10 text-2xl">
                  {t.icon}
                </div>
                <span className="font-display text-sm font-semibold text-white/30">{t.n}</span>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold">{t.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">{t.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Gallery ---------- */
const CASES = [
  { title: "Signature Whitening Package", before: beforeWhitening, after: afterWhitening },
  { title: "18-Month Aligner Treatment", before: beforeAligner, after: afterAligner },
];

function SmileGallery() {
  return (
    <section id="gallery" className="relative py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-glow">Smile gallery</span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight lg:text-5xl">
            Proven <span className="text-gradient">transformations</span>.
          </h2>
          <p className="mt-4 text-white/60">Real before-and-after results from patients in our care.</p>
        </div>
        <div className="mt-16 grid gap-10 sm:grid-cols-2">
          {CASES.map((c) => (
            <figure key={c.title} className="group relative">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-3">
                <div className="grid grid-cols-2 gap-3">
                  <BeforeAfter src={c.before} label="Before" />
                  <BeforeAfter src={c.after} label="After" />
                </div>
              </div>
              <figcaption className="mt-5 text-center text-sm font-medium text-white/70">{c.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function BeforeAfter({ src, label }: { src: string; label: string }) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-zinc-900 ring-1 ring-white/5">
      <img src={src} alt={`${label} treatment`} width={768} height={512} loading="lazy" className="aspect-[3/2] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <span className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest backdrop-blur ${label === "After" ? "bg-gradient-to-r from-brand to-brand-glow text-white" : "bg-black/60 text-white"}`}>
        {label}
      </span>
    </div>
  );
}

/* ---------- Dentists ---------- */
const DENTISTS = [
  { name: "Dr. Aisha Verma", role: "Cosmetic & Restorative", bio: "12 years specializing in veneers, smile design and digital workflows.", img: dentist1 },
  { name: "Dr. Rohan Mehta", role: "Endodontist & Implantologist", bio: "Microscope-guided root canals and same-day implant procedures.", img: dentist2 },
  { name: "Dr. Priya Iyer", role: "Orthodontist", bio: "Invisalign Diamond Provider with 800+ aligner cases completed.", img: dentist3 },
];

function Dentists() {
  return (
    <section id="dentists" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-glow">The team</span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight lg:text-5xl">
            Meet your <span className="text-gradient">specialists</span>.
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DENTISTS.map((d) => (
            <article key={d.name} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={d.img} alt={`Portrait of ${d.name}`} width={640} height={768} loading="lazy" className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-night via-night/85 to-transparent p-6 pt-16">
                <h3 className="font-display text-xl font-bold">{d.name}</h3>
                <p className="mt-1 text-sm font-medium text-cyan-glow">{d.role}</p>
                <p className="mt-3 text-sm text-white/60">{d.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Pricing ---------- */
function PricingEstimator() {
  return (
    <section id="pricing" className="relative py-28">
      <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-glow">Transparent pricing</span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight lg:text-5xl">
            Instant <span className="text-gradient">cost estimator</span>.
          </h2>
          <p className="mt-4 text-white/60">Pick your treatments. See pricing in INR. No hidden fees.</p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-2 backdrop-blur-xl">
          <div className="rounded-[20px] bg-surface p-2 text-ink">
            <CostEstimator />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Booking ---------- */
function BookingSection() {
  return (
    <section id="book" className="relative py-28">
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 size-[700px] rounded-full bg-brand/15 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-glow">Book a visit</span>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight lg:text-5xl">
              Reserve your <span className="text-gradient">appointment</span>.
            </h2>
            <p className="mt-5 max-w-[44ch] text-white/65">
              Pick a date, choose a service, and we'll confirm on WhatsApp within minutes.
              First consultation is complimentary.
            </p>
            <div className="mt-8 space-y-3 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
              <Detail label="Address" value="112 Medical Plaza, Suite 400, Central District" />
              <Detail label="Phone" value="+91 99999 99999" />
              <Detail label="Hours" value="Mon–Sat · 09:00 – 19:00" />
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-2 backdrop-blur-xl">
            <div className="rounded-[20px] bg-surface p-1 text-ink">
              <BookingForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3 last:border-0 last:pb-0">
      <span className="text-xs font-semibold uppercase tracking-wider text-white/50">{label}</span>
      <span className="text-sm font-medium text-white/90">{value}</span>
    </div>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="border-t border-white/5 bg-night py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-brand to-brand-glow">
                <span className="size-2.5 rounded-full bg-white" />
              </span>
              <span className="font-display text-lg font-bold">Smile<span className="text-gradient">Craft</span></span>
            </div>
            <p className="max-w-[32ch] text-sm text-white/55">
              Setting the standard for clinical excellence in aesthetic and restorative dentistry.
            </p>
          </div>
          <div>
            <h4 className="mb-6 text-xs font-semibold uppercase tracking-widest text-white/50">Location</h4>
            <p className="text-sm text-white/80">112 Medical Plaza, Suite 400<br />Central District</p>
            <p className="mt-4 text-sm font-medium text-cyan-glow">+91 99999 99999</p>
          </div>
          <div>
            <h4 className="mb-6 text-xs font-semibold uppercase tracking-widest text-white/50">Hours</h4>
            <p className="text-sm text-white/80">Mon — Fri: 09:00 — 19:00</p>
            <p className="mt-1 text-sm text-white/80">Sat: 09:00 — 17:00</p>
            <p className="mt-1 text-sm italic text-white/45">Sunday: Emergency only</p>
          </div>
        </div>
        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-white/40">© {new Date().getFullYear()} SmileCraft Dental Group.</p>
          <div className="flex gap-6 text-xs font-medium text-white/50">
            <a href="#" className="hover:text-cyan-glow">Privacy</a>
            <a href="#" className="hover:text-cyan-glow">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- WhatsApp FAB ---------- */
function FloatingWhatsApp() {
  const message = "Hi SmileCraft, I'd like to book an appointment.";
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 items-center gap-3 rounded-full bg-[#25D366] px-5 text-sm font-semibold text-white shadow-[0_10px_40px_-10px_rgba(37,211,102,0.7)] ring-1 ring-white/20 transition-transform hover:scale-105 active:scale-95 animate-pulse-ring"
    >
      <span className="relative flex size-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/80 opacity-75" />
        <span className="relative inline-flex size-2.5 rounded-full bg-white" />
      </span>
      WhatsApp Booking
    </a>
  );
}
