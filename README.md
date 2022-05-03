# Macrometa Node SDK Cloudflare Worker Template

This is a template to help you get started using the [Macrometa JS SDK](https://www.npmjs.com/package/jsc8) with [Cloudflare Workers](https://workers.cloudflare.com/). The configuration within this template relies on a custom build using [webpack](https://webpack.js.org/) and an `agent` override when initializing the jsC8 client.

## Requirements 🥁

1. A Macrometa API Key. If you already have a Macrometa account, you can generate an API key by visiting your dashboard and navigating to `Account` → `API Keys` → `New API Key`. If you don't have a Macrometa account, you can create a free developer account [here](https://auth.paas.macrometa.io/signup).

2. Node.js `v14.x.x` or above. We recommend installing Node with a version manager like [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) or [Volta](https://volta.sh/). 

3. This template is dependent on the Cloudflare Wrangler CLI. You can install the Wrangler CLI with `npm i @cloudflare/wrangler -g`. For more information on installing Wrangler, please visit the [official docs](https://developers.cloudflare.com/workers/cli-wrangler/install-update/).

## Installation ⚡

To generate a local copy of this template using [Wrangler](https://github.com/cloudflare/wrangler):

```bash
$ wrangler generate my-node-cloudflare-worker-template https://github.com/macrometacorp/node-cloudflare-worker-template
```

Further documentation for the Wrangler CLI can be found [here](https://developers.cloudflare.com/workers/tooling/wrangler).

## Development 💾

> 💡 To run your worker locally, please make sure you've set your Macrometa API Key as an environment variable in the `.env` file located at the root of your project.

You can use the following Wrangler CLI command `wrangler dev` to run the worker locally, building and starting the worker on port `8787`.

## Publishing 🚀

You can build and publish your Cloudflare Worker using this command:

```bash
MACROMETA_API_KEY="<YOUR API KEY HERE>" wrangler publish
```

This will build your application using Webpack and publish it. If this is your first time publishing, it will create a new worker named `node-cloudflare-worker-template` under your account. If all goes well, the command will output a URL that looks like `https://node-cloudflare-worker-template.<your user name>.workers.dev` where your worker is available.

Alternatively, you can specify `MACROMETA_API_KEY` as an environment variable using the [Cloudflare Dashboard](https://developers.cloudflare.com/workers/platform/environment-variables/#environment-variables-via-the-dashboard) and use:

```bash
$ wrangler publish
```
