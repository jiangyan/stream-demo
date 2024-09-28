export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.pathname.startsWith('/api/')) {
      // Handle API routes
      const response = await env.ASSETS.fetch(request);
      return response;
    }
    // Serve static assets
    return env.ASSETS.fetch(request);
  },
};