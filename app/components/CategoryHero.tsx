type Props = {
  title: string;
  tagline: string;
  description: string;
  accent?: "ember" | "signal" | "gold" | "brand";
};

const accentMap = {
  ember: "from-ember/80 to-amber-200/70",
  signal: "from-signal/80 to-emerald-200/70",
  gold: "from-gold/80 to-amber-100/70",
  brand: "from-brand/80 to-sky-200/70",
};

export default function CategoryHero({
  title,
  tagline,
  description,
  accent = "ember",
}: Props) {
  return (
    <section className="mx-auto grid w-full max-w-6xl gap-8 px-6 pb-12 pt-16 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="space-y-6">
        <p className="text-xs uppercase tracking-[0.4em] text-mist">
          Category
        </p>
        <h1 className="font-display text-5xl uppercase tracking-[0.12em] text-foreground md:text-6xl">
          {title}
        </h1>
        <p className="text-xl text-smoke">{tagline}</p>
        <p className="max-w-xl text-sm leading-7 text-mist">{description}</p>
      </div>
      <div className="glass-card relative overflow-hidden rounded-3xl p-8">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${
            accentMap[accent]
          } opacity-20`}
        />
        <div className="relative z-10 space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-mist">
            Featured Brands
          </p>
          <div className="flex flex-wrap gap-4 text-sm font-semibold text-foreground">
            <span className="rounded-full border border-white/15 px-4 py-2">Samsung</span>
            <span className="rounded-full border border-white/15 px-4 py-2">Huayu</span>
            <span className="rounded-full border border-white/15 px-4 py-2">LG</span>
            <span className="rounded-full border border-white/15 px-4 py-2">Universal</span>
          </div>
          <div className="section-divider" />
          <p className="text-sm text-mist">
            Add or swap brands to match the exact items in this category.
          </p>
        </div>
      </div>
    </section>
  );
}
