import CategoryHero from "../components/CategoryHero";
import StoreButtons from "../components/StoreButtons";
import { categories } from "../lib/catalog";

const electricalCategory = categories.find(
  (category) => category.slug === "electrical-products"
);

export default function ElectricalProductsPage() {
  if (!electricalCategory) {
    return null;
  }

  return (
    <div className="pb-20">
      <CategoryHero
        title={electricalCategory.title}
        tagline={electricalCategory.tagline}
        description={electricalCategory.description}
        accent="brand"
      />
      <div className="mx-auto w-full max-w-6xl px-6">
        <StoreButtons className="glass-card rounded-3xl p-6" />
      </div>
      <div className="my-16 section-divider" />
      <section className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Power & Charging",
              description: "Adapters, chargers, and power kits that sell fast.",
            },
            {
              title: "Cable Management",
              description: "Keep workspaces clean with clips and organizers.",
            },
            {
              title: "Lighting",
              description: "Practical lighting solutions for home and work.",
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
