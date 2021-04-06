# Vite Vue3 Starter

My Vite starter template for fast prototyping.
If you want to try it:

`degit RazorSiM/vite-vue-starter` 👽

## Scaffolding

I've added an example on how you could use a multi layout approach for your project.
There's also a "dark mode" toggler example using Tailwind features.

## Packages

- Tailwind CSS
- Tailwind JIT for faster development
- Vue Router because eventually you'll need it
- Vueuse because it's super usefull

## Code Style and Linters

I tried to configure everything to work with:

- Eslint for linting errors in JS/Vue
- Stylelint for Css
- Prettier for code formatting and code styling
- Lint Staged and Husky for pre-commit linting. You can extend the hook to do wathever you want.

## VSCode Integration

Clone the repo and install the recommended packages. Check the `.vscode` folder to know more about the settings.
By default, when saving it will run Prettier format, Eslint and Stylelint.

## How to run it

First of all, install the dependencies:
`npm install` or `yarn`
Run `npm run dev` or `yarn dev` to start hacking.

In your `./package.json` Script section there are some useful commands configured, so check it out.

TODO:

- [x] Add Stylelint
- [ ] Add Vuex or Pinia as store manager
