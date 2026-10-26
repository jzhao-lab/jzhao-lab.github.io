import type { ReactNode } from "react";

export function PageHeading({ title, subtitle, aside, lab = false }: { title: string; subtitle: string; aside?: ReactNode; lab?: boolean }) {
  return <header className="mx-auto max-w-5xl border-b border-border px-6 pb-10 pt-36 md:pt-44">
    <div className={aside ? "grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_440px]" : undefined}>
      <div>
        {lab && <p className="mb-4 text-xs uppercase text-gold">ZHAO LAB - UNIVERSITY OF WISCONSIN-MADISION</p>}
        <h1 className="font-serif text-5xl text-foreground md:text-6xl">{title}</h1>
        <p className="mt-4 max-w-2xl font-sans text-xl text-foreground/70">{subtitle === "Research together. Create connections. Explore new possibilities." ? "" : subtitle}</p>
      </div>
      {aside}
    </div>
  </header>;
}
