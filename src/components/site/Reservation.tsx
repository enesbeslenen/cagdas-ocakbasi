import { useState, type FormEvent } from "react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/site";

export function Reservation() {
  const [form, setForm] = useState({
    name: "",
    people: "2",
    date: "",
    time: "19:00",
    notes: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const msg = `Merhaba Çağdaş Ocakbaşı, rezervasyon yaptırmak istiyorum. Ad: ${form.name}, Kişi Sayısı: ${form.people}, Tarih: ${form.date}, Saat: ${form.time}. Özel İstek: ${form.notes || "-"}.`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  const set = <K extends keyof typeof form>(k: K, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  return (
    <section id="rezervasyon" className="py-24 md:py-32 bg-cream relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 min-w-0 w-full">
        <div className="text-center mb-12 reveal">
          <span className="text-secondary font-semibold uppercase tracking-[0.25em] text-sm">
            Rezervasyon
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
            Masanız Hazır Olsun
          </h2>
          <p className="text-muted-foreground">
            Aşağıdaki formu doldurun, WhatsApp üzerinden hızlıca onaylayalım.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="reveal bg-card rounded-3xl p-6 md:p-10 border border-border shadow-xl overflow-hidden max-w-full"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 min-w-0">
            <Field label="Ad - Soyad">
              <input
                required
                value={form.name}
                onChange={(e) => set("name", e.target.value)}
                placeholder="Adınız ve soyadınız"
                className="form-input"
              />
            </Field>

            <Field label="Kişi Sayısı">
              <select
                value={form.people}
                onChange={(e) => set("people", e.target.value)}
                className="form-input"
              >
                {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n}>
                    {n} Kişi
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Tarih">
              <input
                type="date"
                required
                value={form.date}
                onChange={(e) => set("date", e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                className="form-input form-input-datetime"
              />
            </Field>

            <Field label="Saat">
              <input
                type="time"
                required
                value={form.time}
                onChange={(e) => set("time", e.target.value)}
                className="form-input form-input-datetime"
              />
            </Field>
          </div>

          <Field label="Özel İstekler" className="mt-5">
            <textarea
              rows={4}
              value={form.notes}
              onChange={(e) => set("notes", e.target.value)}
              placeholder="Doğum günü, alerji, masa tercihi vb."
              className="form-input resize-none"
            />
          </Field>

          <button
            type="submit"
            className="mt-8 w-full inline-flex items-center justify-center gap-2 sm:gap-3 bg-secondary text-secondary-foreground px-4 py-4 rounded-full font-semibold text-base sm:text-lg shadow-fresh hover:scale-[1.02] hover:bg-secondary/90 transition-all text-center leading-tight"
          >
            <MessageCircle className="w-5 h-5 shrink-0" />
            <span>WhatsApp ile Rezervasyon Yap</span>
          </button>
        </form>
      </div>

      <style>{`
        .form-input {
          width: 100%;
          max-width: 100%;
          min-width: 0;
          box-sizing: border-box;
          padding: 0.75rem 1rem;
          background: var(--background);
          border: 1px solid var(--border);
          border-radius: 0.75rem;
          font-size: 1rem;
          color: var(--foreground);
          transition: all 0.2s;
        }
        .form-input-datetime {
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-appearance: none;
          appearance: none;
        }
        .form-input-datetime::-webkit-date-and-time-value {
          text-align: left;
        }
        .form-input:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px color-mix(in oklab, var(--primary) 20%, transparent);
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block min-w-0 w-full ${className}`}>
      <span className="block text-sm font-semibold text-foreground mb-2">{label}</span>
      {children}
    </label>
  );
}
