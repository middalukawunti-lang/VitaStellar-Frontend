# Contributing to VitaStellar

Welcome to the VitaStellar open source project! We're excited to have you contribute. This guide will help you get started and ensure contributions are consistent, high-quality, and aligned with our project goals.

---

## Table of Contents
- [Welcome](#welcome)
- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
  - [Reporting Issues](#reporting-issues)
  - [Submitting Pull Requests](#submitting-pull-requests)
  - [Branching Strategy](#branching-strategy)
- [Coding Guidelines](#coding-guidelines)
  - [Style Guide](#style-guide)
  - [Commit Messages](#commit-messages)
- [Testing](#testing)
- [Documentation](#documentation)
- [Communication Channels](#communication-channels)
- [Resources](#resources)

---

## Welcome

Thank you for your interest in contributing to VitaStellar!

VitaStellar is a decentralized health and wellness platform built on the Stellar ecosystem. The platform enables users to track health goals, manage wellness activities, receive personalized insights, and maintain ownership of health-related data through secure and transparent blockchain infrastructure.

By contributing, you help us improve the project and make it accessible to a wider audience. Contributions can include:
- Bug fixes
- New features
- Documentation improvements
- Examples and tutorials

We value all contributions, no matter the size.

---

## Code of Conduct

We expect all contributors to follow our Code of Conduct. Respect, collaboration, and professionalism are mandatory in all discussions and contributions.

---

## Getting Started

To start contributing:
1. Fork the repository from GitHub.
2. Clone your fork locally:
   ```bash
   git clone https://github.com/<your-username>/VitaStellar-Frontend.git
   ```
3. Install dependencies:
   ```bash
   pnpm install
   ```
4. Create a branch for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```

---

## How to Contribute

### Reporting Issues

Found a bug or have a feature request? Open an issue on GitHub with:
- A clear, descriptive title
- Steps to reproduce the issue
- Expected behavior vs actual behavior
- Screenshots if applicable
- Environment details (browser, OS, etc.)

### Submitting Pull Requests

1. Ensure your code follows the project's style guide
2. Write or update tests as needed
3. Update documentation if your changes affect usage
4. Run the typecheck and build to verify nothing is broken:
   ```bash
   pnpm build
   ```
5. Submit the PR with a clear description of changes
6. Link any related issues

### Branching Strategy

- `main` — production-ready code
- `feature/*` — new features
- `fix/*` — bug fixes
- `docs/*` — documentation updates

---

## Coding Guidelines

### Style Guide

This project uses:
- **TypeScript** with strict mode
- **Next.js** App Router conventions
- **Tailwind CSS** for styling
- **React Hook Form** + **Zod** for form validation
- Component files use PascalCase (e.g., `HealerCard.tsx`)
- Utility files use camelCase (e.g., `useBookmarks.ts`)

### Commit Messages

Use conventional commit format:
- `feat: add health goal tracking`
- `fix: resolve offline queue sync issue`
- `docs: update contributing guide`
- `refactor: simplify task submission flow`

---

## Testing

- Write unit tests for new functionality
- Ensure existing tests pass before submitting a PR
- Test manually in both light and dark mode
- Verify responsive behavior at mobile and desktop breakpoints

---

## Documentation

- Update README and relevant docs when adding features
- Use JSDoc comments for exported functions and components
- Keep inline comments focused on _why_, not _what_

---

## Communication Channels

- GitHub Issues: Bug reports and feature requests
- GitHub Discussions: Questions and community conversation
- Pull Requests: Code review and collaboration

---

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Stellar Developer Docs](https://developers.stellar.org/)
- [Soroban Smart Contracts](https://soroban.stellar.org/)

---

Thank you for helping build VitaStellar! 🚀
