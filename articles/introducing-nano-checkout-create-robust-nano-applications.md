- title: Nano.to Checkout - Create Elaborate Nano Applications
- date: 02-17-2024
- tags: Release
- image: images/nano-checkout/hero.png
- author: @nano2dev
-----

## Basic Usage

```js
const axios = require('axios');

axios.post('https://rpc.nano.to', {
  "action": "checkout",
  "address": "@faucet", // Your Address or Nano.to Username
  "random": "true",
  "amount": "0.133"
}).then((res) => {
  console.log(res.data);
});
```

**Response:**
```js
{
  "id": "b472b6a6",
  "browser": "https://nano.to/id_b472b6a6",
  "json": "https://api.nano.to/checkout/b472b6a6",
  "check": "https://api.nano.to/check/b472b6a6",
  "address": "nano_1q3q7x8r...yr51qsdkm8g45", // Your Address
  "amount": "0.133",
  "amount_raw": "133000000000000000000000000000",
  "qrcode": "data:image/png;base64,iVBORw0KGg...Jggg=="
}
```

## Documentation

[https://docs.nano.to/checkout](https://docs.nano.to/checkout)

## Nano.to Support

Bugs, Questions & Installation Support:

- Support: [support@nano.to](mailto:support@nano.to)
- Twitter: [@nano2dev](https://twitter.com/nano2dev)
- Mastodon: [Xno.Social](https://xno.social/@nano2dev)
- @nano2dev on [Nano's Discord](https://discord.com/invite/RNAE2R9) 
