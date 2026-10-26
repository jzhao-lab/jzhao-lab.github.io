import { Section } from "@/components/site/Section";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { awards, mediaCoverage, news, projects, publications, socialLinks } from "@/data/profile";
import { researchDemos, researchFigures } from "@/data/research-figures";
import { outreachActivities } from "@/data/activities";
import headshot from "@/assets/home/headshot.jpg.asset.json";
import bioelectronicsIcon from "@/assets/home/bioelectronics.png.asset.json";
import roboticsIcon from "@/assets/home/robotics.png.asset.json";
import embodiedIcon from "@/assets/home/embodied.png.asset.json";
import microIcon from "@/assets/home/micro.png.asset.json";
import { ArrowUpRight, GraduationCap, Mail } from "lucide-react";

import type { ComponentType, CSSProperties } from "react";
import { LinkedInIcon, ScholarIcon, XIcon } from "@/components/site/BrandIcons";

const scholar = "https://scholar.google.com/citations?hl=en&user=VPZbFAkAAAAJ";
const research = [
  { image: bioelectronicsIcon, width: 677, height: 1055, title: "Bioelectronics", body: "Bio-materials, bio-interfaces, and bioelectronic systems for translational healthcare through real-time, multimodal physiological monitoring in everyday and clinical settings." },
  { image: roboticsIcon, width: 1585, height: 1068, title: "Robotics", body: "Electronic skin, bioinspired robots, robotic interfaces, and medical robots." },
  { image: embodiedIcon, width: 856, height: 893, title: "Embodied Intelligence & Interaction", body: "Human–computer interfaces, input devices, and tactile & haptic interfaces." },
  { image: microIcon, width: 1202, height: 983, title: "Micro/Nanoelectronics", body: "Optoelectronics, neurological electronics, advanced materials, and device manufacturing." },
];
type Role = { when: string; title: string; where: string; advisor?: string };
const education: Role[] = [
  { when: "2019 – 2024", title: "Ph.D. in Electrical Engineering", where: "Washington University in St. Louis, USA", advisor: "Prof. Chuan Wang" },
  { when: "2016 – 2019", title: "B.S. in Mechanical Engineering", where: "Huazhong University of Science and Technology, China" },
];
const experience: Role[] = [
  { when: "2025 – present", title: "Postdoctoral Scholar, Chemical Engineering", where: "Stanford University, USA", advisor: "Prof. Zhenan Bao" },
  { when: "2023 – 2024", title: "Research Scientist Intern", where: "Meta Reality Labs, USA" },
  { when: "Jul 2018 – Nov 2018", title: "Visiting Research Assistant, Electrical & Computer Engineering", where: "University of Houston, USA" },
];

function SourceLinks({ links }: { links: { label: string; href: string }[] }) {
  return <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">{links.map((link, i) => (
    <Button key={`${link.href}-${i}`} asChild variant="link" className="h-auto whitespace-normal px-0 py-1 text-gold">
      <a href={link.href} target="_blank" rel="noopener noreferrer">{link.label === "Link" ? "Article" : link.label}<ArrowUpRight aria-hidden="true" /></a>
    </Button>
  ))}</div>;
}

function NewsList({ items }: { items: typeof news }) {
  return <ol className="relative mx-auto max-w-3xl border-l border-border pl-8">{items.map((n, i) => (
    <li key={`${n.date}-${i}`} className="mb-10 last:mb-0">
      <span className="absolute -left-[7px] mt-2 h-3 w-3 rounded-full bg-gold ring-4 ring-background" />
      <p className="text-xs uppercase text-gold">{n.date}</p>
      <p className="mt-2 font-sans text-lg leading-relaxed text-foreground/90">{n.text}</p>
      <SourceLinks links={n.links} />
    </li>
  ))}</ol>;
}

function PublicationList({ category }: { category: string }) {
  return <ol className="divide-y divide-border">{publications.filter(p => p.category === category).map((p, i) => (
    <li key={`${p.title}-${i}`} className="py-7 first:pt-0">
      <h4 className="font-serif text-xl leading-snug text-foreground md:text-2xl">{p.title}</h4>
      <p className="mt-3 text-sm leading-relaxed text-foreground/70">{p.authors}</p>
      <p className="mt-2 font-sans text-lg text-gold">{p.venue}</p>
      <SourceLinks links={p.links} />
    </li>
  ))}</ol>;
}

