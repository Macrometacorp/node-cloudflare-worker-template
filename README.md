# Macrometa JS SDK Cloudflare Worker Template

This is a template for setting up a [Cloudflare Worker](https://workers.cloudflare.com/) which uses the [`jsC8`](https://www.npmjs.com/package/jsc8) Javascript SDK. 

> Note: The [`wrangler`](https://developers.cloudflare.com/workers/cli-wrangler) CLI tool is required for publishing.

## Generating

To generate a local copy of the template using [Wrangler](https://github.com/cloudflare/wrangler).

```bash
wrangler generate my-macrometa-cloudflare-worker
 https://github.com/macrometacorp/macrometa-node-cloudflare-worker-template
```

Further documentation for Wrangler can be found [here](https://developers.cloudflare.com/workers/tooling/wrangler).

## Development

You can use the following Wrangler CLI command `wrangler dev` to run the worker locally, which will build and start the worker on port `8787`.

## Publishing

You can build and publish your worker using:

```bash
MACROMETA_API_KEY="<YOUR API KEY HERE>" wrangler publish
```

This will build your application using Webpack and publish it. If this is your first time publishing, it will create a new worker named `macrometa-node-cloudflare-worker-template` under your account. If all goes well, the command will output a URL that looks like `https://macrometa-node-cloudflare-worker-template.<your user name>.workers.dev` where your worker is available.

Alternatively, you can specify `MACROMETA_API_KEY` as an environment variable and use:

```bash
wrangler publish
```

## Cloudflare Secrets

Cloudflare Workers offer a [secrets infrastructure](https://developers.cloudflare.com/workers/platform/environment-variables#adding-secrets-via-wrangler) for storing an encrypted secret. You can use this instead of relying on an environment variable.

1. Publish your worker at least once using the above instructions to bootstrap the worker.
2. Remove the `DefinePlugin` from [`webpack.config.js`](webpack.config.js).
3. Run `wrangler secret put MACROMETA_API_KEY`. This will prompt you to enter your secret (i.e., your Macrometa API key). 

This only needs to be done the first time you configure your new worker. After that, it will persist across deployments. Once set up, you can publish using:

```bash
wrangler publish
```