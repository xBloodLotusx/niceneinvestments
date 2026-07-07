import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

function Mark() {
  return (
    <div className="relative h-10 w-10 shrink-0">
      <div className="absolute inset-0 border border-gold" />
      <div className="absolute inset-1.5 bg-primary flex items-center justify-center">
        <span className="font-display text-ivory text-base tracking-tight leading-none">NI</span>
      </div>
    </div>
  );
}

export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="container-x flex items-center justify-between py-6">
          <Link to="/" className="flex items-center gap-3 text-charcoal">
            <Mark />
            <div className="leading-tight">
              <div className="font-display text-xl tracking-wide text-charcoal">Nicene</div>
              <div className="eyebrow text-[0.6rem]">Investments</div>
            </div>
          </Link>
          <Link
            to="/"
            className="text-sm font-medium text-charcoal/70 hover:text-primary transition-colors"
          >
            ← Back to home
          </Link>
        </div>
      </header>

      <main className="container-x py-16 md:py-24 max-w-3xl">
        <p className="eyebrow">
          <span className="gold-rule" />
          Legal
        </p>
        <h1 className="mt-5 text-4xl md:text-5xl text-charcoal">{title}</h1>
        <p className="mt-4 text-sm text-charcoal/50">Last updated: {updated}</p>
        <div className="mt-12 space-y-8 text-charcoal/80 leading-relaxed [&_h2]:font-display [&_h2]:text-2xl [&_h2]:text-charcoal [&_h2]:mt-10 [&_h2]:mb-3 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:mb-4">
          {children}
        </div>
      </main>

      <footer className="bg-charcoal text-ivory/70 border-t border-ivory/10">
        <div className="container-x py-8 flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-xs text-ivory/50">
          <div>© {new Date().getFullYear()} Nicene Investments. All rights reserved.</div>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-gold">
              Home
            </Link>
            <Link to="/privacy" className="hover:text-gold">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-gold">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