type SocialKind = (typeof socialLinks)[number]["kind"];

const socialIcons: Record<SocialKind, ComponentType<{ className?: string }>> = {
  email: Mail,
  scholar: ScholarIcon,
  linkedin: LinkedInIcon,
  x: XIcon,
};

function SocialLinksRow() {
  return (
    <ul className="mt-10 flex flex-wrap items-center justify-center gap-3 md:grid md:grid-cols-2 md:gap-3 lg:grid-cols-4">
      {socialLinks.map(({ kind, label, href }) => {
        const Icon = socialIcons[kind];
        const isEmail = href.startsWith("mailto:");
        return (
          <li key={kind} className="md:w-full">
            <a
              href={href}
              target={isEmail ? undefined : "_blank"}
              rel={isEmail ? undefined : "noopener noreferrer"}
              className="inline-flex items-center gap-2.5 rounded-full border border-gold/25 bg-gold/5 px-5 py-2.5 text-sm text-foreground/85 transition-colors duration-200 hover:border-gold hover:bg-gold/10 hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold md:w-full md:justify-center md:px-3 md:text-[13px]"
            >
              <Icon className="size-4 shrink-0 text-gold" />
              <span>{label}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export function AboutSection() {
  return (
      <Section id="about" eyebrow="Hello" title="About Me">
        <div className="mx-auto grid max-w-5xl items-center gap-y-12 md:grid-cols-[minmax(0,340px)_minmax(0,1fr)] md:gap-x-16">
          <figure className="portrait-frame mx-auto w-full max-w-[260px] md:max-w-none">
            <img
              src={headshot.url}
              alt="Portrait of Junyi Zhao"
              width={1234}
              height={1440}
              className="md:aspect-[6/7] md:object-cover md:object-top"
            />
          </figure>
          <div className="flex flex-col">
            <div className="space-y-6 font-sans text-lg leading-relaxed text-foreground/85 md:text-justify md:[text-justify:inter-word]">
              <p>I am <span className="font-medium text-gold">Junyi Zhao</span>, a Postdoctoral Scholar at Stanford University, working with Prof. <a href="https://baogroup.stanford.edu/" target="_blank" rel="noopener noreferrer" className="text-gold underline-offset-4 hover:underline">Zhenan Bao</a>. I received my Ph.D. in Electrical Engineering from Washington University in St. Louis (WashU) and previously worked as a Research Scientist Intern at Meta Reality Labs.</p>
              <p>My research focuses on <em className="text-gold not-italic font-medium">human-centered soft electronics</em> for sensing, perception, and feedback, spanning innovations in materials, devices, advanced manufacturing, system integrations, multimodal data analytics, and translational deployment.</p>
            </div>
            <div className="join-note mt-7 rounded-md px-5 py-3.5">
              <p className="text-lg leading-relaxed text-foreground md:text-justify md:[text-justify:inter-word]">
                I will join the University of Wisconsin–Madison in Fall 2027 as a tenure-track Assistant Professor, with a joint appointment in the Department of Mechanical Engineering (ME) and the Department of Electrical &amp; Computer Engineering (ECE).{" "}
                <Link to="/join" className="ml-1 inline-flex items-center gap-0.5 whitespace-nowrap font-semibold text-gold underline-offset-2 hover:underline">Join us<ArrowUpRight className="size-4" /></Link>
              </p>
            </div>
            <SocialLinksRow />
          </div>
        </div>
      </Section>
  );
}

export function NewsSection() {
  return (
      <Section id="news" alt eyebrow="Selected" title="Recent News">
        <NewsList items={news} />
        <div className="mx-auto mt-10 max-w-3xl border-t border-border pt-6">
          <Button asChild variant="link" className="h-auto px-0 text-gold"><Link to="/news">All news & media coverage<ArrowUpRight /></Link></Button>
        </div>
      </Section>
  );
}

export function AllNewsSection() {
  return <Section id="media-coverage" title="Media Coverage"><NewsList items={mediaCoverage} /></Section>;
}

export function ResearchInterestsSection() {
  return (
      <Section id="research" eyebrow="What I work on" title="Research Interests">
        <div className="grid gap-6 md:grid-cols-2">{research.map(r => (
          <article key={r.title} className="min-w-0 rounded-lg border border-border bg-card/60 p-8">
            <div className="mb-5 flex h-28 items-center">
              <img src={r.image.url} alt="" aria-hidden="true" width={r.width} height={r.height} loading="lazy" decoding="async" className="max-h-28 w-auto object-contain" />
            </div>
            <h3 className="font-serif text-xl leading-tight text-foreground md:whitespace-nowrap">{r.title}</h3>
            <div className="mt-3 h-px w-10 bg-gold" />
            <p className="mt-4 leading-relaxed text-foreground/75">{r.body}</p>
          </article>
        ))}</div>
      </Section>
  );
}

export function ResearchSection() {
  return (
      <Section id="research-projects" eyebrow="Selected work" title="Research Projects">
        <div className="flex flex-col gap-14">{projects.map((project, i) => {
          const figure = researchFigures[project.href];
          const demos = researchDemos[project.href];
          return (
            <article key={project.title} data-research-project className="group overflow-hidden rounded-lg border border-border bg-card/60 transition-colors duration-300 hover:border-gold/50">
              {figure && (
                <div className="flex justify-center p-4 md:p-6">
                  <a href={project.paper} target="_blank" rel="noopener noreferrer" aria-label={`Read the paper: ${project.title}`} className="research-figure-frame block min-w-0 focus-visible:outline-2 focus-visible:outline-gold" style={{ maxWidth: `${Math.round(500 * figure.width / figure.height)}px` }}>
                    <div className="research-figure-paper"><img src={figure.url} alt={`Research figure: ${project.title}`} width={figure.width} height={figure.height} loading="lazy" decoding="async" className="block h-auto w-full" /></div>
                  </a>
                </div>
              )}
              {demos && (
                <div data-research-demos className="grid grid-cols-3 gap-2 border-t border-border p-3 md:gap-4 md:p-5">
                  {demos.map((demo, demoIndex) => <div key={demo.url} className="research-demo-frame min-w-0 overflow-hidden rounded-sm p-1 md:p-2">
                    <video poster={demo.poster} width={demo.width} height={demo.height} autoPlay muted loop playsInline aria-label={`Demo ${demoIndex + 1}: ${project.title}`} ref={el => { if (el) el.muted = true; }} className="block aspect-video h-auto w-full object-contain">
                      {demo.webm && <source src={demo.webm} type="video/webm" />}
                      <source src={demo.url} type="video/mp4" />
                    </video>
                  </div>)}
                </div>
              )}
              <div className="border-t border-border p-6 md:p-8">
                <div className="flex items-baseline gap-5">
                  <p className="shrink-0 font-serif text-sm text-gold">{String(i + 1).padStart(2, "0")}</p>
                  <h4 className="font-serif text-2xl leading-snug text-foreground transition-colors group-hover:text-gold">{project.title}</h4>
                </div>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-foreground/75">{project.body}</p>
                <div className="mt-5 border-t border-border pt-2"><SourceLinks links={[{ label: "Paper", href: project.paper }, ...(project.videos ?? [])]} /></div>
              </div>
            </article>
          );
        })}</div>
      </Section>
  );
}

export function PublicationsSection() {
  return (
      <Section id="publications" alt eyebrow="Papers & Patents" title="Publications">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10"><Button asChild variant="outline" className="border-gold text-gold"><a href={scholar} target="_blank" rel="noopener noreferrer"><GraduationCap />Google Scholar<ArrowUpRight /></a></Button></div>
          <h3 className="mb-8 font-serif text-2xl text-gold">First-author publications</h3>
          <PublicationList category="First-author publications" />
          <details className="mt-8 border-t border-border pt-6">
            <summary className="cursor-pointer font-serif text-2xl text-gold">Co-author publications</summary>
            <div className="mt-8"><PublicationList category="Co-author publications" /></div>
          </details>
          <details className="mt-8 border-t border-border pt-6">
            <summary className="cursor-pointer font-serif text-2xl text-gold">Patents</summary>
            <div className="mt-8"><PublicationList category="Patents" /></div>
          </details>
        </div>
      </Section>
  );
}

export function AwardsSection() {
  return (
      <Section id="awards" eyebrow="Recognition" title="Honors & Awards">
        <ol className="mx-auto max-w-3xl divide-y divide-border">{awards.map((award, i) => (
          <li key={`${award.year}-${i}`} className="grid gap-3 py-6 sm:grid-cols-[5rem_1fr]">
            <p className="text-sm text-gold">{award.year}</p>
            <div><p className="font-sans text-lg leading-relaxed text-foreground/85">{award.text}</p><SourceLinks links={award.links} /></div>
          </li>
        ))}</ol>
      </Section>
  );
}

export function ResumeSection({ alt = true }: { alt?: boolean } = {}) {
  return (
      <Section id="resume" alt={alt} eyebrow="Academic Journey" title="Education & Experience">
        <div className="grid gap-14 md:grid-cols-2">{[{ title: "Education", items: education }, { title: "Experience", items: experience }].map(group => (
          <div key={group.title}>
            <h3 className="mb-6 font-serif text-2xl text-gold">{group.title}</h3>
            <div className="space-y-6">{group.items.map(e => (
              <div key={e.title} className="border-l-2 border-gold/60 pl-5">
                <p className="text-xs uppercase text-foreground/60">{e.when}</p>
                <p className="mt-1 font-serif text-xl text-foreground">{e.title}</p>
                <p className="text-foreground/70">{e.where}</p>
                {e.advisor && <p className="text-foreground/70">Advisor: {e.advisor}</p>}
              </div>
            ))}</div>
          </div>
        ))}</div>
      </Section>
  );
}

export function ActivitiesSection() {
  return (
      <Section id="activities" title="Outreach">
        <div className="mx-auto max-w-4xl space-y-20">
          {outreachActivities.map(activity => (
            <article key={activity.id} className="border-b border-border pb-16 last:border-b-0 last:pb-0">
              <p className="text-sm text-gold">{activity.date}</p>
              <h3 className="mt-3 font-serif text-2xl leading-snug md:text-3xl">{activity.title}</h3>
              <div className="mt-5 max-w-3xl space-y-4 leading-relaxed text-foreground/75">
                {activity.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph.map((part, partIndex) => part.href
                    ? <a key={partIndex} href={part.href} target="_blank" rel="noopener noreferrer" className="text-gold underline underline-offset-4">{part.text}</a>
                    : <span key={partIndex}>{part.text}</span>)}</p>
                ))}
              </div>
              <SourceLinks links={activity.links} />
              <div className="activity-gallery mt-8" aria-label={`${activity.title} photo gallery`}>
                {activity.photos.map((photo, index) => (
                  <figure key={photo.url} className="activity-photo min-w-0 overflow-hidden rounded-md bg-card ring-1 ring-border" style={{ "--photo-ratio": photo.width / photo.height, flexGrow: photo.width / photo.height } as CSSProperties}>
                    <img src={photo.url} alt={`${activity.title}, ${activity.date} — activity photo ${index + 1}`} width={photo.width} height={photo.height} loading="lazy" decoding="async" className="block h-auto w-full" />
                  </figure>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>
  );
}

export function ProfilesSection({ alt = true }: { alt?: boolean } = {}) {
  return (
      <Section id="contact" alt={alt} eyebrow="Stanford University" title="Academic Profiles">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-serif text-xl text-foreground/85">Junyi Zhao · Postdoctoral Scholar</p>
          <p className="mt-3 text-foreground/70">Chemical Engineering · Stanford University</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild variant="outline" className="border-gold text-gold"><a href={scholar} target="_blank" rel="noopener noreferrer"><GraduationCap />Google Scholar<ArrowUpRight /></a></Button>
            <Button asChild variant="outline" className="border-gold text-gold"><a href="https://baogroup.stanford.edu/" target="_blank" rel="noopener noreferrer">Bao Research Group<ArrowUpRight /></a></Button>
          </div>
        </div>
      </Section>
  );
}

