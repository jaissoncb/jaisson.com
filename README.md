# Jaisson — personal landing page

Minimal landing page for **jaisson.com** / **jaisson.com.br**.

## Included

- Jaisson logo on transparent background
- “You found the right Jaisson.”
- subtle entrance animation
- very slow background movement
- subtle pointer-following light effect on desktop
- small click easter egg on the logo
- responsive mobile/desktop layout
- J favicon for browser tabs
- Apple touch icon + web manifest
- no footer and no year/date to maintain

## GitHub Pages

1. Create a public GitHub repository.
2. Upload the contents of this folder to the repository root.
3. In GitHub: **Settings → Pages**.
4. Choose **Deploy from a branch**.
5. Select `main` and `/ (root)`.
6. Under **Custom domain**, use the domain you want as primary.

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

No analytics tracking code is included yet. It can be added later once the
Google Analytics Measurement ID is available.
