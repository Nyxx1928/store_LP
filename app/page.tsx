import Link from "next/link";

import StoreButtons from "./components/StoreButtons";
import { categories } from "./lib/catalog";

export default function Home() {
  return (
    <div className="pb-20">
      <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 pb-16 pt-20 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-mist">
            Multi-store commerce hub
          </p>
          <h1 className="font-display text-5xl uppercase tracking-[0.14em] text-foreground md:text-6xl">
            Showcase. Categorize. Redirect.
          </h1>
          <p className="text-lg text-smoke">
            A single destination for TV remotes, wooden products, everyday
            tools, and electrical essentials.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/tv-remotes"
              className="rounded-full border border-ember/40 bg-ember/15 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-foreground transition hover:border-ember hover:text-ember"
            >
              Explore TV Remotes
            </Link>
            <Link
              href="/wooden-products"
              className="rounded-full border border-white/15 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/80 transition hover:border-signal hover:text-signal"
            >
              View All Categories
            </Link>
          </div>
        </div>
        <div className="glass-card relative overflow-hidden rounded-3xl p-8">
          <div className="accent-bar absolute left-0 top-0 h-1 w-full" />
          <p className="text-xs uppercase tracking-[0.4em] text-mist">
            Brand ready
          </p>
          <h2 className="mt-4 font-display text-4xl uppercase tracking-[0.12em] text-foreground">
            Samsung. Huayu. LG.
          </h2>
          <p className="mt-4 text-sm leading-7 text-mist">
            Spotlight the brands you already carry while giving customers an
            instant path to their favorite marketplace.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-smoke">
            <span className="rounded-full border border-white/10 px-3 py-2">
              Shopee
            </span>
            <span className="rounded-full border border-white/10 px-3 py-2">
              Lazada
            </span>
            <span className="rounded-full border border-white/10 px-3 py-2">
              TikTok Shop
            </span>
            <span className="rounded-full border border-white/10 px-3 py-2">
              FB Marketplace
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((category) => (
            <div key={category.slug} className="glass-card rounded-3xl p-6">
              <p className="text-xs uppercase tracking-[0.4em] text-mist">
                {category.title}
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-foreground">
                {category.tagline}
              </h3>
              <p className="mt-3 text-sm text-mist">{category.description}</p>
              <Link
                href={`/${category.slug}`}
                className="mt-6 inline-flex rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground transition hover:border-ember hover:text-ember"
              >
                View {category.title}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <div className="my-16 section-divider" />

      <section className="mx-auto w-full max-w-6xl px-6">
        <StoreButtons
          className="glass-card rounded-3xl p-6"
          title="Send customers to"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-mist">
            Update URLs in app/lib/catalog.ts
          </p>
        </StoreButtons>
      </section>
    </div>
  );
}
