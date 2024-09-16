# Portfolio Website

**v3.0:**

- Pre-commit linting ([svelte-check](https://github.com/sveltejs/language-tools/tree/master/packages/svelte-check)) + formatting ([prettier](https://prettier.io/)) with [Husky](https://typicode.github.io/husky)
- Commit messages enforced with [Conventional Commits](https://www.conventionalcommits.org/)
- Automated build and deployment with Github Actions and Github Pages
- **Built With:** Svelte, TypeScript, Sass, Vite

Made with ❤️ Ashleigh Liu

---

## Getting Started

Install Dependencies

```sh
pnpm i  # runs husky install after completion
```

Development Server

```sh
npm run dev  # http://localhost:3000
```

Build

```sh
npm run build  # /dist

npm run serve  # serves /dist @ http://localhost:5000
```

Lint

```sh
npm run lint  # will fail on warnings and hints, uses tsconfig.json
```

Format

```sh
npm run format  # formats .svelte, .ts, .scss @ /src
```
