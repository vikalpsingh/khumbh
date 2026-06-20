# Ujjain Kumbh Mela 2028 Travel Guide

Production-ready Next.js 15 travel planning website.

## Local development

```bash
npm install
npm run dev
```

The site runs at `http://localhost:3000`.

## Production (Ubuntu + PM2 + Nginx)

```bash
npm ci
npm run build
pm2 start npm --name "ujjain-2028" -- start
pm2 save
```

Proxy Nginx to `http://127.0.0.1:3000`, add SSL with Certbot, and replace:

- `https://ujjain2028.in` with the final domain
- `G-XXXXXXXXXX` with the Google Analytics measurement ID
- contact form placeholders with a real endpoint

Content is currently static-first in `data/site.ts`, ready to split into JSON or MDX as editorial content grows.
