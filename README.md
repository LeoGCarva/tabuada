# Tabuada

A web app for practicing the multiplication tables from 2 to 12. ("Tabuada" means "multiplication table" in Portuguese.) The interface is in Portuguese.

## Features

- **Sequence mode:** practice every table in order, from 2 × 1 to 12 × 10.
- **Instant feedback:** each answer is marked right or wrong as you type.
- **Keyboard navigation:** press Enter to jump to the next question.

## Project status

The project is in progress. Random mode has a page but isn't implemented yet, and the timer in sequence mode is only a static field for now.

## Tech stack

- React 19
- TypeScript
- Vite
- React Router

## Getting started

You need Node.js and pnpm. The app lives in the `tabuada` subfolder:

```bash
cd tabuada
pnpm install
pnpm dev
```

Then open the URL that Vite prints in the terminal.

## Scripts

Run these from the `tabuada` subfolder:

| Command | Description |
|---|---|
| `pnpm dev` | Start the development server |
| `pnpm build` | Check types and create a production build |
| `pnpm preview` | Preview the production build |
| `pnpm lint` | Run ESLint |
