import CategoryHero from "../components/CategoryHero";
import StoreButtons from "../components/StoreButtons";
import { categories } from "../lib/catalog";

const woodCategory = categories.find(
  (category) => category.slug === "wooden-products"
);

export default function WoodenProductsPage() {
  if (!woodCategory) {
    return null;
  }

  return (
    <div className="pb-20">
      <CategoryHero
        title={woodCategory.title}
        tagline={woodCategory.tagline}
        description={woodCategory.description}
        accent="gold"
      />
      <div className="mx-auto w-full max-w-6xl px-6">
        <StoreButtons className="glass-card rounded-3xl p-6" />
      </div>
      <div className="my-16 section-divider" />
      <section className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Kitchen & Dining",
              description: "Boards, trays, and rustic pieces with clean cuts.",
            },
            {
              title: "Home Storage",
              description: "Boxes, organizers, and shelves that feel handmade.",
            },
            {
              title: "Gift Sets",
              description: "Bundle premium wooden products for fast checkout.",
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
