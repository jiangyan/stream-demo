# Next.js Chat App with OpenAI GPT-4o-mini on Cloudflare Pages

This project demonstrates a Next.js chat completion in streaming output by using the OpenAI GPT-4o-mini model, deployed on Cloudflare Pages. It showcases how to create a streaming chat interface with Next.js and deploy it to Cloudflare's edge network, overcoming several challenges along the way.

## Features

- Next.js 14 app router
- OpenAI GPT-4o-mini integration with streaming responses
- Cloudflare Pages deployment with edge runtime
- Custom worker configuration for API route handling

## Key Challenges and Solutions

### 1. Edge Runtime Compatibility

We use the edge runtime for our API route to ensure compatibility with Cloudflare Pages. This required adding the following to our `app/api/chat/route.ts`:

```typescript
export const runtime = 'edge';
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Cloudflare Pages

This project is deployed on Cloudflare Pages. The easiest way to deploy your Next.js app is to use the [Cloudflare Pages GitHub Action](https://github.com/cloudflare/next-on-pages/tree/main/packages/next-on-pages).
