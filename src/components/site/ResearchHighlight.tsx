import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Circle, Pause, Play } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/site/Section";
import { nextHighlight, researchHighlights } from "@/data/research-highlights";

export function ResearchHighlight() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  const active = researchHighlights[index];

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(motion.matches);
    update();
    motion.addEventListener("change", update);
    const element = container.current;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry?.isIntersecting ?? false), { threshold: 0.15 });
    if (element) observer.observe(element);
    return () => { motion.removeEventListener("change", update); observer.disconnect(); };
  }, []);

  useEffect(() => {
    if (paused || interacting || !visible || reducedMotion) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setIndex(current => nextHighlight(current, 1, researchHighlights.length));
    }, 5000);
    return () => window.clearInterval(timer);
  }, [paused, interacting, visible, reducedMotion, index]);

  if (!active) return null;
  const stop = paused || reducedMotion;
  return <Section id="research-highlight" title="Research Highlight">
    <div ref={container} role="region" aria-roledescription="carousel" aria-label="Research highlights"
      onMouseEnter={() => setInteracting(true)} onMouseLeave={() => setInteracting(false)}
      onFocusCapture={() => setInteracting(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setInteracting(false); }}>
      <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
        <Button asChild variant="link" className="h-auto px-0 text-gold"><Link to="/research">All research<ArrowUpRight /></Link></Button>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="icon" title={stop ? "Play slideshow" : "Pause slideshow"} aria-label={stop ? "Play slideshow" : "Pause slideshow"}
            onClick={() => { setPaused(!stop); if (reducedMotion) setReducedMotion(false); }}>{stop ? <Play /> : <Pause />}</Button>
          <Button variant="outline" size="icon" title="Previous research" aria-label="Previous research" onClick={() => setIndex(current => nextHighlight(current, -1, researchHighlights.length))}><ArrowLeft /></Button>
          <span className="w-12 text-center text-sm tabular-nums text-foreground/70">{index + 1} / {researchHighlights.length}</span>
          <Button variant="outline" size="icon" title="Next research" aria-label="Next research" onClick={() => setIndex(current => nextHighlight(current, 1, researchHighlights.length))}><ArrowRight /></Button>
        </div>
      </div>
      <article key={active.href} aria-roledescription="slide" aria-label={`${index + 1} of ${researchHighlights.length}`} className="highlight-slide grid items-center gap-8 lg:min-h-[560px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-10">
        <div className="min-w-0">
          {active.href !== "https://junyi-zhao.github.io/research/touchpadanywear/" && <a href={active.paper} target="_blank" rel="noopener noreferrer" aria-label={`Read paper: ${active.publication.title}`} className="research-figure-frame block">
            <div className="research-figure-paper"><img src={active.figure.url} alt={`Research figure: ${active.title}`} width={active.figure.width} height={active.figure.height} className="h-[280px] w-full object-contain sm:h-[360px] lg:h-[320px]" /></div>
          </a>}
          {active.demos.length > 0 && <div className="mt-3 grid grid-cols-2 gap-2">{active.demos.map((demo, i) => <video key={demo.url} autoPlay={!reducedMotion} muted loop playsInline poster={demo.poster} aria-label={`TouchpadAnyWear demo ${i + 1}`} className="research-demo-frame aspect-video w-full rounded-sm object-contain">
            {demo.webm && <source src={demo.webm} type="video/webm" />}<source src={demo.url} type="video/mp4" />
          </video>)}</div>}
        </div>
        <div className="min-w-0 py-3">
          <p className="font-semibold leading-relaxed text-gold">{active.publication.venue}</p>
          <h3 className="mt-5 font-serif text-2xl font-bold leading-snug sm:text-3xl">{active.publication.title}</h3>
          <p className="mt-6 text-sm leading-7 text-foreground/70">{active.publication.authors.split(/(J\. Zhao)/g).map((part, i) => part === "J. Zhao" ? <strong key={i} className="font-semibold text-foreground">{part}</strong> : part)}</p>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">{active.publication.links.map((link, i) => <Button key={`${link.href}-${i}`} asChild variant="link" className="h-auto whitespace-normal px-0 py-1 text-left text-gold"><a href={link.href} target="_blank" rel="noopener noreferrer">{link.label === "Link" ? "Paper" : link.label}<ArrowUpRight /></a></Button>)}</div>
        </div>
      </article>
      <div className="mt-7 flex flex-wrap justify-center gap-1" aria-label="Choose research">{researchHighlights.map((highlight, i) => <Button key={highlight.href} variant="ghost" size="icon" aria-label={`Show research ${i + 1}`} aria-pressed={i === index} title={highlight.title} className={i === index ? "text-gold" : "text-foreground/35"} onClick={() => setIndex(i)}><Circle className={i === index ? "size-2.5 fill-current" : "size-2.5"} /></Button>)}</div>
    </div>
  </Section>;
}