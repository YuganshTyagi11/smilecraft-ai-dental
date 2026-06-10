import { createFileRoute } from "@tanstack/react-router";

import heroTooth from "@/assets/hero-tooth.jpg";
import clinicTool from "@/assets/clinic-tool.jpg";
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
      { title: "SmileCraft Dental — Premium Dentistry with AI Assistance" },
      {
        name: "description",
        content:
          "Premium dental care with AI-powered symptom guidance, online booking, transparent pricing, and a calming clinical experience. Book your visit today.",
      },
      { property: "og:title", content: "SmileCraft Dental — Premium Dentistry with AI Assistance" },
      {
        property: "og:description",
        content:
          "Premium dental care with AI-powered symptom guidance, online booking, and transparent pricing.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-surface font-sans text-ink selection:bg-brand/10 selection:text-brand">
      <Nav />
      <Hero />
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

function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-900/5 bg-surface/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2">
          <div className="size-8 rounded-lg bg-brand grid place-items-center">
            <div className="size-3 rounded-full bg-white" />
          </div>
          <span className="font-display text-lg font-semibold tracking-tight">SmileCraft</span>
        </a>
        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          <a href="#treatments" className="transition-colors hover:text-brand">Treatments</a>
          <a href="#gallery" className="transition-colors hover:text-brand">Gallery</a>
          <a href="#dentists" className="transition-colors hover:text-brand">Dentists</a>
          <a href="#pricing" className="transition-colors hover:text-brand">Pricing</a>
          <a
            href="#book"
            className="inline-flex items-center rounded-full bg-brand px-4 py-2 text-sm font-medium text-white transition-transform active:scale-95"
          >
            Book Visit
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_440px] lg:items-center">
          <div className="animate-fade-up flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-brand/10 bg-brand/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
              <span className="size-1.5 rounded-full bg-brand" />
              Now booking · AI-assisted triage
            </div>
            <h1 className="text-balance font-display text-5xl font-semibold leading-tight tracking-tight lg:text-7xl">
              Precision dentistry for the modern patient.
            </h1>
            <p className="mt-6 max-w-[56ch] text-pretty text-lg text-muted-foreground">
              Experience clinical excellence paired with a calming atmosphere. Our advanced
              protocols ensure discomfort is minimized while results are maximized.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#book"
                className="inline-flex items-center rounded-full bg-brand px-6 py-3 text-base font-medium text-white transition-colors hover:bg-brand/90"
              >
                Book Appointment
              </a>
              <a
                href="#ai"
                className="inline-flex items-center rounded-full bg-white px-6 py-3 text-base font-medium text-ink ring-1 ring-zinc-900/10 transition-colors hover:bg-zinc-50"
              >
                Consult AI Assistant
              </a>
            </div>
            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-zinc-900/5 pt-8">
              <Stat value="15+" label="Years experience" />
              <Stat value="12k" label="Smiles crafted" />
              <Stat value="4.9★" label="Patient rating" />
            </dl>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-3xl bg-zinc-100 ring-1 ring-black/5">
              <img
                src={heroTooth}
                alt="3D illustration of a glass-textured pearl-white tooth"
                width={800}
                height={1000}
                className="animate-float h-full w-full object-cover"
              />
            </div>
            <div className="absolute -left-4 bottom-8 hidden rounded-2xl border border-zinc-900/5 bg-white p-4 shadow-xl shadow-black/5 sm:block">
              <div className="flex items-center gap-3">
                <div className="grid size-9 place-items-center rounded-full bg-green-50 text-green-600 text-sm">
                  ✓
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Painless protocol
                  </p>
                  <p className="text-sm font-medium">98% comfort rating</p>
                </div>
              </div>
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
      <dt className="font-display text-3xl font-medium">{value}</dt>
      <dd className="mt-1 text-xs text-muted-foreground">{label}</dd>
    </div>
  );
}

