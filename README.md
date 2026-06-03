# VitaStellar

**Decentralized Health & Wellness Powered by Stellar**

VitaStellar is a decentralized health and wellness platform built on the Stellar ecosystem. The platform enables users to track health goals, manage wellness activities, receive personalized insights, and maintain ownership of health-related data through secure and transparent blockchain infrastructure.

---

## 🚀 Quick Start

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

---

## 🏗️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI:** Radix UI primitives + custom components
- **Forms:** React Hook Form + Zod
- **Charts:** Recharts
- **PWA:** Offline support via `@ducanh2912/next-pwa`

---

## 📁 Project Structure

```
app/          — Next.js App Router pages & layouts
components/   — Reusable UI components
hooks/        — Custom React hooks
lib/          — Utilities, mocks, offline queue, storage migration
providers/    — React context providers
public/       — Static assets, PWA manifest, service worker
worker/       — Service worker source
```

---

## 🔧 Available Scripts

| Command          | Description                    |
| ---------------- | ------------------------------ |
| `pnpm dev`       | Start development server       |
| `pnpm build`     | Production build               |
| `pnpm start`     | Start production server        |
| `pnpm lint`      | Run ESLint                     |

---

## 🌍 Stellar Integration

- Stellar is used for secure, low-cost health and wellness interactions.
- Soroban smart contracts power wellness incentives, achievement systems, and future health reward mechanisms.
- Users maintain ownership and transparency of health-related records and achievements.
- The platform leverages Stellar's scalability, speed, and affordability.

---

## 📱 PWA & Offline Support

VitaStellar is a Progressive Web App with full offline support:

- Installable on desktop and mobile
- Offline task queue with IndexedDB
- Auto-sync when connectivity is restored
- Offline fallback page

---

## 🤝 Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on how to contribute.

---

## 📄 License

[MIT](./LICENSE)
