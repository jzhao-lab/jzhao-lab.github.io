# Junyi Zhao / Zhao Lab — GitHub Pages website

Ready-to-publish static website for **https://jzhao-lab.github.io/**.
All seven pages, current styling, photos, research videos, publication PDFs, navigation, and research highlight controls are included. No build step, Lovable account, server, API key, or Node installation is needed to publish this package.

## 1. Use the correct organization repository

In the **jzhao-lab** organization, create or open a public repository named exactly **jzhao-lab.github.io**. The complete repository name must be **jzhao-lab/jzhao-lab.github.io**. A differently named repository would normally publish under an additional path and is not the target for this package.

## 2. Put the files in the repository root

Extract this ZIP. Copy the **contents** of the extracted folder, including hidden `.github` and `.nojekyll`, to your repository root. `index.html`, `assets`, and `.github` must be directly at the top level, not inside another website folder. Keep all filenames and folders unchanged.

The complete package is about 195 MB unpacked. Use GitHub Desktop or your local Git client rather than uploading the ZIP itself or trying to upload all files through the browser. All individual files are below GitHub's 100 MB limit.

### With GitHub Desktop

1. Clone **jzhao-lab/jzhao-lab.github.io**.
2. Copy the extracted website files into that local folder, including hidden files.
3. Commit the changes in GitHub Desktop, then click **Push origin**. Use the **main** branch.

If replacing an older website, remove its old website files first, preserving the local `.git` directory. Do not merge an old Jekyll site with this deployment.

## 3. Enable publishing

In the repository, open **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**. Open **Actions → Publish website to GitHub Pages** to see the publishing result. If you enabled Pages after the initial push, choose **Run workflow** on the `main` branch, or push another update.

After the workflow succeeds, open **https://jzhao-lab.github.io/**. Publishing can take a few minutes. Organization administrators may need to allow GitHub Actions / Pages if those features are disabled by organization policy.

Alternative: choose **Deploy from a branch**, then **main** and **/(root)** in Settings → Pages; all static files are already at the root. Use only one publishing method.

## Pages and files

- `/` — Home
- `/research/` — Research
- `/publications/` — Publications
- `/awards/` — Awards
- `/news/` — News
- `/activities/` — Activities
- `/join/` — Join us
- `/profile/` — redirects to Join us
- `assets/{home,join,research,activities,publications}/` — actual locally hosted media
- `assets/*.js` and `assets/*.css` — browser scripts and styles
- `404.html` — fallback for other addresses
- `.github/workflows/pages.yml` — automatic publishing after pushes to main

Media do not depend on Lovable or the original personal GitHub website. Publication article, university, social profile and photo-credit links remain external. Google Fonts and the MapMyVisitors service still require internet access; MapMyVisitors may require its own domain settings to accept your new address. Neither service requires a secret in this repository.

This is the ready-built **deployment version**, not an editable React source project. It preserves the website as exported; for future content/design changes, regenerate a static package from the editable project rather than editing minified scripts. Search engines discover/index new sites separately from GitHub Pages publishing; indexing is not immediate.

`SHA256SUMS.txt` records checksums for the supplied website files.
