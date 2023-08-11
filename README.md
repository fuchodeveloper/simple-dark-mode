# simple-dark-mode

This is a minimalist Vue.js plugin for achieving dark mode on a web app. See usage instructions below ⬇️

## Project Setup

Install package 

```sh
npm install @fredrick.mgbeoma/simple-dark-mode
```

In your project entry point, e.g `src/main.ts`
```js
import { createApp } from "vue";
import SimpleDarkMode from "@fredrick.mgbeoma/simple-dark-mode";
import App from "./App.vue";

import "./assets/main.css";
import "@fredrick.mgbeoma/simple-dark-mode/dist/style.css";

const app = createApp(App);

app.use(SimpleDarkMode);
app.mount("#app");
```

### Usage in a component

```js
// e.g HeaderComponent.vue
<template>
// ...
    <SimpleDarkMode />
// ...
</template>
```

## Developing locally

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
