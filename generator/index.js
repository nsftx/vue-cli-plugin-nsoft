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
      "build": "vue-cli-service build",
      "lint": "vue-cli-service lint",
      "test:coverage": "npm run test:unit && codecov",
      "test:e2e": "vue-cli-service test:e2e",
      "test:unit": "vue-cli-service test:unit",
      "test:unitUpdate": "vue-cli-service test:unit --u",
      "test:unitWatch": "vue-cli-service test:unit --watch",
    },
    dependencies: {
      "axios": "^0.18.0",
      "lodash": "^4.17.11",
      "numeral": "^2.0.6",
      "vue-router": "^3.0.1",
      "vuex": "^3.0.1"
    },
    devDependencies: {
      "babel-core": "7.0.0-bridge.0",
      "@vue/cli-plugin-e2e-nightwatch": "^3.9.2",
      "@vue/cli-plugin-unit-jest": "^3.9.0",
      "@vue/eslint-config-airbnb": "^4.0.0",
      "@vue/test-utils": "^1.0.0-beta.29",
      "babel-jest": "^23.6.0",
      "codecov": "^3.5.0",
      "node-sass": "^4.12.0",
      "sass-loader": "^7.1.0",
    }
  });

  if (options.sevenGravityGateway) {
    api.extendPackage({
      dependencies: {
        "@nsoft/seven-gravity-gateway": "^1.10.1"
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