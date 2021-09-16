# Vue 3 is ready to rock Typescript - I do not need a JS Fallback anymore

# Vite Vue3 Starter

My Vite starter template for fast prototyping.
If you want to try it:

`degit RazorSiM/vite-vue-starter` 👽

If you're searching for a Typescript starter, you can check my other repo: [vite-vue-ts-starter](https://github.com/RazorSiM/vite-vue-ts-starter)

## Scaffolding

I've added an example on how you could use a multi layout approach for your project.
There's also a _dark mode_ toggler example using Tailwind features.

## Packages

- **Windi CSS**: it's awesome and super configurable. It does not require you to add postcss in your pipeline
- **Vue Router** because eventually you'll need it
- **Vueuse** because it's super usefull
- **Pinia** as a store manager because it's lightway, Typescript friendly and composable. Works best with `setup()`

## Code Style and Linters

I tried to configure everything to work with:

- **Eslint** for linting errors in JS/Vue
- **Stylelint** for Css
- **Prettier** for code formatting and code styling
- **Lefthook** for your git hooks. You can extend the hooks to do wathever you want.

## VSCode Integration

Clone the repo and install the recommended packages. Check the `.vscode` folder to know more about the settings.
By default, when saving it will run Prettier format, Eslint and Stylelint.

NOTE: `WindiCSS IntelliSense` will not work if you have the `Auto Close Tag` extension enabled in **VSCode**

## How to run it

First of all, install the dependencies:
`pnpm i` or `yarn`
Run `pnpm run dev` or `yarn dev` to start hacking.

In your `./package.json` Script section there are some useful commands configured, so check it out.

TODO:

- [x] Add Stylelint
- [x] Add ~~Vuex~~ Pinia as store manager
