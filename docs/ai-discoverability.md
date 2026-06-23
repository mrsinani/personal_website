# AI discoverability

This site is set up so search engines and AI crawlers can fetch public information (contact details, bio, experience, projects, portfolio, etc.) without logging in or running JavaScript.

## Public endpoints


| URL              | Format     | Purpose                                           |
| ---------------- | ---------- | ------------------------------------------------- |
| `/llms.txt`      | Plain text | Index file — tells bots where to find everything  |
| `/llms-full.txt` | Plain text | **Canonical full dump** of all site content       |
| `/profile.json`  | JSON       | Same data as structured Schema.org `Person` JSON  |
| `/sitemap.xml`   | XML        | Lists all pages + AI endpoints for search engines |
| `/robots.txt`    | Plain text | Allows all crawlers, including AI bots            |


After deploy, verify with:

```bash
curl https://danaidsinani.com/llms.txt
curl https://danaidsinani.com/llms-full.txt
curl https://danaidsinani.com/profile.json
curl -A "GPTBot/1.0" https://danaidsinani.com/llms-full.txt   # test AI user-agent
```

## How bots discover content

```
Bot visits danaidsinani.com
    ↓
Reads robots.txt  →  Allow: /  +  Sitemap URL
    ↓
Finds /llms.txt   (via sitemap, or <link> tags in HTML)
    ↓
Reads: "fetch /llms-full.txt for complete content"
    ↓
Gets full plain-text dump (phone, email, experience, portfolio, etc.)
```

Discovery signals are wired in several places:

- `app/robots.ts` — allows crawlers and points to the sitemap
- `app/sitemap.ts` — lists all pages and AI endpoints
- `app/layout.tsx` — `<link rel="author">` and `<link rel="alternate">` tags in HTML head
- `components/PersonJsonLd.tsx` — Schema.org JSON-LD embedded on every page

## File map

```
lib/site-data.ts          ← single source of truth for profile + AI content builders
lib/portfolio-projects.ts ← portfolio items (auto-included in llms-full.txt)
lib/github-stats.ts       ← live GitHub stats fetched at request time

app/llms.txt/route.ts         → serves buildLlmsTxt()
app/llms-full.txt/route.ts    → serves buildLlmsFullTxt() (dynamic)
app/profile.json/route.ts     → serves buildProfileJson() (dynamic)
app/robots.ts                 → generates /robots.txt
app/sitemap.ts                → generates /sitemap.xml
components/PersonJsonLd.tsx   → JSON-LD in root layout
```

Pages that read from `lib/site-data.ts`:

- `app/contact/page.tsx`
- `app/about/page.tsx`
- `app/projects/page.tsx`

## Making changes

### Update contact info, bio, experience, projects, skills, awards

Edit `profile` in `**lib/site-data.ts**`.

That object drives:

- The About, Contact, and Projects pages
- `/llms.txt`, `/llms-full.txt`, and `/profile.json`
- JSON-LD on every page

After editing, redeploy. No other files need to change for basic profile updates.

**Phone number fields:**

- `phone` — display format, e.g. `(917) 972-4855`
- `phoneTel` — tel link format, e.g. `+19179724855`

### Update portfolio (client work / shipped products)

Edit `**lib/portfolio-projects.ts`**.

- Set `enabled: true` to show a project on `/portfolio` and in AI content
- Set `enabled: false` to hide it
- Use `rank` to control order within a category

Portfolio data is pulled into `llms-full.txt` and `profile.json` automatically via `getEnabledPortfolioProjectsByCategory()`.

### Add a new site page

1. Create the page under `app/your-page/page.tsx`
2. Add it to `sitePages` in `**lib/site-data.ts**`:
  ```ts
   export const sitePages = [
     // ...
     { path: "/your-page", title: "Your Page" },
   ] as const;
  ```
3. Optionally add a line to the `## Pages` section inside `buildLlmsTxt()` in the same file
4. Redeploy — the sitemap picks it up automatically

### Change the site URL

Update `SITE_URL` at the top of `**lib/site-data.ts**`. It propagates to sitemap, robots, llms files, and metadata.

### Allow or block a specific AI crawler

Edit the `aiCrawlers` array in `**app/robots.ts**`.

To block a bot, remove it from the list and add a deny rule:

```ts
{ userAgent: "SomeBot", disallow: "/" }
```

Currently all listed bots are explicitly allowed. The default `User-Agent: *` rule also allows everything.

## What gets included in llms-full.txt

Generated dynamically on each request from:


| Section                      | Source                                           |
| ---------------------------- | ------------------------------------------------ |
| Contact info                 | `profile` in site-data                           |
| Bio, education, skills       | `profile` in site-data                           |
| Experience, awards, projects | `profile` in site-data                           |
| Portfolio                    | `lib/portfolio-projects.ts` (enabled items only) |
| GitHub stats                 | `lib/github-stats.ts` (live API fetch)           |
| Seconds alive                | computed from `profile.birthdate`                |
| Site page list               | `sitePages` in site-data                         |


`/llms-full.txt` and `/profile.json` use `export const dynamic = "force-dynamic"` so GitHub stats stay fresh (cached for 1 hour via `revalidate: 3600`).

## Google Search Console

Submit the sitemap after deploy:

1. [Google Search Console](https://search.google.com/search-console) → add `https://danaidsinani.com`
2. Verify ownership (DNS TXT record is usually easiest)
3. **Sitemaps** → submit `sitemap.xml`

A green "Sitemap processed successfully" with 9 discovered pages means Google found all URLs.

Use **URL Inspection** to check whether a specific page (e.g. `/llms-full.txt`) has been crawled and indexed.

## Important gotchas

### Keep one source of truth

Don't duplicate profile data in page components. If you hardcode content in a page instead of importing from `lib/site-data.ts`, the website and AI endpoints will drift apart.

### Client-only content is invisible to some crawlers

Content loaded only via `useEffect` or hidden behind JS-only conditional rendering won't appear in a simple curl fetch.

- **Stats page** (`/stats`) — GitHub numbers load client-side; the AI endpoints include stats server-side instead
- **About page dropdowns** — experience is always in the HTML (collapsed with CSS), so crawlers can read it

If you add new interactive UI, keep the text in the initial HTML or add it to `lib/site-data.ts`.

### Not every LLM can fetch the web


| Can fetch your site                          | Cannot fetch your site         |
| -------------------------------------------- | ------------------------------ |
| ChatGPT with browsing                        | Plain ChatGPT (no search)      |
| Perplexity, Gemini with search               | Models with no internet access |
| Claude with web search                       |                                |
| Scheduled crawlers (GPTBot, ClaudeBot, etc.) |                                |


Your site is open to anyone who can HTTP-fetch it. Whether a given AI answers from your site depends on that model having web access and choosing to look you up.

### Privacy

Everything in `lib/site-data.ts` and enabled portfolio items is **intentionally public**. Don't put private info there.

## Quick checklist after changes

- [ ] Edit `lib/site-data.ts` (and/or `lib/portfolio-projects.ts`)
- [ ] Run `npm run build` locally to catch type errors
- [ ] Deploy to Vercel
- [ ] Curl `/llms-full.txt` and confirm the change appears
- [ ] Optionally re-submit sitemap in Search Console (usually not needed for content updates)