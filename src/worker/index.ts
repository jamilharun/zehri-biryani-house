import { Hono } from "hono";

const SECURITY_HEADERS: Record<string, string> = {
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "SAMEORIGIN",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
  "Content-Security-Policy": [
    "default-src 'self'",
    "script-src 'self'",
    "style-src 'self' 'unsafe-inline'",
    "font-src 'self'",
    "img-src 'self' data: https://images.pexels.com",
    "connect-src 'self'",
    "frame-ancestors *",
  ].join("; "),
};

const app = new Hono();

app.use("*", async (c, next) => {
  await next();
  for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
    c.res.headers.set(key, value);
  }
});

app.get("/ping", (c) => {
  c.res.headers.set("Access-Control-Allow-Origin", "*");
  return c.text("pong", 200);
});

app.get("/api/", (c) => c.json({ name: "Cloudflare" }));

export default app;
