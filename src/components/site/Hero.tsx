import heroBg from "@/assets/home/stanford-quad-sunset.jpg.asset.json";

const keywords = ["Healthcare", "Robotics", "Embodied Intelligence", "Micro/NanoElectronics"];

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <img
        src={heroBg.url}
        alt=""
        width={1920}
        height={1344}
        className="absolute inset-0 h-full w-full object-cover object-[center_22%]"
      />
      <div className="absolute inset-0 bg-background/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/55 via-background/30 to-background" />

      <div className="absolute inset-0 z-10 flex translate-y-14 flex-col items-center justify-center px-6 pt-20 text-center animate-fade-up md:translate-y-32 md:pt-0 lg:translate-y-40 [@media(min-width:1536px)_and_(min-height:1000px)]:translate-y-[280px]">
        <h1 className="font-script text-6xl font-normal leading-[1.15] tracking-normal md:text-[10rem] text-foreground drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)]">
          Junyi Zhao
        </h1>
        <p className="mt-2 text-xs md:mt-6 md:text-lg tracking-[0.18em] text-gold">
          Postdoctoral Scholar · Stanford University
        </p>

        <div className="mt-4 font-serif text-sm md:mt-12 md:text-2xl text-foreground/90">
          {keywords.map((k, i) => (
            <span key={k}>
              {k}
              {i < keywords.length - 1 && <span className="mx-3 text-gold">•</span>}
            </span>
          ))}
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-10 left-1/2 z-10 hidden -translate-x-1/2 text-gold animate-bounce-soft md:block"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </section>
  );
}
