const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: { providerImportSource: '@mdx-js/react' },
});

module.exports = withMDX({
  pageExtensions: ['js', 'md', 'mdx'],
  trailingSlash: true,
});
