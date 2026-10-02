import { readFile, writeFile } from "node:fs/promises";
import { loadEnv } from "vite";
import { render, createStructuredData } from "../.prerender/entry-server.js";

const env = {
  ...loadEnv("production", process.cwd(), "VITE_"),
  ...process.env,
};
const indexable = env.VITE_INDEXABLE === "true";
const officialUrl = (
  env.VITE_SITE_URL || "https://clinicanossolar.com.br"
).replace(/\/$/, "");
const previewHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const publicUrl =
  !indexable && previewHost ? `https://${previewHost}` : officialUrl;
let html = await readFile("dist/index.html", "utf8");
html = html.replace(
  '<div id="root"></div>',
  `<div id="root">${render()}</div>`,
);
html = html.replace(
  'content="noindex, follow"',
  `content="${indexable ? "index, follow, max-image-preview:large" : "noindex, follow"}"`,
);
html = html.replace(
  /https:\/\/clinicanossolar.com.br\/hero\/recepcao.webp/g,
  `${publicUrl}/hero/recepcao.webp`,
);
html = html.replace(
  /(<meta property="og:url" content=")[^"]+("\s*\/>)/,
  `$1${publicUrl}/$2`,
);
html = html.replace(
  /(<link rel="canonical" href=")[^"]+("\s*\/>)/,
  `$1${officialUrl}/$2`,
);
const structuredData = JSON.stringify(createStructuredData(publicUrl)).replace(
  /</g,
  "\\u003c",
);
html = html.replace(
  "</head>",
  `<script type="application/ld+json">${structuredData}</script>\n  </head>`,
);
await writeFile("dist/index.html", html);
await writeFile(
  "dist/robots.txt",
  `User-agent: *\nAllow: /\n${indexable ? `\nSitemap: ${officialUrl}/sitemap.xml\n` : "\n# Presentation only; every HTML page has noindex.\n"}`,
);
await writeFile(
  "dist/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${indexable ? `<url><loc>${officialUrl}/</loc></url>` : ""}</urlset>\n`,
);
console.log(
  `HTML pré-renderizado: 10 especialidades, 10 perguntas e 2 unidades. Indexação: ${indexable ? "ativada" : "desativada (apresentação)"}.`,
);
