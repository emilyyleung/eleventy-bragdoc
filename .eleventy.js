module.exports = function (eleventyConfig) {

	// https://www.npmjs.com/package/eleventy-plugin-metagen
	eleventyConfig.addPlugin(require('eleventy-plugin-metagen'))

	// Add filters to Nunjucks
	eleventyConfig.addFilter("dateDisplay", require("./src/_filters/dates.js") );
	
	eleventyConfig.addPassthroughCopy("./src/css/")
	eleventyConfig.addPassthroughCopy("./src/images/")
	eleventyConfig.addWatchTarget("./src/css/")
	eleventyConfig.addWatchTarget("./src/images/")

	return {
		dir: {
			input: "src",
			output: "public"
		},
		pathPrefix: "/eleventy-bragdoc/"
	}
}