import heroBg from "@/assets/home/hero-bg.jpg";

const keywords = ["Healthcare", "Robotics", "Embodied Intelligence", "Micro/NanoElectronics"];

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/55 to-background" />

      <div className="relative z-10 px-6 text-center animate-fade-up">
        <h1 className="font-script text-8xl font-normal leading-[1.15] tracking-normal md:text-[10rem] text-foreground drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)]">
          Junyi Zhao
        </h1>
        <p className="mt-6 text-sm md:text-lg tracking-[0.18em] text-gold">
          Postdoctoral Scholar · Stanford University
        </p>

        <div className="mt-12 font-serif text-lg md:text-2xl text-foreground/90">
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
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-gold animate-bounce-soft"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </section>
  );
}
