# portfolio-styled-dashboard

A link dashboard for my homelab, in the style of my portfolio's homepage.

- Links live in `app/data/links.json`: one window per group.
- `yarn dev` runs it locally.
- `yarn build` writes static HTML to `.output/public`. Serve that folder with any web server (Caddy, nginx, …).
