Testing project for creating a userscripts using Svelte and Rollup.

# Get started

Install the dependencies...

```bash
cd test-svelte-userscript
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Install a script manager, e.g. [Tampermonkey](https://www.tampermonkey.net/), open it, create a new usercript and copy content of build/calculator.user.js file, and save it.

Navitage to [Google home page](https://www.google.com/) and enjoy the calculator.

# Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```
