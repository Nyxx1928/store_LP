import CategoryHero from "../components/CategoryHero";
import StoreButtons from "../components/StoreButtons";
import { categories } from "../lib/catalog";

const toolsCategory = categories.find(
  (category) => category.slug === "everyday-tools"
);

export default function EverydayToolsPage() {
  if (!toolsCategory) {
    return null;
  }

  return (
    <div className="pb-20">
      <CategoryHero
        title={toolsCategory.title}
        tagline={toolsCategory.tagline}
        description={toolsCategory.description}
        accent="signal"
      />
      <div className="mx-auto w-full max-w-6xl px-6">
        <StoreButtons className="glass-card rounded-3xl p-6" />
      </div>
      <div className="my-16 section-divider" />
      <section className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Home Essentials",
              description: "Must-have tools for quick fixes and upgrades.",
            },
            {
              title: "Smart Gadgets",
              description: "Compact helpers that save time and effort daily.",
            },
            {
              title: "Bundles",
              description: "Group high-demand tools for faster conversion.",
            },
          ].map((item) => (
            <div key={item.title} className="glass-card rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-mist">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
