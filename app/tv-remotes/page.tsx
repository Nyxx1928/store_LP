import CategoryHero from "../components/CategoryHero";
import StoreButtons from "../components/StoreButtons";
import { categories } from "../lib/catalog";
import RemoteShowcase from "./RemoteShowcase";

const modelUrl = "/models/remote.glb";

const tvCategory = categories.find((category) => category.slug === "tv-remotes");

export default function TvRemotesPage() {
  if (!tvCategory) {
    return null;
  }

  return (
    <div className="pb-20">
      <CategoryHero
        title={tvCategory.title}
        tagline={tvCategory.tagline}
        description={tvCategory.description}
        accent="ember"
      />
      <div className="mx-auto w-full max-w-6xl px-6">
        <StoreButtons className="glass-card rounded-3xl p-6" />
      </div>
      <div className="my-16 section-divider" />
      <RemoteShowcase modelUrl={modelUrl} />
      <section className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Universal Coverage",
              description:
                "Stock replacements for Samsung, LG, TCL, and other popular lines.",
            },
            {
              title: "Fast Pairing",
              description:
                "Make setup simple with quick pairing guides and clear labeling.",
            },
            {
              title: "Premium Feel",
              description:
                "Highlight the tactile design and durable materials customers expect.",
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
