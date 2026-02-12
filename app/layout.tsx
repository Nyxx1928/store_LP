import type { Metadata } from "next";
import Link from "next/link";
import { Bebas_Neue, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-body-font",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-display-font",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "LP Storefront",
  description: "Browse categories and jump to your preferred marketplace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${bebasNeue.variable} antialiased`}>
        <div className="page-shell">
          <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/70 backdrop-blur">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
              <Link href="/" className="text-2xl uppercase tracking-[0.2em] text-smoke">
                <span className="font-display text-3xl text-foreground">LP</span>
                <span className="ml-2 font-semibold">Storefront</span>
              </Link>
              <nav className="hidden items-center gap-6 text-sm font-medium text-smoke md:flex">
                <Link href="/tv-remotes" className="transition hover:text-foreground">
                  TV Remotes
                </Link>
                <Link href="/wooden-products" className="transition hover:text-foreground">
                  Wooden Products
                </Link>
                <Link href="/everyday-tools" className="transition hover:text-foreground">
                  Everyday Tools
                </Link>
                <Link href="/electrical-products" className="transition hover:text-foreground">
                  Electrical
                </Link>
              </nav>
              <Link
                href="/tv-remotes"
                className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground transition hover:border-ember hover:text-ember"
              >
                Featured
              </Link>
            </div>
          </header>
          <main className="relative z-10">{children}</main>
          <footer className="relative z-10 border-t border-white/10">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-mist md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-display text-xl uppercase tracking-[0.25em] text-foreground">
                  Multistore Ready
                </p>
                <p className="mt-2 max-w-md text-xs uppercase tracking-[0.2em]">
                  Direct customers to Shopee, Lazada, TikTok Shop, or FB Marketplace.
                </p>
              </div>
              <p className="text-xs uppercase tracking-[0.25em] text-mist">
                Update links in app/lib/catalog.ts
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
