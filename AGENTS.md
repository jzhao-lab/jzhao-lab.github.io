# Project conventions

- Give Home, Research, Publications, Awards, News, Activities, and Join us their own TanStack routes; redirect the previous Profile address to Join us to preserve existing links.
- Keep Join us enquiry content separate from presentation and use shared verified contact details; do not present suggested enquiry materials as confirmed vacancies or hiring requirements.
- Share site navigation and footer through the root layout and reuse academic section components so moving between pages preserves a consistent presentation.
- Store verified academic content separately from presentation so information can be updated without redesigning the page.
- Import hosted publication PDF asset pointers in the academic data source so shared publication links use the same files across pages.
- Keep outreach event descriptions, links, and ordered photo asset pointers together in the activities data module so galleries remain tied to their source events.
- Store upright activity photo dimensions with their asset pointers and use ratio-weighted wrapping rows so galleries fill their width without cropping.
- Map research figure asset pointers by project URL in the research data module so image associations remain stable when projects are reordered.
- Keep research demo collections keyed by project URL alongside figures, using CDN asset pointers and lightweight looping videos to preserve original animations without large repository binaries.
- Derive home research highlights by matching project paper URLs to publication records and shared research media, avoiding duplicated publication facts; retain the original offscreen, hover/focus, explicit-pause and reduced-motion rotation guards.
- Keep the shared type tokens role-based rather than family-based: `--font-serif` is the heading face and `--font-sans` the body face, so new components choose a role and the pairing can be swapped in one place.
- Mount the Home visitor-map script after hydration inside a dedicated DOM container and clear that container on unmount so third-party markup stays outside React ownership.
- Organize assets under page-owned folders (home, join, research, activities, publications); keep shared research media in research and import it from Home rather than duplicating files, preserving hosted pointer contents and URLs when reorganizing.