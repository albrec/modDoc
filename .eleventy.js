const eleventyNavigationPlugin = require("@11ty/eleventy-navigation")

module.exports = function(eleventyConfig) {

    eleventyConfig.addPlugin(eleventyNavigationPlugin)
    eleventyConfig.addPassthroughCopy("src/**/*.css")
    eleventyConfig.addPassthroughCopy("src/**/*.svg")

    eleventyConfig.addFilter('markdown', content => {
        let markdown = require('markdown-it')({
            html: true
        });
        return markdown.render(content);
    })

    return {
        dir: {
            input: 'src',
            output: '_site'
        }
    }
    
}