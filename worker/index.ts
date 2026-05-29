// Cloudflare Worker: serves the static portfolio (out/) and a tiny view-counter API.
// Requests to /api/views increment a KV counter and return the running total.
// Everything else is served from the static assets bundle.

interface Env {
  ASSETS: { fetch: (request: Request) => Promise<Response> };
  VIEWS: {
    get: (key: string) => Promise<string | null>;
    put: (key: string, value: string) => Promise<void>;
  };
}

const COUNT_KEY = "count";

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/api/views") {
      const current = parseInt((await env.VIEWS.get(COUNT_KEY)) ?? "0", 10);
      const next = current + 1;
      await env.VIEWS.put(COUNT_KEY, String(next));
      return new Response(JSON.stringify({ count: next }), {
        headers: {
          "content-type": "application/json",
          "cache-control": "no-store",
        },
      });
    }

    // Fall through to the static site (also applies not_found_handling).
    return env.ASSETS.fetch(request);
  },
};
