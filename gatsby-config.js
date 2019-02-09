require('dotenv').config()

module.exports = {
	siteMetadata: {
		title: 'Steve Wisner',
		description: `Portfolio website for Steve Wisner, creator of Property Data Generator.`,
		author: `Steve Wisner`,
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'gatsby-starter-default',
				short_name: 'starter',
				start_url: '/',
				background_color: '#fff',
				theme_color: '#fff',
				display: 'minimal-ui',
				icon: 'src/images/favorite-icon.png', // This path is relative to the root of the site.
			},
		},
		{
			// this awesomeness will read the UA-string and if it needs any of these polyfills it will send them down
			resolve: `gatsby-plugin-polyfill-io`,
			options: {
				features: [
					`default`,
					`CustomEvent`,
					`Object.assign`,
					`WeakMap`,
					`WeakSet`,
					`Map`,
					`Set`,
				],
				flags: [
					'gated',
				],
			},
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: "UA-114760466-1",
			},
		},
	],
}
