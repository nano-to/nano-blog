- title: The Balance of Security and Ease of Use: Non-Custodial Nano and the Future of Development
- date: 12-09-2024
- tags: Press Release
- image: images/nano-cloud/hero.png
- author: @nano2dev
-----

The Nano ecosystem is founded on the principles of decentralization, speed, and cost-efficiency. A fundamental pillar of this ecosystem is **non-custodial security**, empowering individuals to maintain full control over their funds. 

However, the very principle that ensures the best security for your Nano funds—non-custodial ownership—often creates a steep learning curve for developers, especially those building programmatic solutions. 

At Nano.to, we want to bridge the gap by offering solutions that cater to both the **security-first ethos of Nano** and the practical needs of developers and exchanges.

## The Challenge: Security vs. Ease of Use

Non-custodial wallets ensure that private keys remain under the control of the user. This minimizes risks associated with centralized storage, such as hacks or mismanagement by third parties. However, for developers new to Nano, this security model can present hurdles, including:

- **Understanding Key Management**: Generating, storing, and using private keys securely can be daunting for developers just starting out.
- **Running a Node**: Operating a Nano node requires technical expertise and infrastructure that may be out of reach for small teams or individuals.
- **Programmatic Complexity**: Sending and receiving Nano programmatically requires both an understanding of the Nano protocol and a robust infrastructure to support transactions.

While seasoned developers and exchanges might have resources to overcome these challenges, new developers often find themselves stuck in the weeds before they’ve sent their first Nano programmatically.

## Our Solution: Secure, Accessible, and Scalable

At RPC.Nano.To, we’re committed to creating tools that help developers and exchanges interact with the Nano blockchain efficiently, securely, and without unnecessary barriers.

### 1. **A Public Nano Node for All**
Our platform offers a globally hosted, **public Nano node**, enabling developers to integrate Nano into their applications without needing to manage their own node. This is ideal for:

- New developers experimenting with Nano for the first time.
- Established businesses that need reliable access to the Nano network without dedicating resources to node maintenance.

By removing the operational burden of running a node, we allow developers to focus on building innovative solutions.

### 2. **Cloud-Based Non-Custodial Platform**
We recognize the tension between security and usability in non-custodial solutions. That’s why we’re building **Cloud.Nano.To**, a **non-custodial Nano-as-a-Service platform**. Here’s how it works:

- **Encrypted Key Storage**: Private keys are encrypted before being stored in our database.
- **Zero-Knowledge Security**: Decryption is never stored server-side. Every API request must include the user’s decryption key, ensuring that **only the user can access and use their private keys**.

This approach ensures a balance between the convenience of cloud-based services and the unmatched security of non-custodial solutions.

### 3. **Open Source and Auditable**
To build trust and transparency, **Cloud.Nano.To** will be fully open source and auditable. Developers and users can inspect the platform’s code to verify claims about security, privacy, and functionality. 

Additionally, making the platform self-hostable on anyone's **Cloudflare** account, ensures high availability and scalability to meet the demands of developers and exchanges of all sizes.

## A Vision for the Future

Our mission at RPC.Nano.To is twofold:

1. **Empower Developers**: By providing easy-to-use tools and infrastructure, we’re lowering the barrier to entry for developers building on Nano.
2. **Champion Security**: By adhering to non-custodial principles, we ensure users can trust the security of their funds without compromising usability.

Whether you’re a new developer experimenting with Nano, an experienced team building sophisticated applications, or an exchange integrating Nano transactions, RPC.Nano.To and Cloud.Nano.To are designed with your needs in mind.

### API Examples: Create Nano Wallet

```bash
curl -X POST https://cloud.nano.to/v1/wallets \
-H "Content-Type: application/json" \
-H "Authorization: Bearer PLATFORM_API_KEY" \
-d '{
  "decryptionKey": "YOUR_DECRYPTION_KEY"
}'
```

**Response:**

```json
{
  "address": "nano_3exampleaddress",
  "encryptedPrivateKey": "ENCRYPTED_PRIVATE_KEY"
}
```

### API Examples: Receive Funds 

```bash
curl -X POST https://cloud.nano.to/v1/wallets/receive \
-H "Content-Type: application/json" \
-H "Authorization: Bearer PLATFORM_API_KEY" \
-d '{
  "address": "nano_3exampleaddress",
  "decryptionKey": "YOUR_DECRYPTION_KEY"
}'

```

**Response:**

```json
{
  "success": true,
  "receivedBlocks": [
    {
      "hash": "BLOCK_HASH_1",
      "amount": "1.25 NANO"
    },
    {
      "hash": "BLOCK_HASH_2",
      "amount": "0.75 NANO"
    }
  ]
}
```


### API Examples: Send Funds 

```bash
curl -X POST https://cloud.nano.to/api/v1/wallets/send \
-H "Content-Type: application/json" \
-H "Authorization: Bearer PLATFORM_API_KEY" \
-d '{
  "fromAddress": "nano_3examplefromaddress",
  "toAddress": "nano_3exampletoaddress",
  "amount": "0.133",
  "decryptionKey": "YOUR_DECRYPTION_KEY"
}'
```

**Response:**

```json
{
  "success": true,
  "transactionHash": "SEND_TRANSACTION_HASH"
}
```

