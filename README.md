# portfolio-styled-dashboard

A link dashboard for my homelab, in the style of my portfolio's homepage.

- Links live in `public/config.json` (not committed): `cp config.example.json public/config.json`. It's loaded in the browser, so with Docker mount it to `/usr/share/nginx/html/config.json`. One window per group; each link's `sub` opens `https://<sub>.<domain>`.
- `yarn dev` runs it locally.
- `yarn build` writes static HTML to `.output/public`. Serve that folder with any web server (Caddy, nginx, …).
