# Junyi Zhao — academic website (updated source package)

## What is included

Latest website source, with Home, Research, Publications, Awards, News, Activities, and Join us. Photos and other media are organized by their owning page.

- `src/assets/home`, `join`, `research`, `activities`, `publications`: imported asset descriptors and bundled source images.
- `public/assets/home`, `join`, `research`, `activities`, `publications`: actual photos, figures, GIFs, videos, and supplied publication PDFs.
- Asset descriptors in this download use local `/assets/...` URLs, not Lovable storage URLs or the original GitHub website.
- `MEDIA-MANIFEST.json`: file sizes and SHA-256 checksums for the downloaded media.
- Shared research media stays in Research and is reused on Home rather than duplicated.

The live Lovable project is unchanged by this export. External article, social, university, video-platform, and visitor-map links remain external by design.

## Upload to GitHub

Unzip this archive, then upload the **contents of the extracted folder**, not the ZIP. Include the dotfiles such as `.gitignore`. Use Git for large media; GitHub's browser uploader limits each file to 25 MB. Do not upload dependencies or generated build output.

### Existing repository

Clone your repository onto your computer, copy this folder's contents into the clone, and review the changes. Back up the existing website first. These commands do not erase old repository files automatically:

```sh
git status
git add -A
git commit -m "Update academic website and bundled media"
git push
```

Do **not** force-push or replace your current published site's files unless you intend to replace that site.

### New empty repository

Run these commands from inside the extracted website folder, replacing YOUR-REPOSITORY with your empty repository URL:

```sh
git init -b main
git add -A
git commit -m "Academic website with bundled media"
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

## Run locally

Install Bun, then from the extracted folder:

```sh
bun install
bun run dev
```

Open the address printed by Vite. Media is included and served locally. No private API keys are required for this academic website.

Run the included data and asset checks:

```sh
bun test src/data
```

## Hosting: important distinction

**Uploading source to GitHub does not make this website live on GitHub Pages.** This download preserves the existing TanStack Start / Cloudflare-oriented application, not a static HTML export. The current build requires a compatible server-capable host. It is not a replacement to drop into `junyi-zhao.github.io` and expect Pages to run.

```sh
bun run build
```

Before using GitHub Pages, prepare a static build, handle direct visits to every page and the legacy `/profile` redirect, and set the correct repository base path. Local `/assets/...` links assume domain-root hosting (e.g. a personal root domain), not a project path such as `/my-repository/`. No GitHub Pages deployment workflow is included or claimed verified.

Fonts and MapMyVisitors still require internet access. Preserve third-party and publisher rights when sharing media and papers publicly.
