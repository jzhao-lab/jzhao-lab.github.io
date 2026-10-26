import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Check, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeading } from "@/components/site/PageHeading";
import { joinContent } from "@/data/join";
import { academicHead } from "@/lib/page-head";
import uwMadisonImage from "@/assets/join/uw-madison.webp.asset.json";

export const Route = createFileRoute("/join")({
  head: () => academicHead("Join us", "Connect with Junyi Zhao about research opportunities and collaborations in human-centered soft electronics, wearable healthcare, robotics, and human-computer interactions.", "/join"),
  component: JoinPage,
});

function ContactCard() {
  return <aside aria-label="Research enquiries" className="rounded-2xl border bg-card/40 p-6">
    <h2 className="text-xl font-semibold"></h2>
    <p className="mt-4 font-semibold text-foreground">Junyi Zhao, Ph.D.</p>
    <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground lg:whitespace-nowrap">Assistant Professor<br />Mechanical Engineering &amp; Electrical and Computer Engineering<br />University of Wisconsin&#8211;Madison</p>
    <a href="mailto:junyi.zhao@wisc.edu" className="mt-2 inline-flex items-center gap-2 text-[13px] font-medium text-gold hover:underline"><Mail aria-hidden="true" className="size-3.5 shrink-0" />junyi.zhao@wisc.edu</a>
  </aside>;
}

function JoinPage() {
  return <main className="min-h-screen">
    <PageHeading lab title="Join us" subtitle="Research together. Create connections. Explore new possibilities." aside={<ContactCard />} />
    <div className="mx-auto max-w-5xl px-6 pb-20 pt-10 md:pt-12">

      <figure>
        <img src={uwMadisonImage.url} alt="Aerial view of the University of Wisconsin–Madison campus" className="h-52 w-full rounded-2xl object-cover object-center shadow-lg md:h-72" />
        <figcaption className="mt-2 text-center text-xs text-muted-foreground">University of Wisconsin–Madison campus</figcaption>
      </figure>

      <div className="mt-8 rounded-2xl border border-join-fill/50 bg-join-fill/15 px-6 py-6 md:px-8">
        <p className="text-lg font-semibold leading-relaxed text-foreground">{joinContent.highlight}</p>
        <div className="mt-5 border-t border-join-fill/40 pt-5">
          <div className="grid gap-x-8 gap-y-5 sm:grid-cols-[0.9fr_1.15fr_1.45fr]">
            {joinContent.rankings.map(group => (
              <div key={group.label}>
                <p className="text-[13px] font-semibold text-foreground">{group.label}</p>
                <p className="mt-0.5 text-[11px] text-muted-foreground">{group.note}</p>
                <ul className="mt-2.5 space-y-1.5">
                  {group.items.map(item => (
                    <li key={item.rank + item.name} className="flex items-baseline gap-2 text-[13px] leading-snug text-foreground/80">
                      <span className="shrink-0 font-semibold tabular-nums text-gold">{item.rank}</span>
                      <span>{item.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-4 text-right text-[11px] text-muted-foreground/80">{joinContent.rankingSource}</p>
        </div>
      </div>


      <p className="mt-10 text-lg leading-relaxed text-foreground/80">{joinContent.introduction}</p>
      <p className="mt-6 text-lg leading-relaxed text-foreground/80">
        We welcome applicants from{" "}
        {joinContent.disciplinesList.map((discipline, index) => (
          <span key={discipline}>
            <span className="font-semibold text-foreground">{discipline}</span>
            {index < joinContent.disciplinesList.length - 1 ? ", " : ", and related disciplines."}
          </span>
        ))}
      </p>

      <div className="mt-12 rounded-2xl border bg-card/40 px-6 py-7 md:px-8">
        <h2 className="text-2xl font-semibold">Skills and experiences</h2>
        <p className="mt-2 text-sm text-muted-foreground">We welcome applicants with skills and experiences including, but not limited to:</p>
        <ul className="mt-5 grid gap-x-8 gap-y-3 space-y-3 text-[13px] md:grid-cols-2 md:space-y-0">
          {joinContent.skills.map(skill => <li key={skill} className="flex items-start gap-2.5 leading-relaxed text-foreground/80">
            <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-gold" />
            <span>{skill}</span>
          </li>)}
        </ul>
      </div>

      <div className="mt-14">
        <h2 className="text-2xl font-semibold">Explore opportunities</h2>
        <div className="mt-6 space-y-8">
          {joinContent.opportunities.map(opportunity => (
            <section key={opportunity.title} className="max-w-3xl">
              <h3 className="text-lg font-semibold text-foreground">{opportunity.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/75">{opportunity.description}</p>
              {opportunity.links && <ul className="mt-3 space-y-1.5">
                {opportunity.links.map(link => <li key={link.href}>
                  <Button asChild variant="link" className="h-auto w-full justify-start whitespace-normal p-0 text-left text-sm text-gold">
                    <a href={link.href} target="_blank" rel="noopener noreferrer">{link.label}<ArrowUpRight aria-hidden="true" className="size-3.5 shrink-0" /></a>
                  </Button>
                </li>)}
              </ul>}
            </section>
          ))}
        </div>
      </div>
    </div>
  </main>;
}
