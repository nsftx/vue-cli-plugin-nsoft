# vue-cli-plugin-nsoft
NSoft General Vue CLI Plugin

## :star: Features

- Vue CLI Plugin to generate a project structure for your project.

## Table of contents

- [Getting started](#getting-started)
- [Plugin options](#plugin-options)
- [Generated project structure](#generated-project-structure)

---

## Getting started

If you haven't yet installed vue-cli 3, first follow the install instructions here: https://github.com/vuejs/vue-cli

Generate a project :

```
vue create my-app
```

To install the nsoft plugin:

```
cd my-app
vue add @nsoft/nsoft
```

## Plugin options

* `Project name` - name of your repository, written to `package.json` in `name` field
* `Project description` - description of your repository, written to `package.json` in `description` field
* `Author` - author of your repository, written to `package.json` in `author` field, defaults to empty field

## Generated project structure

``` bash
.
├── 📂 config
│   └── .env.js
├── 📂 public
│   ├── favicon.ico
│   └── index.html
└── 📂 src
│   ├── 📂 api
│   │   ├── 📂 interceptors
│   │   ├── http.js
│   │   └── index.js
│   ├── 📂 assets
│   ├── 📂 components
│   │   ├── SampleBox.vue
│   │   ├── SampleBox.spec.js
│   │   └── index.js
│   ├── 📂 directives
│   │   └── index.js
│   ├── 📂 filters
│   │   └── index.js
│   ├── 📂 layouts
│   │   └── TemplateDefault.vue
│   ├── 📂 mixins
│   │   └── index.js
│   ├── 📂 pages
│   │   ├── Home.vue
│   ├── 📂 plugins
│   │   ├── index.js
│   ├── 📂 router
│   │   ├── index.js
│   │   └── navigationGuards.js
│   ├── 📂 store
│   │   ├── 📂 modules
│   │   ├── 📂 plugins
│   │   ├── actions.js
│   │   ├── getters.js
│   │   ├── index.js
│   │   ├── mutationTypes.js
│   │   ├── mutations.js
│   │   ├── state.js
│   │   └── storeConfig.js
│   ├── 📂 utility
│   │   └── index.js
│   ├── App.vue
│   ├── main.js
├── 📂 tests
│   ├── 📂 e2e
│   └── 📂 unit
├── .browserslistrc
├── .editorconfig
├── .eslintrc.js
├── .gitignore
├── CHANGELOG.md
├── README.md
├── babel.config.js
├── jest.config.js
├── package.json
├── postcss.config.js
└── vue.config.js

```