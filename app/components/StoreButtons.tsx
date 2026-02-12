import type { ReactNode } from "react";

import { storeLinks } from "../lib/catalog";

type Props = {
  title?: string;
  className?: string;
  variant?: "solid" | "ghost";
  children?: ReactNode;
};

const variantStyles = {
  solid:
    "rounded-full border border-ember/30 bg-ember/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground transition hover:border-ember hover:text-ember",
  ghost:
    "rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/80 transition hover:border-signal hover:text-signal",
};

export default function StoreButtons({
  title = "Shop on",
  className = "",
  variant = "solid",
  children,
}: Props) {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-xs uppercase tracking-[0.4em] text-mist">
          {title}
        </span>
        <div className="h-px flex-1 bg-white/10" />
      </div>
      <div className="flex flex-wrap gap-3">
        {storeLinks.map((store) => (
          <a
            key={store.name}
            href={store.url}
            target="_blank"
            rel="noreferrer"
            className={variantStyles[variant]}
          >
            {store.name}
          </a>
        ))}
      </div>
      {children}
    </div>
  );
}
