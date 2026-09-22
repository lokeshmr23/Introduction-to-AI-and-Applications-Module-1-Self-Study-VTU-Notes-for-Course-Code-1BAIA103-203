# Host VTUHub for free (no card, no Render Blueprint)

The popup you saw is because **Render Blueprint** (`render.yaml`) now asks for a credit card, even if you only want a tiny site. **Do not use Blueprint.** This app is a static website (HTML/CSS/JS). Host it on **GitHub Pages — completely free**.

## Recommended: GitHub Pages (no payment)

Your repo is already `lokeshmr23/VTUHub-1BAIA103`.

1. Push this updated project (include the `docs/` folder).
2. On GitHub: **Settings → Pages**.
3. **Source:** Deploy from a branch.
4. **Branch:** `main` · **folder:** `/docs`.
5. Save. After 1–2 minutes the site is:

   `https://lokeshmr23.github.io/VTUHub-1BAIA103/`

No credit card. Custom domain optional later.

If Pages is greyed out, enable it on a **public** repository (GitHub Free).

## Other free options (also no Blueprint)

| Host | Cost | How |
|------|------|-----|
| **GitHub Pages** | Free | Settings → Pages → `/docs` |
| **Cloudflare Pages** | Free | dash.cloudflare.com → Pages → connect repo → output folder `docs` |
| **Netlify** | Free | app.netlify.com → Import project → publish folder `docs` (card sometimes asked later, basic sites often work without) |
| **Surge.sh** | Free | `npx surge docs` |

Avoid: Render Blueprint, Railway paid, Fly paid machines.

## If you still want Render without Blueprint

1. Close the Blueprint / payment window (**Cancel**).
2. Dashboard → **New +** → **Static Site** (not Blueprint, not Web Service).
3. Connect `lokeshmr23/VTUHub-1BAIA103`.
4. **Publish directory:** `docs`
5. If Render still demands a card for Static Sites, use GitHub Pages instead.

Do **not** open `dashboard.render.com/blueprint/new`.

## Local check

Open `docs/index.html` in a browser, or:

```bash
python -m http.server 8080 --directory docs
```
