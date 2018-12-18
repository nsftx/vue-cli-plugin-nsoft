module.exports = (api, options, rootOptions) => {
  api.extendPackage({
    name: options.name,
    description: options.description,
    author: options.author,
  });

  api.render('./template/default', {
    ...options,
  });
}