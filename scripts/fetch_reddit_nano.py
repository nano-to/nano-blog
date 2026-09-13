#!/usr/bin/env python3
"""Fetch recent r/nanocurrency posts for manual digest research.

This is intentionally a collector, not a publisher. Reddit may reject
requests from unauthenticated clients; when that happens, the script reports
the response and exits without retrying aggressively.
"""

import argparse
import json
import os
import sys
from datetime import datetime, timezone
from urllib.error import HTTPError, URLError
from urllib.parse import urlencode
from urllib.request import Request, urlopen


DEFAULT_USER_AGENT = "nano-blog-monthly-digest/1.0 (contact: admin@nano.to)"


def parse_args():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--month", help="UTC month to keep, in YYYY-MM format")
    parser.add_argument("--limit", type=int, default=100, help="number of Reddit posts to request (1-100)")
    parser.add_argument("--output", help="write JSON to this file instead of stdout")
    parser.add_argument("--user-agent", default=os.getenv("REDDIT_USER_AGENT", DEFAULT_USER_AGENT))
    return parser.parse_args()


def validate_month(value):
    if value is None:
        return None
    try:
        return datetime.strptime(value, "%Y-%m").strftime("%Y-%m")
    except ValueError as exc:
        raise argparse.ArgumentTypeError("month must use YYYY-MM format") from exc


def fetch_listing(limit, user_agent):
    query = urlencode({"limit": limit, "raw_json": 1})
    request = Request(
        f"https://www.reddit.com/r/nanocurrency/new.json?{query}",
        headers={"Accept": "application/json", "User-Agent": user_agent},
    )

    try:
        with urlopen(request, timeout=20) as response:
            return json.load(response)
    except HTTPError as exc:
        if exc.code in (403, 429):
            retry_after = exc.headers.get("Retry-After")
            detail = f" Retry-After: {retry_after}s." if retry_after else ""
            raise RuntimeError(f"Reddit rejected the request with HTTP {exc.code}.{detail}") from exc
        raise RuntimeError(f"Reddit returned HTTP {exc.code}: {exc.reason}") from exc
    except URLError as exc:
        raise RuntimeError(f"Could not reach Reddit: {exc.reason}") from exc


def normalize_post(child):
    post = child.get("data", {})
    created = datetime.fromtimestamp(post.get("created_utc", 0), tz=timezone.utc)
    selftext = " ".join((post.get("selftext") or "").split())
    return {
        "id": post.get("id"),
        "title": post.get("title", "").strip(),
        "author": post.get("author"),
        "created_at": created.isoformat(),
        "score": post.get("score", 0),
        "comments": post.get("num_comments", 0),
        "kind": "link" if post.get("is_self") is False else "text",
        "url": post.get("url"),
        "permalink": f"https://www.reddit.com{post.get('permalink', '')}",
        "excerpt": selftext[:500] if selftext else None,
    }


def collect(month, limit, user_agent):
    payload = fetch_listing(limit, user_agent)
    posts = [normalize_post(child) for child in payload.get("data", {}).get("children", [])]
    if month:
        posts = [post for post in posts if post["created_at"].startswith(month)]

    return {
        "source": "https://www.reddit.com/r/nanocurrency/new/",
        "subreddit": "nanocurrency",
        "fetched_at": datetime.now(timezone.utc).isoformat(),
        "month": month,
        "post_count": len(posts),
        "posts": posts,
    }


def main():
    args = parse_args()
    if not 1 <= args.limit <= 100:
        print("error: --limit must be between 1 and 100", file=sys.stderr)
        return 2

    try:
        month = validate_month(args.month)
        result = collect(month, args.limit, args.user_agent)
    except (argparse.ArgumentTypeError, RuntimeError) as exc:
        print(f"error: {exc}", file=sys.stderr)
        return 1

    encoded = json.dumps(result, indent=2, ensure_ascii=True) + "\n"
    if args.output:
        with open(args.output, "w", encoding="utf-8") as output:
            output.write(encoded)
    else:
        sys.stdout.write(encoded)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
