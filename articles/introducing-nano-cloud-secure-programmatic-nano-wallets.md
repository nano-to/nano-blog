- title: Nano Cloud Wallets - Secure Programmatic Nano Wallets
- date: 02-17-2024
- tags: Release
- image: images/nano-cloud/hero.png
- author: @nano2dev
- hidden: true
-----

Secure programmatic wallets for the Nano blockchain. 

Build demanding applications with ease.

## Get Started

```bash
curl -d '{
  "action": "cloud_wallet",
  "vanity": "1temp",
  "refund_address": "YOUR_ADDRESS",
  "expire": "5 minutes"
}' \
-H "Content-Type: application/json" \
"https://rpc.nano.to"
```

**Response:**

```json
{
  "balance": 0,
  "address": "nano_1temp9dzx8kmkbcpedwi...4bzoh3pafk9grxndk88inkbe",
  "api_key": "NANO-WALLET-API-KEY-67353C9E78A34474A977....591AAD07D37FB94F84C",
  "refund_address": "YOUR_ADDRESS",
  "expiration": "in 5 minutes",
  "expiration_unix": 1710873173
}
```

## Documentation

[https://docs.nano.to/cloud](https://docs.nano.to/cloud)

## Nano.to Support

Bugs, Questions & Installation Support:

- Support: [support@nano.to](mailto:support@nano.to)
- Twitter: [@nano2dev](https://twitter.com/nano2dev)
- Mastodon: [Xno.Social](https://xno.social/@nano2dev)
- @nano2dev on [Nano's Discord](https://discord.com/invite/RNAE2R9) 
