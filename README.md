# portfolio-styled-dashboard

A link dashboard for my homelab, in the style of my portfolio's homepage.

- Links live in `config.json` (not committed): `cp config.example.json config.json`. One window per group; each link's `sub` opens `https://<sub>.<domain>`.
- `yarn dev` runs it locally.
- `yarn build` writes static HTML to `.output/public`. Serve that folder with any web server (Caddy, nginx, …).
