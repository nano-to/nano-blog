# Nano Digest

The monthly Nano Digest is a researched and edited roundup of meaningful Nano
ecosystem activity. It is not an automated news feed. Collection can be
semi-automatic, but every item must be reviewed before publication.

## Directory Layout

```text
digest/
  sources.json       Source registry and collection notes
  schema.json        Shape of normalized research items and issues
  issues/            Reviewed issue records and published issue notes
  drafts/            Working research notes, if needed
```

Fetched data belongs in `digest/issues/` or an ignored local working file. Do
not write fetched content directly into `articles/`; the normal blog build
publishes every Markdown file there.

## Issue Workflow

1. Choose the UTC month and collect candidate items from the registered
   sources.
2. Normalize candidates to the schema and retain the original source URL.
3. Remove duplicates, advertisements, rumors, and items without a verifiable
   primary source.
4. Add context and edit `articles/nano-digest-template.md`, keeping it
   `hidden: true` until the issue is ready.
5. Fact-check links, dates, names, release claims, and network metrics.
6. Remove `hidden: true` only after editorial review, then link the issue from social and
   the newsletter/RSS channels.

## Initial Sections

- Network and protocol
- Releases and products
- Wallets, merchants, and integrations
- Developer and infrastructure activity
- Community, events, and governance
- What to watch next month

Reddit is a discovery source, not an authority. Use it to find leads, then
confirm important claims from project repositories, release notes, official
announcements, or Nano.to network data.
