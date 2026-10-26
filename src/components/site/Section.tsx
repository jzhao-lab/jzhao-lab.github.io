import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children,
  alt = false,
  dense = false,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
  alt?: boolean;
  dense?: boolean;
}) {
  return (
    <section
      id={id}
      className={`relative px-6 ${dense ? "py-12" : "py-28"} ${alt ? "bg-card/40" : "bg-background"}`}
    >
      <div className="mx-auto max-w-5xl">
        <div className={`text-center ${dense ? "mb-6" : "mb-16"}`}>
          {eyebrow && (
            <p className="mb-3 text-[0.7rem] uppercase tracking-[0.4em] text-gold">{eyebrow}</p>
          )}
          <h2 className={`section-title font-serif text-foreground ${dense ? "text-xl md:text-2xl" : "text-4xl md:text-5xl"}`}>{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}