function AIAssistantSection() {
  return (
    <section id="ai" className="bg-zinc-100 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl bg-white p-2 ring-1 ring-black/5">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
                AI Dental Assistant
              </div>
              <h2 className="mt-6 text-balance font-display text-3xl font-medium leading-tight lg:text-4xl">
                Instant guidance for your dental concerns.
              </h2>
              <p className="mt-4 max-w-[48ch] text-pretty text-muted-foreground">
                Describe your symptoms or ask about procedures. Our clinical AI provides
                immediate, plain-language guidance — and helps you decide if it's time to book.
              </p>
              <ul className="mt-8 space-y-3 text-sm">
                {[
                  "Available 24/7, completely free",
                  "Explains causes in patient-friendly language",
                  "Recommends next steps and urgency",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-1 size-4 rounded-full bg-brand/10 grid place-items-center text-[10px] font-bold text-brand">
                      ✓
                    </span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 hidden overflow-hidden rounded-2xl lg:block">
                <img
                  src={clinicTool}
                  alt="Modern dental scanner on a clinic surface"
                  width={800}
                  height={400}
                  loading="lazy"
                  className="h-44 w-full object-cover"
                />
              </div>
            </div>
            <div className="p-4 lg:p-6">
              <AIChat />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const TREATMENTS = [
  {
    n: "01",
    title: "Cosmetic Veneers",
    desc: "Hand-crafted porcelain restorations to perfect your smile's alignment and shade.",
  },
  {
    n: "02",
    title: "Dental Implants",
    desc: "Titanium-based permanent solutions for missing teeth with lifetime durability.",
  },
  {
    n: "03",
    title: "Invisible Aligners",
    desc: "Clear aligner therapy for discreet straightening without the friction of metal.",
  },
  {
    n: "04",
    title: "Root Canal Therapy",
    desc: "Modern, near-painless endodontic care to save your natural tooth structure.",
  },
  {
    n: "05",
    title: "Professional Whitening",
    desc: "Clinic-grade whitening that lifts shade by 6–8 tones in a single session.",
  },
  {
    n: "06",
    title: "Pediatric Dentistry",
    desc: "Gentle, anxiety-free care designed specifically for little smiles.",
  },
];

function Treatments() {
  return (
    <section id="treatments" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 border-b border-zinc-900/5 pb-12 lg:flex-row lg:items-end">
          <div className="space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand">
              Treatments
            </span>
            <h2 className="font-display text-4xl font-medium tracking-tight">
              Comprehensive oral care.
            </h2>
            <p className="max-w-[48ch] text-pretty text-muted-foreground">
              Specialized treatments designed for longevity and aesthetic precision.
            </p>
          </div>
          <a href="#pricing" className="text-sm font-semibold text-brand">
            View price estimator →
          </a>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TREATMENTS.map((t) => (
            <div
              key={t.n}
              className="group relative rounded-2xl bg-white p-8 ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-1 hover:ring-brand/20"
            >
              <div className="mb-6 grid size-10 place-items-center rounded-xl bg-brand/5 text-sm font-semibold text-brand">
                {t.n}
              </div>
              <h3 className="font-display text-xl font-medium">{t.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const CASES = [
  {
    title: "Signature Whitening Package",
    before: beforeWhitening,
    after: afterWhitening,
  },
  {
    title: "18-Month Aligner Treatment",
    before: beforeAligner,
    after: afterAligner,
  },
];

function SmileGallery() {
  return (
    <section id="gallery" className="bg-zinc-900 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-white/60">
            Smile gallery
          </span>
          <h2 className="mt-4 font-display text-4xl font-medium">Proven transformations.</h2>
          <p className="mt-4 text-white/60">
            Real before-and-after results from patients in our care.
          </p>
        </div>
        <div className="mt-16 grid gap-12 sm:grid-cols-2">
          {CASES.map((c) => (
            <figure key={c.title} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <BeforeAfter src={c.before} label="Before" />
                <BeforeAfter src={c.after} label="After" />
              </div>
              <figcaption className="text-center text-sm font-medium text-zinc-400">
                {c.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function BeforeAfter({ src, label }: { src: string; label: string }) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-zinc-800 ring-1 ring-white/5">
      <img
        src={src}
        alt={`${label} treatment`}
        width={768}
        height={512}
        loading="lazy"
        className="aspect-[3/2] w-full object-cover"
      />
      <span className="absolute left-3 top-3 rounded bg-black/60 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider backdrop-blur">
        {label}
      </span>
    </div>
  );
}

const DENTISTS = [
  {
    name: "Dr. Aisha Verma",
    role: "Cosmetic & Restorative Dentist",
    bio: "12 years specializing in veneers, smile design and digital workflows.",
    img: dentist1,
  },
  {
    name: "Dr. Rohan Mehta",
    role: "Endodontist & Implantologist",
    bio: "Microscope-guided root canals and same-day implant procedures.",
    img: dentist2,
  },
  {
    name: "Dr. Priya Iyer",
    role: "Orthodontist",
    bio: "Invisalign Diamond Provider with 800+ aligner cases completed.",
    img: dentist3,
  },
];

function Dentists() {
  return (
    <section id="dentists" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 border-b border-zinc-900/5 pb-12 lg:flex-row lg:items-end">
          <div className="space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand">
              The team
            </span>
            <h2 className="font-display text-4xl font-medium tracking-tight">
              Meet your specialists.
            </h2>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DENTISTS.map((d) => (
            <article
              key={d.name}
              className="overflow-hidden rounded-2xl bg-white ring-1 ring-black/5"
            >
              <div className="aspect-[4/5] overflow-hidden bg-zinc-100">
                <img
                  src={d.img}
                  alt={`Portrait of ${d.name}`}
                  width={640}
                  height={768}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-medium">{d.name}</h3>
                <p className="mt-1 text-sm text-brand">{d.role}</p>
                <p className="mt-3 text-sm text-muted-foreground">{d.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingEstimator() {
  return (
    <section id="pricing" className="bg-zinc-100 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand">
            Transparent pricing
          </span>
          <h2 className="mt-4 font-display text-4xl font-medium tracking-tight">
            Cost estimator.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Get an instant indicative cost for your treatment plan. No hidden fees.
          </p>
        </div>
        <CostEstimator />
      </div>
    </section>
  );
}

function BookingSection() {
  return (
    <section id="book" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand">
              Book a visit
            </span>
            <h2 className="mt-4 font-display text-4xl font-medium tracking-tight">
              Reserve your appointment.
            </h2>
            <p className="mt-4 max-w-[44ch] text-muted-foreground">
              Choose a date, pick a service, and we'll confirm via WhatsApp within minutes.
              First consultation is complimentary.
            </p>
            <div className="mt-8 space-y-4 rounded-2xl border border-zinc-900/5 bg-white p-6">
              <Detail label="Address" value="112 Medical Plaza, Suite 400, Central District" />
              <Detail label="Phone" value="+91 99999 99999" />
              <Detail label="Hours" value="Mon–Sat · 09:00 – 19:00" />
            </div>
          </div>
          <BookingForm />
        </div>
      </div>
    </section>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-zinc-900/5 pb-3 last:border-0 last:pb-0">
      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      <span className="text-sm font-medium">{value}</span>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-zinc-900/5 bg-surface py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="size-6 rounded bg-brand" />
              <span className="font-display font-semibold tracking-tight">SmileCraft</span>
            </div>
            <p className="max-w-[30ch] text-sm text-muted-foreground">
              Setting the standard for clinical excellence in aesthetic and restorative dentistry.
            </p>
          </div>
          <div>
            <h4 className="mb-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Location
            </h4>
            <p className="text-sm">
              112 Medical Plaza, Suite 400
              <br />
              Central District
            </p>
            <p className="mt-4 text-sm font-medium text-brand">+91 99999 99999</p>
          </div>
          <div>
            <h4 className="mb-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Hours
            </h4>
            <p className="text-sm">Mon — Fri: 09:00 — 19:00</p>
            <p className="mt-1 text-sm">Sat: 09:00 — 17:00</p>
            <p className="mt-1 text-sm italic text-muted-foreground">Sunday: Emergency only</p>
          </div>
        </div>
        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-zinc-900/5 pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} SmileCraft Dental Group.
          </p>
          <div className="flex gap-6 text-xs font-medium text-muted-foreground">
            <a href="#" className="hover:text-brand">Privacy Policy</a>
            <a href="#" className="hover:text-brand">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  const message = "Hi SmileCraft, I'd like to book an appointment.";
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 items-center gap-3 rounded-full bg-white px-5 text-sm font-medium text-ink shadow-xl ring-1 ring-black/10 transition-transform hover:scale-105 active:scale-95"
    >
      <span className="relative flex size-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
        <span className="relative inline-flex size-2 rounded-full bg-green-500" />
      </span>
      WhatsApp Booking
    </a>
  );
}
