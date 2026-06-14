# RapidRoute-Mobility

This repository now contains a simple static website for your company, built for GitHub Pages.

## Files added

- `index.html` — the main landing page
- `styles.css` — styling for the site

## Deployment with GitHub Pages

1. In your repository, go to **Settings > Pages**.
2. Set the source to the `main` branch and the `/ (root)` folder.
3. Save the settings.
4. Your site will publish at `https://<username>.github.io/<repository-name>/`.

## Custom Domain (GoDaddy)

If you want the site to use your GoDaddy domain:

1. In your repository root, add a file named `CNAME` containing your domain, for example:
   ```
   yourdomain.com
   ```
2. In GoDaddy DNS settings, add these records:
   - `A` record for `@` pointing to GitHub Pages IP: `185.199.108.153`
   - `A` record for `@` pointing to GitHub Pages IP: `185.199.109.153`
   - `A` record for `@` pointing to GitHub Pages IP: `185.199.110.153`
   - `A` record for `@` pointing to GitHub Pages IP: `185.199.111.153`
   - `CNAME` record for `www` pointing to `<username>.github.io`
3. Wait a few minutes for DNS to update.

## Notes

- This site is static, with no database and no backend logic.
- You can customize the text and colors by editing `index.html` and `styles.css`.
