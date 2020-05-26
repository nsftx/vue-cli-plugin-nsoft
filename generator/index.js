const fs = require('fs');
const rimraf = require('rimraf');

module.exports = (api, options, rootOptions) => {

  const pathsToRemove = [
    'src/router.js',
    'src/store.js',
    'src/components/HelloWorld.vue',
    'src/views',
  ]

  const removeConfigurations = () => {
    const packageConfig = api.resolve('./package.json');
    const configsToRemove = ['eslintConfig','browserslist','postcss','jest'];

    fs.readFile(packageConfig, 'utf8', (err, data) => {
      let parsedConfig = JSON.parse(data);

      configsToRemove.forEach((config) => {
        if(parsedConfig[config]) {
          delete parsedConfig[config]
        }
      })

      const modifiedPackageConfig = JSON.stringify(parsedConfig, null, 2);
      fs.writeFile(packageConfig, modifiedPackageConfig, (err) => {
        if (!err) return;

        api.exitLog(`Something went wrong.. ${err}`, 'error');
      });
    });
  }


  api.extendPackage({
    name: options.name,
    description: options.description,
    author: options.author,
    contributors: [],
    version: "0.1.0",
    private: true,
    scripts: {
      "serve": "vue-cli-service serve",
      "build": "vue-cli-service build --modern",
      "lint": "vue-cli-service lint",
      "test:coverage": "npm run test:unit && codecov",
      "test:e2e": "vue-cli-service test:e2e",
      "test:unit": "vue-cli-service test:unit",
      "test:unitUpdate": "vue-cli-service test:unit --u",
      "test:unitWatch": "vue-cli-service test:unit --watch",
    },
    dependencies: {
      "axios": "^0.19.2",
      "lodash": "^4.17.15",
      "numeral": "^2.0.6",
      "vue-router": "^3.1.6",
      "vuex": "^3.1.3"
    },
    devDependencies: {
      "@vue/cli-plugin-e2e-cypress": "~4.3.0",
      "@vue/cli-plugin-eslint": "~4.3.0",
      "@vue/cli-plugin-router": "~4.3.0",
      "@vue/cli-plugin-unit-jest": "~4.3.0",
      "@vue/cli-plugin-vuex": "~4.3.0",
      "@vue/eslint-config-airbnb": "^5.0.2",
      "@vue/test-utils": "1.0.0-beta.31",
      "babel-eslint": "^10.1.0",
      "eslint": "^6.7.2",
      "eslint-plugin-import": "^2.20.2",
      "eslint-plugin-vue": "^6.2.2",
      "babel-jest": "^23.6.0",
      "codecov": "^3.5.0",
      "sass": "^1.26.3",
      "sass-loader": "^8.0.2",
    }
  });

  if (options.sevenGravityGateway) {
    api.extendPackage({
      dependencies: {
        "@nsoft/seven-gravity-gateway": "^1.10.5"
      }
    });

    api.render('./template/seven-gravity-gateway', {
      ...options,
    });
  }

  api.render('./template/default', {
    ...options,
  });

  api.onCreateComplete(() => {

    removeConfigurations();

    pathsToRemove.forEach((path) => {
      rimraf(api.resolve(path), () => {});
    });

  });
}