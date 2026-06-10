import { useMemo, useState } from "react";

type Treatment = {
  id: string;
  name: string;
  min: number;
  max: number;
};

const TREATMENTS: Treatment[] = [
  { id: "cleaning", name: "Routine Cleaning & Polish", min: 1500, max: 3000 },
  { id: "whitening", name: "Professional Whitening", min: 8000, max: 18000 },
  { id: "filling", name: "Composite Filling (per tooth)", min: 1200, max: 3500 },
  { id: "rootcanal", name: "Root Canal Treatment", min: 4500, max: 9000 },
  { id: "implant", name: "Dental Implant (single)", min: 35000, max: 65000 },
  { id: "veneer", name: "Porcelain Veneer (per tooth)", min: 12000, max: 22000 },
  { id: "aligner", name: "Clear Aligners (full course)", min: 120000, max: 280000 },
  { id: "extraction", name: "Tooth Extraction", min: 800, max: 4500 },
];

function formatINR(n: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n);
}

export function CostEstimator() {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const totals = useMemo(() => {
    let min = 0;
    let max = 0;
    for (const t of TREATMENTS) {
      if (selected.has(t.id)) {
        min += t.min;
        max += t.max;
      }
    }
    return { min, max };
  }, [selected]);

  function toggle(id: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <div className="grid gap-2 rounded-[24px] bg-white p-2 ring-1 ring-black/5 lg:grid-cols-[1fr_360px]">
      <div className="p-6 lg:p-10">
        <h3 className="font-display text-2xl font-medium tracking-tight">Select your treatments</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Transparent indicative pricing in INR. Final cost depends on clinical assessment.
        </p>
        <div className="mt-6 grid gap-2 sm:grid-cols-2">
          {TREATMENTS.map((t) => {
            const active = selected.has(t.id);
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => toggle(t.id)}
                className={`flex items-start justify-between gap-3 rounded-xl border px-4 py-3 text-left transition-all ${
                  active
                    ? "border-brand/40 bg-brand/5 ring-1 ring-brand/20"
                    : "border-zinc-900/10 bg-white hover:border-zinc-900/20"
                }`}
              >
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {formatINR(t.min)} – {formatINR(t.max)}
                  </p>
                </div>
                <span
                  className={`mt-1 size-4 shrink-0 rounded-full border-2 transition-colors ${
                    active ? "border-brand bg-brand" : "border-zinc-300"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col justify-between rounded-[20px] bg-zinc-900 p-8 text-white">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-white/60">
            Estimated investment
          </p>
          <div className="mt-6">
            {totals.min === 0 ? (
              <p className="text-2xl font-medium text-white/40">Select to estimate</p>
            ) : (
              <>
                <p className="font-display text-4xl font-medium">
                  {formatINR(totals.min)}
                </p>
                <p className="mt-1 text-sm text-white/60">to {formatINR(totals.max)}</p>
              </>
            )}
          </div>
          <div className="mt-8 space-y-2 text-xs text-white/60">
            <p>· Free consultation included</p>
            <p>· 0% EMI options available</p>
            <p>· All-inclusive transparent quotes</p>
          </div>
        </div>
        <a
          href="#book"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-900 transition-opacity hover:opacity-90"
        >
          Book free consultation
        </a>
      </div>
    </div>
  );
}
