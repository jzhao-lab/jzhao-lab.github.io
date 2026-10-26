import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Home" },
  { to: "/research", label: "Research" },
  { to: "/publications", label: "Publications" },
  { to: "/awards", label: "Awards" },
  { to: "/news", label: "News" },
  { to: "/activities", label: "Activities" },
  { to: "/join", label: "Join us" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = useLocation({ select: location => location.pathname });
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${scrolled || pathname !== "/" ? "border-border bg-background/95 py-3 backdrop-blur-md" : "border-transparent py-6"}`}>
    <nav aria-label="Main navigation" className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-3 gap-y-0 px-3 sm:gap-x-6 sm:px-6">
      {links.map(link => <Button key={link.to} asChild variant={link.to === "/join" ? "join" : "ghost"} className={link.to === "/join" ? "h-9 rounded-md px-4 text-sm" : "h-9 rounded-none px-1 text-sm tracking-wide hover:bg-transparent hover:text-gold sm:px-2"}>
        <Link to={link.to} activeOptions={{ exact: true }} activeProps={{ className: link.to === "/join" ? "ring-2 ring-join-fill/40 ring-offset-2 ring-offset-background" : "text-gold border-b border-gold" }} inactiveProps={{ className: link.to === "/join" ? "" : "text-foreground/80" }}>{link.label}</Link>
      </Button>)}
    </nav>
  </header>;
}
