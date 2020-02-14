const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
// const pluginSass = require("eleventy-plugin-sass");
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    'css': 'assets/css',
    'images': 'assets/images'
  });
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(syntaxHighlight);
  // eleventyConfig.addPlugin(pluginSass);
  return {
    dir: {
      input: 'views',
      output: 'docs'
    },
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    pathPrefix: '/design-system-pgm/'
  };
};