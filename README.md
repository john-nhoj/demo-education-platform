# NextJS Typescript with NextAuthJS Boilerplate

Bootstrap a developer-friendly NextJS app configured with:

- [Typescript](https://www.typescriptlang.org/)
- Linting with [ESLint](https://eslint.org/)
- Formatting with [Prettier](https://prettier.io/)
- Linting, typechecking and formatting on by default using [`husky`](https://github.com/typicode/husky) for commit hooks
- [NextAuthJS](https://next-auth.js.org)

## Requirements

- npm
- Postgresql

## Preview

Preview the example live on [my demo app](demo-next-auth-js.johncheng.me)

## Get started

Clone repository:

```bash
git clone git@github.com:john-nhoj/next-auth-js.git
```

Create a postgres database to persist users

```bash
psql next-auth-js
```

Copy the environment file and complete the variables

```bash
cp .env.example .env.local
```

Install dependencies

```bash
npm run install
```

Run database migrations

```bash
npm run knex:migrate:latest
```

Start the development server

```bash
npm run dev
```
