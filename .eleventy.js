let syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
let markdownIt = require("markdown-it")
let markdownItAnchor = require("markdown-it-anchor")
let slugify = require('slugify')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight)

  eleventyConfig.addPassthroughCopy({'src/css': 'css'})
  eleventyConfig.addPassthroughCopy({'src/js': 'js'})
  eleventyConfig.addPassthroughCopy({'src/assets': 'assets'})

  eleventyConfig.setBrowserSyncConfig({
    logLevel: 'silent'
  })

  let mdIt = markdownIt({
		html: true,
		breaks: true,
		linkify: true
	})
	.use(markdownItAnchor, {
		permalink: true,
		slugify: s => slugify(s, { lower: true, remove: /[:’'`,&"]/g }),
		permalinkBefore: true,
		permalinkClass: 'direct-link',
		permalinkSymbol: '#',
		level: [1,2,3,4]
  })
  eleventyConfig.setLibrary('md', mdIt)

  return {
    dir: {
      input: 'src/docs',
      output: 'dist',
    }
  }
}
