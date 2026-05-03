# AGENTS.md — R:. L:. S:. Hipatia de Alejandría Nº57

## Project

- Single-page static site in one file: `Hipatia.html`
- No build step, no dependencies, no package manager. Open the HTML file directly in a browser to preview.
- Spanish-language site for a Masonic lodge based in Ambato, Ecuador.

## Stack

- Tailwind CSS v3 via CDN (`cdn.tailwindcss.com`) — custom theme configured inline in `<script>`
- Iconify icons via CDN (`code.iconify.design`)
- Google Fonts: Playfair Display (headings), Inter (body)
- All JS is vanilla, inlined at the bottom of the file

## Key sections (by anchor)

| Anchor | Content |
|---|---|
| `#inicio` | Hero with background image and seal |
| `#espiritu` | Lodge values (Razón, Estudio, Virtud, Fraternidad) |
| `#historia` | "En Construcción" placeholder |
| `#actividades` | "En Construcción" placeholder |
| `#contacto` | Contact info + client-side-only form (shows toast, no backend) |

## Gotchas

- External images use signed CDN URLs from `z-cdn-media.chatglm.cn` with expiry timestamps — they will break when `auth_key` expires. Replace with permanent hosting before production.
- The contact form has no backend submission; it only displays a success toast. Wire it to a real endpoint before going live.
- No git repo initialized. No CI/CD, tests, or linting.
