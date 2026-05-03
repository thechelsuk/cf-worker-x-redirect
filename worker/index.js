export default {
async fetch(request) {
const url = new URL(request.url);
const target = url.searchParams.get(“v”);

// Validate presence
if (!target) {
  return new Response("Missing ?v= parameter", { status: 400 });
}

// Validate it looks like a URL before redirecting
let parsed;
try {
  parsed = new URL(target);
} catch {
  return new Response("Invalid URL in ?v= parameter", { status: 400 });
}

// Optional: restrict to YouTube URLs only
const allowedHosts = ["www.youtube.com", "youtube.com", "youtu.be"];
if (!allowedHosts.includes(parsed.hostname)) {
  return new Response("Only YouTube URLs are permitted", { status: 403 });
}

// Redirect to x:// scheme — 302 so it's not cached permanently
return Response.redirect(`x://videoUrl?=${target}`, 302);

},
};
