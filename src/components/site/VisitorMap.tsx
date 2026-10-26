import { useEffect, useRef, useState } from "react";
import { Section } from "@/components/site/Section";

export function VisitorMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.id = "mapmyvisitors";
    script.src = "https://mapmyvisitors.com/map.js?d=kqdQKd4ZncTxB9_0GbTQ7DEc4sSC7r-xwwRqfvsaLU0&cl=ffffff&w=a";
    script.async = true;
    script.onerror = () => setFailed(true);
    container.appendChild(script);

    return () => {
      script.onerror = null;
      container.replaceChildren();
    };
  }, []);

  return (
    <Section id="visitors" title="Visitors" dense>
      <div ref={containerRef} className="mx-auto flex w-full max-w-[160px] justify-center min-h-28" aria-label="Visitor map" />
      {failed && <p role="status" className="text-center text-muted-foreground">The visitor map is currently unavailable.</p>}
    </Section>
  );
}