# vue-cli-plugin-nsoft
NSoft General Vue CLI Plugin

## :star: Features

- Vue CLI Plugin to generate a project structure for your project.

## Table of contents

- [Getting started](#getting-started)
- [Commands](#commands)
- [Source Structure](#source-structure)
- [Plugin options](#plugin-options)
- [Generated project structure](#generated-project-structure)
- [Testing](#testing)

---

## Getting started

If you haven't yet installed vue-cli 3, first follow the install instructions here: https://github.com/vuejs/vue-cli

Generate a project :

```
vue create my-app
```

To install nsoft plugin:

```
cd my-app
vue add @nsoft/nsoft
```

## Commands

- `npm run serve`: Run app in development mode.
- `npm run build`: Production ready build.
- `npm run lint`: Lint the files using ESLint.
- `npm run test:coverage`: Generate coverage with codecov.
- `npm run test:e2e`: End-to-end tests with [Nightwatch](http://nightwatchjs.org/).
- `npm run test:unit` Start the Jest Test Runner.
- `npm run test:unitUpdate`:
- `npm run test:unitWatch`: Watch changes and run unit test.

## Source Structure

**Folder structure:**

- `api/`: abstraction for  external communication
- `assets/`: module assets (processed by module bundler)
- `components/`: all components that are not main view in flat structure
- `directives/`: all directives in flat structure
- `filters/`: all filters in flat structure
- `mixins/`: all mixins in flat structure
- `plugins/`: for plugins inclusion
- `utility/`: helper functions in flat structure
- `pages/`: component pages
- `layouts/`: component template pages
- `store/`: store stuff
- `router/`:  routing stuff
- `main.js`:  app entry file
- `App.vue`:  main app component

**Router structure:**
- `index.js`: app routes
- `{pageRouter}.js`:  nested routes can be defined in separated file with appropriate name
- `navigatonGuards.js`:  definition of global guards

**Store structure:**
- `state.js`:  state tree
- `getters.js`:  all getters
- `mutations.js`:  all mutations
- `mutationTypes.js`:  keep all mutation types here
- `actions.js`:  all actions
- `plugins/`:  plugins in flat structure
- `modules/`:  keep modules with appropriate named folders with same structure of files
- `index.js`:  where we assemble modules and export the store

**Note:** `public/` is outside of `src/` folder, keep static assets that are directly copied there

**Component styleguide:** Follow vue official [styleguide](https://vuejs.org/v2/style-guide/#Priority-B-Rules-Strongly-Recommended-Improving-Readability)


## Plugin options

* `Project name` - name of your repository, written to `package.json`
* `Project description` - description of your repository, written to `package.json`
* `Author` - author of your repository, written to `package.json`

### Additional plugins

#### Seven Gravity Gateway

In case Seven Gravity Gateway is accepted on project creation:
* `@nsoft/seven-gravity-gateway` is added as NPM dependecy 
* two utilities are created under `src/plugins/seven-gravity-gateway` which are promise based wrappers around `master/slave` instances 

##### Example 
```javascript
// Using slave
import GatewaySlave from '@/plugins/seven-gravity-gateway/slave';
const config = {
  slaveId: 'test',
  data: {
    dummyProp: 'dummyProp',
  },
  debug: true,
};
GatewaySlave.init(config).then(function() {
  // emit when slave is ready for interaction/futher message exchange
  GatewaySlave.api.emit({
    action: 'Slave.Loaded',
    data: {
      someData: 'data'
    }
  })
});

// using master
import GatewayMaster from '@/plugins/seven-gravity-gateway/master';
GatewayMaster.init({
  debug: false
});
GatewayMaster.addSlave({
  frameId: 'DummyFrame',
  slaveId: 'SlaveId',
}).then((message) => {
  // slave finished with loading and ready for interaction
});
```

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

## Testing

 - test files should be located next to file (xy.js and xy.spec.js)