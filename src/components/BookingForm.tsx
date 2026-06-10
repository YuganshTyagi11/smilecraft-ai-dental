import { useState } from "react";

const SERVICES = [
  "General Checkup",
  "Cleaning & Whitening",
  "Cavity / Filling",
  "Root Canal",
  "Implants",
  "Braces / Aligners",
  "Cosmetic Consultation",
];

const WHATSAPP_NUMBER = "919999999999"; // placeholder

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: SERVICES[0],
    date: "",
    time: "10:00",
    notes: "",
  });

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  function whatsappLink() {
    const message = `Hi SmileCraft, I'd like to book an appointment.
Name: ${form.name || "-"}
Phone: ${form.phone || "-"}
Service: ${form.service}
Date: ${form.date || "-"}
Time: ${form.time}
Notes: ${form.notes || "-"}`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-zinc-900/5 bg-white p-10 text-center">
        <div className="mx-auto mb-4 grid size-12 place-items-center rounded-full bg-green-50 text-green-600">
          ✓
        </div>
        <h3 className="font-display text-2xl font-medium">Appointment requested</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Our team will confirm via WhatsApp within 15 minutes during clinic hours.
        </p>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-medium text-white"
        >
          <span className="size-2 rounded-full bg-white" />
          Confirm on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 rounded-2xl border border-zinc-900/5 bg-white p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name">
          <input
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className="input"
            placeholder="Aarav Sharma"
          />
        </Field>
        <Field label="Phone">
          <input
            required
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className="input"
            placeholder="+91 ..."
          />
        </Field>
      </div>

      <Field label="Service">
        <select
          value={form.service}
          onChange={(e) => update("service", e.target.value)}
          className="input"
        >
          {SERVICES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </Field>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Preferred date">
          <input
            required
            type="date"
            value={form.date}
            onChange={(e) => update("date", e.target.value)}
            className="input"
          />
        </Field>
        <Field label="Preferred time">
          <select
            value={form.time}
            onChange={(e) => update("time", e.target.value)}
            className="input"
          >
            {["09:00", "10:00", "11:00", "12:00", "15:00", "16:00", "17:00", "18:00"].map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Notes (optional)">
        <textarea
          rows={3}
          value={form.notes}
          onChange={(e) => update("notes", e.target.value)}
          className="input resize-none"
          placeholder="Any specific concerns…"
        />
      </Field>

      <div className="flex flex-col gap-3 pt-2 sm:flex-row">
        <button
          type="submit"
          className="flex-1 rounded-full bg-brand px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Request appointment
        </button>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-zinc-900/10 bg-white px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-zinc-50"
        >
          <span className="size-2 rounded-full bg-green-500" />
          Book via WhatsApp
        </a>
      </div>

      <style>{`
        .input {
          width: 100%;
          border-radius: 12px;
          border: 1px solid rgb(0 0 0 / 0.08);
          background: var(--color-surface);
          padding: 10px 14px;
          font-size: 14px;
          color: var(--color-ink);
          outline: none;
          transition: border-color 0.15s;
        }
        .input:focus { border-color: rgb(29 78 216 / 0.4); }
      `}</style>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}
