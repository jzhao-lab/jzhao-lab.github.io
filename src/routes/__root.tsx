import { lazy } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useLocation,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Nav } from "@/components/site/Nav";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Page not found
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back
          home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://jzhao-lab.github.io/#website",
      url: "https://jzhao-lab.github.io/",
      name: "Junyi Zhao",
      alternateName: ["Junyi Zhao Lab", "Zhao Lab"],
    },
    {
      "@type": "ProfilePage",
      "@id": "https://jzhao-lab.github.io/#profile-page",
      url: "https://jzhao-lab.github.io/",
      isPartOf: {
        "@id": "https://jzhao-lab.github.io/#website",
      },
      mainEntity: {
        "@id": "https://jzhao-lab.github.io/#person",
      },
    },
    {
      "@type": "Person",
      "@id": "https://jzhao-lab.github.io/#person",
      name: "Junyi Zhao",
      url: "https://jzhao-lab.github.io/",
      image: "https://jzhao-lab.github.io/assets/home/headshot.jpg",
      jobTitle: [
        "Postdoctoral Scholar at Stanford University",
        "Incoming Tenure-Track Assistant Professor at the University of Wisconsin–Madison, Fall 2027",
      ],
      affiliation: {
        "@type": "Organization",
        name: "Stanford University",
        url: "https://www.stanford.edu/",
      },
      description:
        "Junyi Zhao is a Postdoctoral Scholar at Stanford University working on human-centered soft electronics for healthcare, robotics, embodied intelligence, and micro/nanoelectronics. He will join the University of Wisconsin–Madison in Fall 2027 as a tenure-track Assistant Professor with a joint appointment in Mechanical Engineering and Electrical and Computer Engineering.",
      sameAs: [
        "https://scholar.google.com/citations?hl=en&user=VPZbFAkAAAAJ",
        "https://www.linkedin.com/in/junyi-zhao-997487170/",
        "https://x.com/JunyiZhao1997",
      ],
      knowsAbout: [
        "Human-centered soft electronics",
        "Bioelectronics",
        "Wearable electronics",
        "Digital healthcare",
        "Robotics",
        "Embodied intelligence",
        "Human-computer interaction",
        "Microelectronics",
        "Nanoelectronics",
      ],
    },
  ],
};

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Junyi Zhao — Postdoctoral Scholar, Stanford University" },
      {
        name: "description",
        content:
          "Junyi Zhao is a Postdoctoral Scholar at Stanford University working on human-centered soft electronics for sensing, interaction, and healthcare.",
      },
      { name: "author", content: "Junyi Zhao" },
      { property: "og:site_name", content: "Junyi Zhao" },
      { property: "og:title", content: "Junyi Zhao — Stanford University" },
      {
        property: "og:description",
        content:
          "Human-centered soft electronics: wearables, sensing, and HCI.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Italianno&family=Manrope:wght@300..800&family=Sora:wght@300..800&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: lazy(async () => ({ default: ErrorComponent })),
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useLocation({ select: location => location.pathname });
  const light = pathname !== "/";

  return (
    <QueryClientProvider client={queryClient}>
      <div className={`min-h-screen ${light ? "light-page" : ""}`}>
        <Nav />
        <Outlet />
        <footer className="border-t border-border py-10 text-center text-xs uppercase text-foreground/45">
          © {new Date().getFullYear()} Junyi Zhao. Website design, code, and
          original figures. All rights reserved.
        </footer>
      </div>
    </QueryClientProvider>
  );
}
