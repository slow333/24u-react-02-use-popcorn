# React + Vite

## vite react styled components에서 tailwind 사용

> npm install -D tailwindcss postcss autoprefixer

> npm i tailwind-styled-components

> npx tailwindcss init -p

> tailwind.config.js
```ecmascript 6
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {},
  },
  plugins: [],
}
```

> index.css
```ecmascript 6
@tailwind base;
@tailwind components;
@tailwind utilities;
```
