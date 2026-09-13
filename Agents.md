# Repository Relationship

The Nano.to ecosystem is centered on `~/nano-rpc`, which owns the RPC and
checkout server contracts, payment monitoring, webhooks, and production
behavior. Companion repositories include `~/nano-js` (client SDK),
`~/pay-js` (NanoPay browser library), `~/nano-blog` (this legacy documentation
and demonstration site), and `~/nano-docs` (current Nano.to documentation
site). Coordinate cross-repository changes rather than treating any one
repository as standalone.

`nano-blog` is the documentation and demonstration site for the Nano
ecosystem. Its NanoPay article,
`articles/introducing-nano-pay-simple-web-payments.md`, documents and
demonstrates the payment library maintained in `nano-to/pay-js`.

Some fixes span a third repository: `~/nano-rpc` is the backend used by Nano
checkout and username/address resolution. Preserve the public `pay-js`
frontend syntax and prefer compatibility fixes in this repository or
`nano-rpc` rather than changing existing `pay-js` integrations.

When changing NanoPay's public API, CDN usage, or behavior in `pay-js`, check
the article, examples, and paywall integration here. When changing the
article's payment examples, verify them against `pay-js`. The repositories
are maintained separately; `pay-js` is an external runtime asset rather than
a build-time dependency of this blog.
