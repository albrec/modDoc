const eleventyNavigationPlugin = require("@11ty/eleventy-navigation")

module.exports = function(eleventyConfig) {

    eleventyConfig.addPlugin(eleventyNavigationPlugin)
    eleventyConfig.addPassthroughCopy("src/**/*.css")
    eleventyConfig.addPassthroughCopy("src/**/*.svg")

    return {
        dir: {
            input: 'src',
            output: '_site'
        }
    }
    
}