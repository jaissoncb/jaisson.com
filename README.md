# Jaisson — personal landing page

Minimal landing page for **jaisson.com** / **jaisson.com.br**.

## Included

- Jaisson logo on transparent background
- “You found the right Jaisson.”
- subtle entrance animation
- very slow background movement
- subtle pointer-following light effect on desktop
- small click easter egg on the logo
- automatic light and dark appearance based on Stuttgart time
- discreet About and idle easter eggs
- custom 404 page
- responsive mobile/desktop layout
- J favicon for browser tabs
- Apple touch icon + web manifest
- no footer and no year/date to maintain

## Repository and deployment

The site lives at the root of the
[`jaissoncb/jaisson.com`](https://github.com/jaissoncb/jaisson.com) repository.
GitHub Pages publishes the `main` branch from `/ (root)`, using `jaisson.com`
as the custom domain.

To update the site locally:

```sh
git pull --ff-only
# edit and test the files
git add .
git commit -m "Describe the change"
git push origin main
```

Do not place the site inside an additional nested folder: `index.html`,
`CNAME`, `robots.txt`, and `sitemap.xml` must remain in the repository root.

### Two domains

GitHub Pages uses one custom domain per site. The simplest setup is:

- primary: `jaisson.com`
- secondary: `jaisson.com.br` → permanent redirect to `https://jaisson.com`

The included `CNAME` file therefore uses `jaisson.com`.

If you prefer `.com.br` as the primary domain, replace the content of `CNAME`
with `jaisson.com.br` and redirect `.com` to it instead.

## Important for Google Workspace email

When changing DNS at GoDaddy, keep your existing Google Workspace **MX records**.
Only add/change the records needed for the website. Removing the MX records can
stop email delivery.

## Analytics

Google Analytics is included in `index.html` using measurement ID
`G-37DHLEPC72`.
