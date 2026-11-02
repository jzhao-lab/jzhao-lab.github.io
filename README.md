# Zhao Lab website — UW–Madison

## Publishing

GitHub Pages serves the prebuilt Lovable export through `.github/workflows/deploy.yml`. `website-export.zip` contains the new HTML, CSS, JavaScript and export metadata. The 96 unchanged media files are reused from `public/assets`; the workflow checks every file against the original export's SHA256SUMS.txt before publishing. The editable React sources remain available for reference and are not built during deployment.

For future updates, regenerate the static export and update the archive and any changed media together.

## Copyright

© 2026 Junyi Zhao. The website source code, design, and original figures are protected, and this repository is not open source. Publication PDFs remain available for scholarly reading and download under their respective rights and licenses. See [COPYRIGHT.md](COPYRIGHT.md) for details.
