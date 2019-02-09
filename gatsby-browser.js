/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

exports.onClientEntry = () => {
	// Required polyfill for IE
	// Object-fit/Object-position polyfill for gatsby-image (IE)
	// https://github.com/gatsbyjs/gatsby/issues/2470
	// https://github.com/gatsbyjs/gatsby/issues/4021
	const testImg = document.createElement(`img`)
	if (
		typeof testImg.style.objectFit === `undefined` ||
        typeof testImg.style.objectPosition === `undefined`
	) {
		require('object-fit-images')
		// eslint-disable-next-line
    	console.log(`Object-fit/Object-position are polyfilled`)
	}
}
