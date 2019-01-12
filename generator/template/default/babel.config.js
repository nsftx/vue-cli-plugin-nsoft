const { workspaces = [] } = require('./package.json');

module.exports = {
  presets: [
    '@vue/app',
  ],
  babelrcRoots: workspaces.packages || workspaces,
};