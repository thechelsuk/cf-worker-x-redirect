# cf-worker-x-redirect

Some apps do not support x-callback-urls and url schemes, but do support standard https protocols.

A good example is NetNewsWire, in which I have some themes that have some JavaScript that rewrite the URLs from YouTube videos, I tried the url scheme for my favourite PIP and full screen video player [x.app](https://extension.app) but this didn't work, so instead I rewrite them to a subdomain `vid.thechels.uk`

So this worker fills the gap by taking a url passed to the subdomain and it redirects to `x://?videoUrl=`

This opens in the default browser and redirects to the app I use. One job, done well. That's all.

This is then published to Cloudflare as a worker, and is free.

## usage

- Craft a url `https://vid.thechels.uk/?v={URL}`
- The url must be of a YouTube variety
- have x.app installed
- Target URL opens in app.