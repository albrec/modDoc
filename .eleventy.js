module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("src/**/*.css")
    eleventyConfig.addPassthroughCopy("src/**/*.svg")

    return {
        dir: {
            input: 'src',
            output: '_site'
        }
    }
    
}